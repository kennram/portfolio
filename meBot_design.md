# meBot Design Documentation

## Overview
meBot is the Digital Twin of Kenn Davis, serving as a Socio-Technical Architect and HCD Specialist. It is designed to act as a pedagogical partner, bridging technical complexity with human needs.

## Architecture & Interaction Design

### Knowledge Base
- **Structure:** Centralized in `data/brain.ts` as a structured collection of `KnowledgeNode` objects. Each node contains metadata, content, and searchable tags.
- **Content Strategy:** Divided into Philosophy, Projects, Methodology, Biography, Technical, and Service categories.

### Conversational Design
- **Identity:** First-person authority, bolding key metrics/partners for scannability, concise (under 150 words).
- **Core Framework:** 3E's (Empathy, Efficiency, Engagement).
- **Proactive Retrieval (Agentic Pattern):** Instead of a static knowledge dump, meBot uses a `search_knowledge_base` tool to query the `brain.ts` content dynamically, ensuring responses are accurate, grounded, and efficient.

## Evolution History
- **v1.0:** Static injection of all knowledge into the system prompt. (Performance bottleneck; limited accuracy).
- **v2.0 (Current):** Agentic lookup using tool calling (`search_knowledge_base`) with explicit system instructions to proactively retrieve information.
- **Semantic UI Enhancements:** Added hover tooltips for 'Cognitive Load' and 'Status' to explain the archival classification system.

## Future Roadmap (CMS Phase)
- **Database Integration:** Moving from local `data/brain.ts` to PostgreSQL (Supabase).
- **Authentication:** Integrating NextAuth or Clerk for secure management.
- **Admin Dashboard:** Building a private UI for log/project creation, editing, and media asset management.
