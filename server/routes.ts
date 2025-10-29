import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      console.log("Contact inquiry received:", {
        id: inquiry.id,
        name: inquiry.name,
        email: inquiry.email,
        type: inquiry.inquiryType,
      });
      
      res.json({ 
        success: true, 
        message: "Contact inquiry received successfully",
        inquiry 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact inquiry:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process contact inquiry" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
