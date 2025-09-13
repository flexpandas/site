import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email notification here
      console.log("New contact submission:", submission);
      
      res.json({ 
        message: "Thank you for your message! We'll get back to you within 24 hours.",
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
