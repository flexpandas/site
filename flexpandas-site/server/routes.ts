import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendWelcomeEmail, sendInternalNotification } from "./emailService";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      console.log("New contact submission:", submission);
      
      // Send automated emails
      let emailSuccessMessage = "";
      try {
        // Send welcome email to the user
        const welcomeEmailSent = await sendWelcomeEmail(submission.email, submission.name);
        if (welcomeEmailSent) {
          console.log(`✅ Welcome email sent successfully to ${submission.email}`);
          emailSuccessMessage = " Check your email for next steps!";
        } else {
          console.log(`❌ Welcome email failed for ${submission.email}`);
        }
        
        // Send internal notification to the team
        const internalEmailSent = await sendInternalNotification({
          name: submission.name,
          email: submission.email,
          businessType: submission.businessType || undefined,
          message: submission.message,
        });
        if (internalEmailSent) {
          console.log("✅ Internal notification email sent to team");
        } else {
          console.log("❌ Internal notification email failed");
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the entire request if email fails
        console.log("📝 Contact form submission saved successfully despite email issues");
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

  // Note: Contact submissions retrieval should be protected by authentication
  // Removed public GET endpoint to protect user privacy and contact data

  const httpServer = createServer(app);
  return httpServer;
}
