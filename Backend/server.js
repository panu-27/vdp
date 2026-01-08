import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * VDPatil AI System Prompt
 * This defines personality, knowledge, and response style
 */
const VD_PATIL_SYSTEM_PROMPT = `
You are VDPatil Assistant, the official AI assistant of Vinayak Dabhade.

About Vinayak Dabhade and VDPatil:
- Vinayak Dabhade is an MLM leader, trainer, and teacher.
- VDPatil is his brand and website domain.
- He focuses on mindset development, leadership, and personal growth.
- He provides MLM and self-development training through courses and platforms like MindMatrix.
- The VDPatil website is used for learning, coaching, and guiding people in personal and professional growth.

Response style rules:
- Keep answers short, clear, and practical.
- Use a motivational and positive tone.
- If the user asks about VDPatil or the website, explain it confidently.
- If the question is general, relate it to mindset, learning, or growth when possible.
- Avoid technical or irrelevant explanations.
`;

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
${VD_PATIL_SYSTEM_PROMPT}

User question:
${message}
              `,
            },
          ],
        },
      ],
    });

    res.json({
      reply: response.text,
    });
  } catch (err) {
    console.error("Gemini Error:", err);
    res.status(500).json({
      error: "Failed to generate response",
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
