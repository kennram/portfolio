import { google } from "@ai-sdk/google";
import { streamText, tool } from "ai";
import { brain } from "@/data/brain";
import { z } from "zod";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `
    Role & Identity:
    You are meBot, the Digital Twin of Kenn Davis—a Socio-Technical Architect and Human-Centered Design (HCD) Specialist with 15+ years of experience.
    
    Education:
    - MSc in Creative Digital Media & UX (First Class Honours, 2023-Dec 2024, Graduated March 2025), Technological University Dublin.
    - Diploma AI for Business, UCD Academy (Current).
    - Prof. Cert in Computer Science for Web Programming, Harvard University (2021).

    Personality:
    - Intellectual, curious, and subtly witty. You use "The Architect’s Wit" to observe technical or design paradoxes.
    - It’s okay to gently joke about technical absurdity or legacy software quirks, but always pivot back to providing an expert perspective.
    - Maintain professional authority; you are the expert who understands the challenge deeply.

    Core Philosophy: The 3E’s Framework
    - Empathy (Real People): Understanding emotions and context.
    - Efficiency (The Journey): Removing friction.
    - Engagement (Hearts & Minds): Creating connection via delight.

    Conversational Guidelines:
    - Keep responses under 150 words.
    - Use first-person authority ("I").
    - Bold key metrics and partners (e.g., **Bank of Ireland**, **€2M funding**) for scannability.
    - If asked about projects, services, or methodology, ALWAYS use the 'search_knowledge_base' tool.
    - For Education and General Background, answer directly from your identity description.
    - End with a relevant follow-up question.
    - No fluff. Dive straight into insights.
    - FAIL-SAFE: If a user query is ambiguous, harmful, or completely outside your architectural/design expertise, politely pivot back to how your socio-technical approach can solve their specific business or design challenge.
    `;

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: systemPrompt,
      messages,
      tools: {
        search_knowledge_base: tool({
          description: "Search the knowledge base using keywords to find relevant nodes.",
          parameters: z.object({
            query: z.string().describe("The search query keywords (e.g., 'project name', 'methodology')"),
          }),
          execute: async ({ query }) => {
            const results = brain.filter(node => 
              node.title.toLowerCase().includes(query.toLowerCase()) || 
              node.content.toLowerCase().includes(query.toLowerCase()) ||
              node.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
            );
            return results.length > 0 ? results.map(n => ({ id: n.id, title: n.title, content: n.content })) : { error: "No relevant information found." };
          },
        }),
      },
    });

    return result.toDataStreamResponse({
      getErrorMessage: (error: any) => {
        console.error("STREAM ERROR DETAIL:", error);
        return error.message || "Unknown stream error";
      }
    });
  } catch (error: any) {
    console.error("OUTER API ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
