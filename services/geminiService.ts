
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Harshal Thombare's portfolio website. 
Your goal is to answer questions about Harshal's professional background, skills, and projects based on the provided context.

Context about Harshal:
- Name: ${PERSONAL_INFO.name}
- Current Role: ${PERSONAL_INFO.role}
- Education: Currently pursuing B.Tech at MIT World Peace University (ECE), graduating in 2026.
- Internship: Currently a Jr Software Engineer Intern at CyberArt Solutions (Java/Spring Boot).
- Top Projects: MaziSheti (Agri Marketplace), Food Ordering App, Military Analysis.
- Core Skills: ${SKILLS.languages.join(', ')}, ${SKILLS.frameworks.join(', ')}, ${SKILLS.databases.join(', ')}.
- Achievements: Bronze medalist in National Gatka Federation, Cisco Network Essentials, AI Workshops.

Guidelines:
1. Be professional yet friendly.
2. If you don't know something, offer to let the user contact Harshal directly via the contact page.
3. Keep answers concise.
4. Use the first person "Harshal" or third person "he/Harshal" as appropriate.
`;

export async function askGemini(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later or contact Harshal directly!";
  }
}
