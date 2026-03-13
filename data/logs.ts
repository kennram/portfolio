export interface ResearchLog {
  id: string;
  title: string;
  date: string;
  category: "Empathy Report" | "Efficiency Report" | "Engagement Study";
  cognitiveLoad: "Low: Narrative" | "Medium: Strategic" | "High: Architectural";
  summary: string;
  content: string; // We'll use this for the initial migration before moving to MDX if needed
  tags: string[];
  readTime: string;
  status: "ARCHIVED" | "LIVE_FEED" | "DECRYPTED";
  image?: string;
}

export const logs: ResearchLog[] = [
  {
    id: "spectrum-ai-architecture",
    title: "Democratizing Early Autism Intervention through Empathetic AI Architectures",
    date: "March 15, 2026",
    category: "Empathy Report",
    cognitiveLoad: "High: Architectural",
    summary: "A deep dive into building RAG-based support systems that bridge the gap between clinical jargon and parental emotional stability.",
    readTime: "8 min",
    status: "DECRYPTED",
    tags: ["HealthTech", "RAG", "Empathetic AI", "HCD"],
    image: "/projects/spectrum-ai.jpg",
    content: `
## The Wicked Problem: The "Diagnostic Void"
When a child is first diagnosed with autism, parents enter a "diagnostic void"—a high-stress period where they are overwhelmed by clinical documentation, long specialist waiting lists, and a total loss of agency. The technical challenge isn't just data retrieval; it's **contextual translation**.

## The Socio-Technical Solution
Spectrum AI wasn't built to replace clinicians, but to serve as a **Socio-Technical First Responder**. 

### 1. Empathetic RAG (Retrieval-Augmented Generation)
We anchored Gemini Pro to a curated knowledge base using ChromaDB. Unlike standard chatbots, we prioritized semantic search that weighted results based on the *emotional sentiment* of the query. If a parent is in crisis, the system shifts from clinical data to emotional validation and immediate actionable steps.

### 2. Cognitive Load Management
By translating medical jargon into biophilic-informed narrative arcs, we reduced the perceived "weight" of the information. We treated data packets as "support milestones" rather than just search results.

## The Technical Bridge: Mapping Sentiment to Action
The architecture uses a three-tier validation loop:
- **Input:** Natural language query + Sentiment Analysis.
- **Processing:** RAG retrieval + Contextual Filtering (removing jargon).
- **Output:** Empathetic response + "One-Click" intervention strategy.

## Strategic Impact
By reducing the "time-to-action" during the critical early-intervention window, we democratized access to specialized support that was previously gated by high costs or geographic barriers.
    `
  },
  {
    id: "aqua-aeterna-behavioral",
    title: "The Behavioral Design of Tranquility: Nudging Wellbeing in Virtual Spaces",
    date: "January 12, 2026",
    category: "Engagement Study",
    cognitiveLoad: "Medium: Strategic",
    summary: "How Aqua Aeterna uses luminous waterscapes and architectural pacing to physically slow users down and prime them for real-world meditation.",
    readTime: "7 min",
    status: "LIVE_FEED",
    tags: ["Behavioral Design", "Wellness", "VR", "Cognitive Architecture"],
    image: "/projects/elysium.jpg",
    content: `
## The Wicked Problem: Digital Sensory Overload
Most virtual environments prioritize "retention" through high-frequency stimulation, leading to sensory overload and user fatigue. They fail to provide the cognitive "rest" that modern users desperately need.

## The Strategic Solution: Architectural Pacing
In Aqua Aeterna, we replaced traditional "gamified" loops with **Behavioral Cues for Calm**.

### 1. Luminous Priming
By using bioluminescent waterscapes, we created a visual "shorthand" for tranquility. These colors aren't just aesthetic; they act as a biological anchor to lower the user's heart rate and focus their attention.

### 2. Physical Slow-Downs
The architectural layout of the space forces the user to move at a deliberate pace. By removing "teleportation" and high-speed movement, we physically nudge the user into a state of mindfulness.

## The Technical Bridge: Sentiment to Sensory
The system monitors user movement telemetry. If a user moves too rapidly or erratically, the environmental audio shifts to a deeper, more resonant frequency, subtly encouraging them to regulate their pacing.

## Strategic Impact: The Real-World Prime
The ultimate goal of Aqua Aeterna isn't just to stay in the digital world. It is a "Cognitive Gym" that primes users for real-world meditation, proving that digital sanctuaries can enhance, rather than replace, physical wellbeing.
    `
  },
  {
    id: "lost-voices-climate",
    title: "No More Green: Using VR to Punch Through Climate Numbness",
    date: "November 14, 2025",
    category: "Empathy Report",
    cognitiveLoad: "Low: Narrative",
    summary: "Abstract data fails to move the needle. Lost Voices replaces statistics with a visceral 'shithole future' to provoke real-world environmental action.",
    readTime: "5 min",
    status: "ARCHIVED",
    tags: ["Climate Action", "VR Narrative", "Empathy Design", "Impact"],
    image: "/projects/lost-voices.jpg",
    content: `
## The Wicked Problem: The "Data Disconnect"
Climate change is often presented as a series of abstract percentages and melting glacier photos. This "data distance" creates a psychological numbness—people see the numbers but don't feel the weight of the loss.

## The Strategic Solution: Visceral Immersion
In *Lost Voices: Children of the Anthropocene*, we stripped away the "green" and replaced it with a "Ghost World."

### 1. The Phone Booths as Time Capsules
Users navigate a dried-out ocean floor and find abandoned phone booths. Inside, they hear the voices of children—messages recorded today, played in a future that didn't listen. This transforms a global crisis into a direct, personal encounter.

### 2. The Agency of Repair
The experience doesn't just show the disaster; it requires the user to perform small acts of repair within the simulation. This restores a sense of agency that is often lost when facing the scale of the climate crisis.

## The Technical Bridge: Mapping Narrative to Emotion
We used spatial audio to create a sense of "proxemic intimacy." The closer the user gets to a voice, the more the background environment recedes, creating a one-on-one dialogue that breaks the "Fourth Wall" of digital media.

## Strategic Impact: Provoking Awakening
By shoving the user's face into the "stink of the dying fish" and the silence of the birds, we provoke a visceral response that abstract reports can never achieve. It is a digital intervention designed to rattle the cages of the numb.
    `
  },
  {
    id: "socio-technical-hexagon",
    title: "Beyond the Screen: The Hexagon Model for Joint System Optimization",
    date: "February 28, 2026",
    category: "Efficiency Report",
    cognitiveLoad: "Medium: Strategic",
    summary: "Why top-down digital transformation fails and how the Hexagon Model provides a framework for aligning technology with human behavior.",
    readTime: "6 min",
    status: "ARCHIVED",
    tags: ["Systems Thinking", "Organizational Design", "Digital Transformation"],
    image: "/projects/ooda.jpg",
    content: `
## The Wicked Problem: Technical Tunnel Vision
Most digital transformations fail because they treat "Technical" and "Social" systems as separate entities. When we optimize only for technical efficiency, we often create "Social Friction"—resistance, misalignment, and ultimately, system abandonment.

## The Hexagon Model: A Unified Architecture
The Hexagon Model (Davis et al.) posits that every system is comprised of six interdependent nodes:
1. **Goals:** What we are trying to achieve.
2. **Technology:** The tools we build to achieve it.
3. **People:** The actors within the system.
4. **Culture:** The shared values and norms.
5. **Structure:** The hierarchy and processes.
6. **Infrastructure:** The physical/spatial environment.

## The Socio-Technical Solution: Joint Optimization
True innovation occurs not when we build the "best" tool, but when we build the tool that most effectively supports the other five nodes. 

### Strategic Shift 1: Culture-First UI
Interface design must reflect the culture of the organization. If an organization values autonomy, the software should empower distributed decision-making rather than centralized control.

### Strategic Shift 2: Spatial Scaffolding
Digital tools exist within physical spaces. We must design XR and Web experiences that respect the physical infrastructure they occupy.

## Strategic Impact: The Bridge
By using the Hexagon Model, we transform "Software Development" into "Socio-Technical Orchestration." This leads to higher adoption rates, reduced cognitive friction, and systems that are resilient to organizational change.
    `
  }
];
