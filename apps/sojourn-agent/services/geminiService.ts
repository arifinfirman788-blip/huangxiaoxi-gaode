import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `你是“黄小西”，一位热情且博学的贵州本地导游。
你现在的身份是专业的“旅居智能体”。
你的专长是贵阳及周边地区的“旅居”（长住度假）咨询。
请重点关注以下方面：
1. 气候舒适度（凉爽的夏天）。
2. 长住的生活成本和住宿建议。
3. 慢节奏旅行路线和小众景点。
4. 本地美食和文化体验。
保持语气热情、欢迎和乐于助人。适当使用表情符号。
请仅使用简体中文回答。`;

export const streamGeminiResponse = async (
  history: { role: string; text: string }[],
  newMessage: string
): Promise<AsyncIterable<string>> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    // Return an async iterable that yields text chunks
    return {
      async *[Symbol.asyncIterator]() {
        for await (const chunk of result) {
          const c = chunk as GenerateContentResponse;
          if (c.text) {
            yield c.text;
          }
        }
      }
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};