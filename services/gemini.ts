import { GoogleGenAI } from "@google/genai";
import { Property } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getInvestmentAnalysis = async (property: Property): Promise<string> => {
  try {
    const prompt = `
      Actúa como un experto en inversiones inmobiliarias en Cartagena, Colombia.
      Analiza la siguiente propiedad para un potencial inversor:
      
      Título: ${property.title}
      Zona: ${property.zone}
      Precio: ${property.currency} ${property.price.toLocaleString()}
      Tipo: ${property.type}
      Área: ${property.area} m2
      
      Proporciona un análisis breve (máximo 100 palabras) sobre:
      1. Potencial de valorización en la zona ${property.zone}.
      2. Idoneidad para alquiler vacacional (Airbnb) o renta a largo plazo.
      
      Responde en texto plano, tono profesional pero persuasivo.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No se pudo generar el análisis.";
  } catch (error) {
    console.error("Error fetching Gemini analysis:", error);
    return "Ocurrió un error al consultar la IA. Por favor intenta más tarde.";
  }
};