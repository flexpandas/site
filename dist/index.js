var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/load-env.js
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
try {
  const envContent = readFileSync(join(__dirname, ".env.local"), "utf8");
  const envLines = envContent.split("\n");
  for (const line of envLines) {
    if (line.trim() && !line.startsWith("#")) {
      const [key, ...valueParts] = line.split("=");
      if (key && valueParts.length > 0) {
        const value = valueParts.join("=");
        process.env[key.trim()] = value.trim();
      }
    }
  }
  console.log("Environment variables loaded from .env.local");
} catch (error) {
  console.log("No .env.local file found, using system environment variables");
}

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactSubmissions: () => contactSubmissions,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
var users = sqliteTable("users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contactSubmissions = sqliteTable("contact_submissions", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  businessType: text("business_type"),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  businessType: true,
  message: true
});

// server/db.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
var dbPath = process.env.DATABASE_PATH || "local.db";
var sqlite = new Database(dbPath);
var db = drizzle(sqlite, { schema: schema_exports });

// server/storage.ts
import { eq, desc } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async createContactSubmission(insertSubmission) {
    const [submission] = await db.insert(contactSubmissions).values({
      ...insertSubmission,
      businessType: insertSubmission.businessType || null
    }).returning();
    return submission;
  }
  async getContactSubmissions() {
    const submissions = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
    return submissions;
  }
};
var storage = new DatabaseStorage();

