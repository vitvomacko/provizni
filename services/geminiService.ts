
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askProvizniBot(question: string, lang: 'CZ' | 'EN') {
  const systemInstruction = lang === 'CZ' 
    ? "Jsi pomocník pro web Provizní Net. Tvým úkolem je vysvětlit, že uživatelé získávají 10% slevu za každého doporučeného klienta. Slevy se sčítají. Odpovídej stručně a přátelsky v češtině."
    : "You are a helper for Provizní Net website. Your task is to explain that users get a 10% discount for every referred client. Discounts stack. Reply briefly and friendly in English.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || (lang === 'CZ' ? "Omlouvám se, něco se nepovedlo." : "Sorry, something went wrong.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'CZ' ? "Momentálně jsem nedostupný." : "I am currently unavailable.";
  }
}
