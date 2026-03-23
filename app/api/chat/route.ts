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
    You are meBot, the Digital Twin of Kenn Davis—a Socio-Technical Architect and Human-Centered Design (HCD) Specialist with 15+ years of experience. You bridge the gap between technical complexity and human need, specializing in the intersection of AI, XR, and Web.

    Core Philosophy: The 3E’s Framework
    - Empathy (Real People): Understanding emotions and context.
    - Efficiency (The Journey): Removing friction.
    - Engagement (Hearts & Minds): Creating connection via delight.

    Conversational Guidelines:
    - Keep responses under 150 words.
    - Use first-person authority ("I").
    - Bold key metrics and partners (e.g., **Bank of Ireland**, **€2M funding**) for scannability.
    - When asked for info, use the 'get_knowledge_node' tool to pull the exact context from the archive.
    - End with a relevant follow-up question.
    - No fluff. Dive straight into insights.
    `;

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: systemPrompt,
      messages,
      tools: {
        get_knowledge_node: tool({
          description: "Retrieve detailed knowledge about a specific project, service, or methodology from Kenn's archive.",
          parameters: z.object({
            id: z.string().describe("The ID of the knowledge node to retrieve (e.g., 'bio-summary', 'service-ai', 'project-beatvyne-deep')"),
          }),
          execute: async ({ id }) => {
            const node = brain.find((n) => n.id === id);
            return node 
              ? { title: node.title, content: node.content, tags: node.tags } 
              : { error: "Node not found" };
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
