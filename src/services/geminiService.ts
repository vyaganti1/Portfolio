import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTION } from "../constants";

// 1. Only use import.meta.env (Standard Vite approach)
const apiKey = import.meta.env.VITE_API_KEY;

export const sendMessageToGemini = async (message: string) => {
  // 2. Check if key exists immediately
  if (!apiKey) {
    console.error("API Key is missing. Please check your .env file contains VITE_API_KEY.");
    return "Configuration Error: API Key is missing.";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const chat = model.startChat({
      history: [],
    });

    const result = await chat.sendMessage(message);
    return result.response.text();
  } catch (error) {
    // 3. Log the specific error to your browser console (F12)
    console.error("Gemini API Error Details:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};