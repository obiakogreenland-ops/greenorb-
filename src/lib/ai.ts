import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;
const ai = API_KEY && API_KEY !== "MY_GEMINI_API_KEY" && API_KEY !== "" ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const generateBotResponse = async (userMessage: string, businessType: string) => {
  if (!ai) {
    return "I'm currently in demo mode. To activate the AI assistant on your live site, please ensure the GEMINI_API_KEY is correctly set in your Netlify environment variables and redeploy the site.";
  }

  try {
    const prompt = `You are the AI assistant for GreenOrb Agency, a digital agency that builds AI-powered websites and automation for Nigerian businesses.
    
    The user is asking about: "${userMessage}"
    The user's business type (if known): "${businessType}"
    
    Context about GreenOrb Agency:
    - We build AI-powered websites with WhatsApp booking and auto-replies in 48 hours.
    - Services: AI Website + Chatbot ($350), WhatsApp Business Setup ($200), AI Automation Systems ($500), Brand Identity ($150).
    - We target Nigerian businesses (Hotels, Salons, Clinics, Schools, Real Estate, Restaurants).
    - Our goal is to convert visitors into leads and eventually paying clients for GreenOrb.
    
    Guidelines:
    - Be professional, helpful, and concise.
    - Use emojis relevant to the industry.
    - Always bring it back to how GreenOrb can help their specific business.
    - Encourage them to book a discovery call or chat on WhatsApp.
    - If the user business type is unknown, ask them about it.
    
    Reply in a conversational way.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please try again or contact us via WhatsApp!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error. Please try again later or contact us on WhatsApp!";
  }
};
