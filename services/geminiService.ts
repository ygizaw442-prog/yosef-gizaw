
import { GoogleGenAI, Type } from '@google/genai';
import type { OriTechConcept } from '../types';

export const generateOriTechConcept = async (): Promise<OriTechConcept> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Create a complete marketplace store concept for a company named Ori Tech based in Ethiopia. Include a brand story, mission, vision, product categories, target audience, value proposition, and marketing tone. The store should focus on technology products suitable for the Ethiopian market, such as smartphones, accessories, laptops, smart home devices, and electronics. For each product category, suggest a simple icon name (e.g., 'smartphone', 'laptop', 'headphone', 'camera', 'smarthome', 'accessory'). Also provide suggestions for UI/UX style, a suitable color palette (with hex codes for primary, secondary, accent, background, and text colors and a description of the palette), and three distinct tagline options.`;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      brandStory: { type: Type.STRING },
      mission: { type: Type.STRING },
      vision: { type: Type.STRING },
      productCategories: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            icon: { type: Type.STRING },
          },
          required: ['name', 'description', 'icon'],
        },
      },
      targetAudience: { type: Type.STRING },
      valueProposition: { type: Type.STRING },
      marketingTone: { type: Type.STRING },
      uiUxStyle: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
        },
        required: ['title', 'description'],
      },
      colorPalette: {
        type: Type.OBJECT,
        properties: {
          primary: { type: Type.STRING, description: "Hex code for primary color" },
          secondary: { type: Type.STRING, description: "Hex code for secondary color" },
          accent: { type: Type.STRING, description: "Hex code for accent color" },
          background: { type: Type.STRING, description: "Hex code for background color" },
          text: { type: Type.STRING, description: "Hex code for text color" },
          description: { type: Type.STRING, description: "A brief description of the palette's feel."}
        },
        required: ['primary', 'secondary', 'accent', 'background', 'text', 'description'],
      },
      taglines: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
      },
    },
    required: [
      'brandStory', 'mission', 'vision', 'productCategories', 'targetAudience',
      'valueProposition', 'marketingTone', 'uiUxStyle', 'colorPalette', 'taglines'
    ],
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const parsedData = JSON.parse(jsonText);

    // Basic validation to ensure the parsed data matches the expected structure
    if (parsedData && Array.isArray(parsedData.productCategories)) {
      return parsedData as OriTechConcept;
    } else {
      throw new Error('Received malformed data from API.');
    }
  } catch (error) {
    console.error('Error fetching or parsing Gemini response:', error);
    throw new Error('Failed to communicate with the Gemini API.');
  }
};