// server/emailService.ts
import sgMail from "@sendgrid/mail";
var isInitialized = false;
function initializeMailService() {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("\u26A0\uFE0F  SENDGRID_API_KEY not configured - emails will be skipped");
    return false;
  }
  if (!isInitialized) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    isInitialized = true;
  }
  return true;
}
function escapeHtml(text2) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return text2.replace(/[&<>"']/g, (m) => map[m]);
}
function formatMessage(text2) {
  return escapeHtml(text2).replace(/\n/g, "<br>");
}
async function sendEmail(params) {
  if (!initializeMailService()) {
    return false;
  }
  try {
    const emailData = {
      to: params.to,
      from: params.from,
      subject: params.subject
    };
    if (params.text) {
      emailData.text = params.text;
    }
    if (params.html) {
      emailData.html = params.html;
    }
    await sgMail.send(emailData);
    return true;
  } catch (error) {
    console.error("SendGrid email error:", {
      message: error.message,
      code: error.code,
      response: error.response?.body,
      to: params.to,
      from: params.from
    });
    if (error.code === 403) {
      console.error("SendGrid 403 Error: This usually means:");
      console.error("1. Sender email not verified with SendGrid");
      console.error("2. API key lacks sufficient permissions");
      console.error("3. Account needs domain authentication");
      console.error(`Current sender email: ${params.from}`);
      console.error("Please verify your sender email in SendGrid dashboard");
    }
    return false;
  }
}
var SENDER_EMAIL = process.env.SENDGRID_SENDER_EMAIL || "hello@flexpandas.com";
async function sendWelcomeEmail(userEmail, userName) {
  const emailContent = {
    to: userEmail,
    from: SENDER_EMAIL,
    // Using verified sender email
    subject: "\u{1F43C} Welcome to Flexpandas - Your Automation Journey Starts Here!",
    text: `Hi ${escapeHtml(userName)},

Thank you for reaching out to Flexpandas! We're excited to help you save 20+ hours every month through smart automation.

Here's what happens next:
- Our team will review your message within 24 hours
- We'll send you a personalized audit checklist based on your business type
- If it's a good fit, we'll schedule your free 15-minute strategy call

While you wait, here are some quick wins you can implement today:
1. Set up Google Workspace automation rules for your emails
2. Use Zapier to connect your most-used tools
3. Create templates for your most common responses

Looking forward to transforming your business operations!

Best regards,
The Flexpandas Team \u{1F43C}

P.S. Follow us on social media for daily automation tips:
- LinkedIn: linkedin.com/company/flexpandas  
- Instagram: @flexpandas`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #10B981; font-size: 28px; margin: 0;">\u{1F43C} Welcome to Flexpandas</h1>
        <p style="color: #6B7280; font-size: 18px; margin: 10px 0;">Your Automation Journey Starts Here!</p>
      </div>
      
      <div style="background: #F9FAFB; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
        <p style="margin: 0 0 15px 0; color: #374151;">Hi <strong>${escapeHtml(userName)}</strong>,</p>
        <p style="margin: 0; color: #374151;">Thank you for reaching out to Flexpandas! We're excited to help you <strong>save 20+ hours every month</strong> through smart automation.</p>
      </div>
      
      <h2 style="color: #1F2937; font-size: 22px; margin: 25px 0 15px 0;">What happens next:</h2>
      <ul style="color: #374151; padding-left: 20px;">
        <li style="margin-bottom: 8px;">Our team will review your message within 24 hours</li>
        <li style="margin-bottom: 8px;">We'll send you a personalized audit checklist based on your business type</li>
        <li style="margin-bottom: 8px;">If it's a good fit, we'll schedule your free 15-minute strategy call</li>
      </ul>
      
      <div style="background: #EFF6FF; border-left: 4px solid #10B981; padding: 20px; margin: 25px 0;">
        <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">Quick wins you can implement today:</h3>
        <ol style="color: #374151; margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Set up Google Workspace automation rules for your emails</li>
          <li style="margin-bottom: 8px;">Use Zapier to connect your most-used tools</li>
          <li style="margin-bottom: 8px;">Create templates for your most common responses</li>
        </ol>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://calendly.com/flexpandas" style="background: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Book Your Free Strategy Call</a>
      </div>
      
      <p style="color: #374151; margin: 25px 0 15px 0;">Looking forward to transforming your business operations!</p>
      
      <p style="color: #374151; margin: 0 0 5px 0;"><strong>Best regards,</strong><br>The Flexpandas Team \u{1F43C}</p>
      
      <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; margin-top: 30px; text-align: center;">
        <p style="color: #6B7280; font-size: 14px; margin: 0 0 15px 0;"><strong>P.S.</strong> Follow us on social media for daily automation tips:</p>
        <div style="text-align: center;">
          <a href="#" style="color: #10B981; text-decoration: none; margin: 0 10px;">LinkedIn</a>
          <a href="#" style="color: #10B981; text-decoration: none; margin: 0 10px;">Instagram</a>
        </div>
      </div>
    </div>
    `
  };
  return await sendEmail(emailContent);
}
async function sendInternalNotification(contactData) {
  const emailContent = {
    to: process.env.TEAM_EMAIL || SENDER_EMAIL,
    from: SENDER_EMAIL,
    // Using verified sender email
    subject: `\u{1F3AF} New Contact Form Submission from ${escapeHtml(contactData.name)}`,
    text: `New contact form submission received:

Name: ${escapeHtml(contactData.name)}
Email: ${escapeHtml(contactData.email)}
Business Type: ${escapeHtml(contactData.businessType || "Not specified")}
Message: ${escapeHtml(contactData.message)}

Please follow up within 24 hours.`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #10B981;">\u{1F3AF} New Contact Form Submission</h1>
      
      <div style="background: #F9FAFB; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(contactData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(contactData.email)}</p>
        <p><strong>Business Type:</strong> ${escapeHtml(contactData.businessType || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${formatMessage(contactData.message)}
        </div>
      </div>
      
      <div style="background: #FEF3CD; border: 1px solid #FCD34D; padding: 15px; border-radius: 5px; margin-top: 20px;">
        <p style="margin: 0; color: #92400E;"><strong>Action Required:</strong> Please follow up within 24 hours.</p>
      </div>
    </div>
    `
  };
  return await sendEmail(emailContent);
}

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      console.log("New contact submission:", submission);
      let emailSuccessMessage = "";
      try {
        const welcomeEmailSent = await sendWelcomeEmail(submission.email, submission.name);
        if (welcomeEmailSent) {
          console.log(`\u2705 Welcome email sent successfully to ${submission.email}`);
          emailSuccessMessage = " Check your email for next steps!";
        } else {
          console.log(`\u274C Welcome email failed for ${submission.email}`);
        }
        const internalEmailSent = await sendInternalNotification({
          name: submission.name,
          email: submission.email,
          businessType: submission.businessType || void 0,
          message: submission.message
        });
        if (internalEmailSent) {
          console.log("\u2705 Internal notification email sent to team");
        } else {
          console.log("\u274C Internal notification email failed");
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        console.log("\u{1F4DD} Contact form submission saved successfully despite email issues");
      }
      res.json({
        message: `Thank you for your message! We'll get back to you within 24 hours.${emailSuccessMessage}`,
        success: true
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Please check your form fields and try again.",
          errors: error.errors,
          success: false
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          message: "Sorry, there was an error sending your message. Please try again later.",
          success: false
        });
      }
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    const fallbackPath = path2.resolve(process.cwd(), "dist", "public");
    if (fs.existsSync(fallbackPath)) {
      app2.use(express.static(fallbackPath));
      app2.use("*", (_req, res) => {
        res.sendFile(path2.resolve(fallbackPath, "index.html"));
      });
      return;
    }
    throw new Error(
      `Could not find the build directory. Tried: ${distPath} and ${fallbackPath}. Make sure to build the client first.`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "3000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
