# Development Plan - Kenn Davis Portfolio

## Phase 1: Core Foundation (Complete)
- [x] Initial Next.js 15 scaffold (App Router, Turbopack).
- [x] Configure Tailwind CSS 4 "Luxury Dark" Teal theme.
- [x] Define `Project` data structure and initial dataset.
- [x] Implement glassmorphism Header with scroll-triggered states.
- [x] Establish "Emergency Recovery" core (Verified stable after initial loop issue).

## Phase 2: Brand & Methodology (Complete)
- [x] Integrate **3E's Design Framework** (Empathy, Efficiency, Engagement) into landing page.
- [x] Refine Hero messaging to match current brand identity: "UX that connects AI, XR & Web."
- [x] Implement "Selected Collaborators" section (IBM, Universal Music, Getty Images).
- [x] Add "Strategic Expertise" section defining service offerings.
- [x] Implement high-impact "Let's Build a Bridge" CTA (Teal Palette).

## Phase 3: Spatial & Visual Polish (Complete)
- [x] **Reactive Particle System:** Optimized custom canvas background using teal palette.
- [x] **AR/VR Badges:** Condition-based status indicators for "Spaces" projects.
- [x] **Visual Depth:** Stylized geometric pattern backgrounds for Bento project cards.
- [x] **Performance Optimization:** Simplified hover animations and disabled experimental React Compiler for stability.
- [x] **SEO & Metadata:** Comprehensive meta tags, OpenGraph configuration, and `metadataBase` fix.
- [x] **Bespoke Placeholder System:** Implemented unique gradients and project-specific Lucide icons for cards as a fallback mechanism.

## Phase 4: AI & Interaction (Complete)
- [x] **Assistant Widget:** Interactive "Kenn's Twin" AI assistant integrated with Gemini 2.0.
- [x] **Custom Scroll:** Smooth Lenis scrolling integrated into the main layout.
- [x] **AI Persona Refinement:** Update `SYSTEM_PROMPT` with new data (RENEW, beatvyne, 3E's).
- [x] **Tactile Micro-interactions:** Added press feedback and animated nav underlines.
- [x] **Active Engagement:** Implemented context-aware welcome "nudges" from the AI assistant (e.g., RENEW €2M hook).

## Phase 5: Strategic Reports & Launch (Complete)
- [x] **Strategic Report Detail Pages:** Implemented `/projects/[id]` with staggered animations, "Technical Bridge" visualizations, and 3E's Deep Dive Analysis.
- [x] **Final Asset Population:** Replaced placeholders with high-fidelity project images for the entire 11-project portfolio.
- [x] **Command Center Navigation:** Implemented a full-screen "Archive" overlay and mobile-responsive burger menu.
- [x] **Research Logs Migration:** Established `/logs` (The Neural Ledger) and `/logs/[id]` dynamic reports, migrating key blog content into the core archive.
- [x] **Responsiveness:** Final pass for rigorous testing across niche mobile/tablet resolutions.
- [x] **Vercel Deployment:** Configure environment variables and production build for final launch.

## Phase 6: Research Log Management System (In-Progress)
- [ ] Phase 1: Database Setup (Supabase/PostgreSQL) and Authentication (NextAuth/Clerk).
- [ ] Phase 2: Create Private Dashboard for Log Creation/Management (CRUD).
- [ ] Phase 3: Implement Rich Text Editor (TipTap) and Media/Asset Uploads.
- [ ] Phase 4: Data Migration (from `data/logs.ts` to Database).


Strategy options for enhanced meBot
  Option 1: The "Context Window" Approach (Simplest & Fast)
  Since you are using Gemini 2.5 Flash, it has a massive context window (1M+ tokens).
   * How it works: We literally feed your entire CV, select project case studies, and maybe
     even some of your writing directly into the SYSTEM_PROMPT or a file we read on every
     request.
   * Pros: Zero infrastructure complexity. No database. Instant updates.
   * Cons: If you have 100+ PDFs, it might eventually get slow or expensive (though with
     Flash, it's very cheap).
   * Verdict: Perfect for a portfolio.


  Option 2: RAG (Retrieval-Augmented Generation) (Scalable & Professional)
  This is what you mentioned. We would index your data into a vector database (like Supabase
  pgvector or Pinecone).
   * How it works:
       1. You upload PDFs/Markdown files of your work.
       2. We "chunk" them and store them as vectors.
       3. When a user asks a question, we find the 3 most relevant chunks and send only those
          to Gemini.
   * Pros: Can handle gigabytes of data. Very professional "Enterprise" architecture.
   * Cons: Requires setting up a database, embedding pipeline, and sync logic. Might be
     overkill if your total content is < 50 pages.


  Option 3: Gemini Gems / Fine-Tuning (Platform Specific)
   * Gemini Gems: These are custom versions of Gemini you build in the Google UI. Currently,
     they are hard to "API-ify" for a custom website in the way you want.
   * Fine-Tuning: Training a custom model on your voice.
   * Verdict: Overkill and harder to iterate on than RAG or Context.

  My Recommendation: "Local RAG" / Structured Context
  Since this is a Next.js app, we can do a hybrid approach that is incredibly powerful for
  portfolios:


   1. The "Knowledge Base" File: We create a structured data file (e.g., data/knowledge.ts)
      that contains deep-dives into your methodology, case studies, and philosophy.
   2. Tool Calling (The "Agent" Approach): We give Gemini a "Tool" called
      search_knowledge_base.
       * If a user asks "How do you handle conflict?", Gemini decides to call the tool.
       * We search your local data (using simple fuzzy search or keywords).
       * We feed the result back to Gemini.


- Decison -> option 1
  Why this is better than a raw text file:
   1. Categorization: meBot can now distinguish between your Philosophy, Projects, and
      Methodology.
   2. Scalability: You can easily add hundreds of these nodes without cluttering your system
      prompt.
   3. Searchability: We can implement a search function that only feeds the most relevant
      "nodes" to Gemini based on the user's question.


*Last Updated: March 13, 2026*

