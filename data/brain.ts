export interface KnowledgeNode {
  id: string;
  category: "Philosophy" | "Project" | "Methodology" | "Biography" | "Technical" | "Service";
  title: string;
  content: string;
  tags: string[];
}

export const brain: KnowledgeNode[] = [
  {
    id: "philosophy-3es",
    category: "Philosophy",
    title: "The 3E's Framework",
    content: `The 3E's is Kenn's foundational design framework: Empathy (Real People), Efficiency (The Journey), and Engagement (Hearts & Minds).`,
    tags: ["HCD", "Framework"]
  },
  {
    id: "philosophy-four-pillars",
    category: "Philosophy",
    title: "The Four Pillars of Socio-Technical Design",
    content: `I organize my work and problem-solving approach into four strategic pillars:
    - Systems (Scalable Systems): Addressing large-scale complexity in IoT, sustainability, and startup strategy (e.g., RENEW, OODA).
    - Environments (Immersive Environments): Crafting AR/VR and Spatial Web experiences that map human narratives onto physical and digital spaces (e.g., TRAYLZ, Lost Voices).
    - Cognition (Cognitive Architecture): Designing for the human mind, focusing on sensory regulation, safety, and intuitive feedback loops (e.g., Elysium, Connect TFI).
    - Intelligence (Adaptive Intelligence): Leveraging Generative AI and RAG to create personalized, empathetic, and proactive discovery engines (e.g., QuestQuill, Spectrum AI).`,
    tags: ["Framework", "Strategy", "Systems", "Environments", "Cognition", "Intelligence"]
  },
  {
    id: "bio-summary",
    category: "Biography",
    title: "Kenn Davis Overview",
    content: `Kenn Davis is a Socio-Technical Architect and HCD Specialist with 15+ years of experience. MSc (1st Class Honors) in Creative Digital Media & UX.`,
    tags: ["Experience", "Education"]
  },
  {
    id: "bio-education",
    category: "Biography",
    title: "Academic Foundation & Advanced Training",
    content: `My academic background bridges creative media, technical engineering, and business strategy:
    - MSc in Creative Digital Media & UX (First Class Honours), Technological University Dublin (2025). Focus: Behavioral Change, User Research, Service Design, and Systems Thinking.
    - Diploma AI for Business, UCD Academy (Current).
    - Prof. Cert in Computer Science for Web Programming, Harvard University via edX (2021).
    - Post Grad Cert in Innovation & New Business Development, Dublin City University (2014).
    - Specialized AI Training: Google Advanced Gen AI (2025), ChatGPT Prompt Engineering for Developers (DeepLearning.AI, 2024), and AI & Creative Tech (Oxford Summer School, 2024).`,
    tags: ["Education", "MSc", "AI", "Harvard", "UCD", "TUDublin", "DCU"]
  },
  {
    id: "service-phygital",
    category: "Service",
    title: "Phygital Design & Strategy",
    content: `I specialize in Phygital Design—the seamless merging of physical and digital interactions. This involves:
    - Phygital Strategy & Blueprint: Defining visions and journey mapping across tangible and virtual domains (e.g., wayfinding apps).
    - Intuitive Applications: Powering the digital core of physical touchpoints.
    - Experiential Event Design: Strategically incorporating digital elements to enrich attendee experiences (e.g., beatvyne DTS).
    Approach: Using design thinking workshops to create interactions that offer enhanced utility and foster deeper engagement.`,
    tags: ["Phygital", "Strategy", "User Journey", "Events"]
  },
  {
    id: "service-xr",
    category: "Service",
    title: "XR Product Design & Strategy",
    content: `I craft immersive XR solutions with real-world impact across devices. Expertise includes:
    - Brand Activations: Memorable virtual experiences that amplify presence.
    - Training Simulations: Realistic environments for enhanced skill development.
    - Team Building & Conferences: Dynamic, accessible virtual spaces that connect attendees globally.
    Focus: Leveraging the 'always-on' potential of XR to leave lasting impressions and unlock new business possibilities.`,
    tags: ["XR", "VR", "Metaverse", "Simulations", "Conferences"]
  },
  {
    id: "service-ai",
    category: "Service",
    title: "AI Service Design",
    content: `I architect intelligent solutions through purposeful and responsible design. Focus areas:
    - Sophisticated AI Agents: Solving complex challenges and enabling novel business models.
    - Workflow Acceleration: Streamlining processes and providing proactive, context-aware information.
    - Trust & Clarity: Building confidence through clear communication of AI reasoning and user control.
    Goal: Transforming AI from a cold system into a helpful, understanding partner that yields significant insights and drives growth.`,
    tags: ["AI", "Service Design", "AI Agents", "Trust", "Ethics"]
  },
  {
    id: "methodology-ixd",
    category: "Methodology",
    title: "Human-Centered Interaction Design (IxD)",
    content: `My IxD methodology ensures effortless engagement across every brand touchpoint. 
    - Principles: Rooted in deep understanding of user behavior to identify friction points and ensure seamless transitions.
    - Application: Designing intuitive interfaces that bridge worlds—from wayfinding navigation to digital check-ins at physical events.
    - Outcome: Transforming functional apps into valuable tools that customers rely on and enjoy using.`,
    tags: ["IxD", "Interaction Design", "UX", "Navigation"]
  },
  {
    id: "methodology-branding",
    category: "Service",
    title: "Strategic Branding & Brand Strategy",
    content: `Crafting user-centric brand experiences for enduring growth. 
    - Phygital Branding: Weaving brand narrative and visual identity across physical and digital realms.
    - XR Branding: Extending brand reach into immersive digital environments for profound relationships.
    - AI Branding: Personalizing connections and enhancing value through intelligent, data-informed interactions.
    Strategy: Centering all efforts around audience needs to foster long-term loyalty.`,
    tags: ["Branding", "Brand Strategy", "Narrative", "Visual Identity"]
  },
  {
    id: "technical-stack",
    category: "Technical",
    title: "Technology Stack & Maker Profile",
    content: `I am a 'Maker' at heart. My technical toolkit includes:
    - Python: Data synthesis and AI logic.
    - React / Next.js: High-performance web architecture.
    - Unity / WebXR: Immersive experience development.
    - RAG & AI Orchestration: Building intelligent systems that bridge human sentiment with data.`,
    tags: ["Python", "React", "Unity", "AI"]
  },
  {
    id: "project-ooda-deep",
    category: "Project",
    title: "OODA: Simulation Business Board Game",
    content: `OODA is a simulation board game that mirrors the thrilling, high-stakes journey of building a startup.
    - Concept: Based on the military strategy 'Observe, Orient, Decide, Act' loop.
    - Mechanics: Players navigate 7 startup phases (Idea, Market Entry, Growth, Establishment, Diversification, Maturity, Exit) across 210 tiles.
    - Learning Value: Uses experiential learning to make complex business concepts accessible and memorable. It serves as a training tool for accelerators, brands, and universities to identify leaders and nurture strategic thinking.
    - Key Innovation: Players manage four critical resources—Cash, Product, Talent, and Morale—while navigating 'Wicked Problems' through rapid decision-making loops.`,
    tags: ["Simulation", "Gamification", "Business Strategy", "Experiential Learning"]
  },
  {
    id: "technical-genai-workflow",
    category: "Technical",
    title: "Generative AI as a Design Partner",
    content: `I integrate Generative AI as a core partner in my development and design workflows.
    - Case Study (OODA): AI was integral to developing game mechanics, conceptualizing rule scenarios for balance, and crafting realistic challenge/opportunity cards.
    - Visual Synthesis: Used AI to generate diverse, contextually relevant imagery for game phases and resource cards (Cash, Product, Talent, Morale).
    - Strategic Simulation: AI assisted in refining game balance by simulating various entrepreneurial scenarios to ensure a realistic 'roller-coaster' experience.`,
    tags: ["GenAI", "Workflow", "Visual Synthesis", "Iterative Design"]
  },
  {
    id: "project-elysium-deep",
    category: "Project",
    title: "Elysium: Purposeful VR Wellness",
    content: `Elysium is a VR wellness experience designed for restrictive environments (hospital beds, long-haul flights). 
    - Role: UX/Product Designer & Technical Developer (One-person team).
    - Design Principles: Biophilic mechanics, Minimal UI (Hick's & Fitts' Law), and an empathetic narrative guide (Foxoony).
    - Interdisciplinary Inspiration: Influenced by 'The Key' (storytelling), 'The First Tree' (aesthetics), and 'Avatar: The Last Airbender' (elemental puzzle philosophy).
    - Technical Innovation: Used Unity & XR Interaction Toolkit. Puzzles served a dual purpose—narrative engagement and performance optimization (triggering asset loading to maintain high frame rates).
    - Impact: Post-experience testing showed a mood increase from **33% to 83%** very positive.`,
    tags: ["VR", "Wellness", "Unity", "UX", "Performance Optimization"]
  },
  {
    id: "methodology-research-validation",
    category: "Methodology",
    title: "Mixed-Methods Research & Iterative Validation",
    content: `My design process is rigorously human-centered and data-driven.
    - Discovery: Blending quantitative (surveys of 50+ participants) with qualitative (semi-structured interviews and digital ethnography on Spatial.io).
    - Synthesis: Using Mind Maps and Affinity Diagrams to translate raw data into functional user requirements.
    - Iterative Testing: Five phases of validation, from low-fidelity prototyping to custom builds.
    - Outcome: My process identifies 'sensory regulation' opportunities and solves unpredictable user behaviors (like overlapping audio) through robust systems architecture.`,
    tags: ["Research", "Validation", "Ethnography", "Data Synthesis"]
  },
  {
    id: "project-beatvyne-deep",
    category: "Project",
    title: "beatvyne: Global Music Marketplace & Platform",
    content: `As Co-founder & CEO of beatvyne, I co-created products to scale the company internationally by aligning UX with human cognitive pre-requisites.
    - Impact: Secured **€50,000** in funding and achieved a **27% increase** in user engagement through extensive UX research.
    - Strategic Partnerships: Led brand identity and marketing strategies that attracted high-profile partners like **Jameson, Getty Images, IBM, Amazon, and Adobe**.
    - Performance: Orchestrated partnerships with world-class artists (e.g., **Björk Digital, Gorillaz**) and secured iconic spaces like **Dublin Castle** and the **GPO**, resulting in a **150% increase** in revenue from partnerships.
    - Methodology: Conducted mixed-methods research (surveys, ethnography, data analysis) to understand deep-seated user values.`,
    tags: ["MusicTech", "Leadership", "Partnerships", "Revenue Growth"]
  },
  {
    id: "project-beatvyne-dts",
    category: "Project",
    title: "Music x Tech Experience (DTS Conference)",
    content: `I co-created and implemented an annual conference exploring the intersection of technology, creativity, and sustainability.
    - Strategic Intelligence: Attracted leading innovators from **Amazon, IBM, and Adobe**.
    - Leadership & Coordination: Coordinated up to **80 contractors and speakers** to deliver the event.
    - Impact: Achieved an overall **productivity increase of 25%** through streamlined operational workflows and innovative collaboration methods like the 'World Café' workshop approach.`,
    tags: ["Events", "Socio-Technical", "Leadership", "Productivity"]
  },
  {
    id: "methodology-stakeholder-engagement",
    category: "Methodology",
    title: "Stakeholder Engagement & Co-Design",
    content: `Expertise in designing inclusive, creative workshops using the **World Café method**, **Empathy Mapping**, and tools like **Miro** and **InVision**. 
    - Case Study: At beatvyne, I used these tools to bridge the gap between artists and venue owners, resulting in a product roadmap that secured **€50,000** in funding.
    - Approach: Balancing competing needs among diverse groups to build consensus and translate user pain points into actionable design solutions.`,
    tags: ["Workshops", "World Café", "Co-Design", "Miro"]
  },
  {
    id: "methodology-virtual-ethnography",
    category: "Methodology",
    title: "Virtual Ethnography & Immersive Research",
    content: `Pioneered the use of **Virtual Ethnography** using **Spatial.io** and **Unity** to observe user behavior in simulated environments.
    - Innovation: Observing instinctive tactile interactions in VR revealed user needs that traditional surveys would miss.
    - Impact: This approach streamlined research time by **20%** and ensured that the Elysium VR experience resonated with a wide, diverse audience. 
    - Scalability: This model is highly adaptable for engaging citizens in the design of public services.`,
    tags: ["Ethnography", "User Research", "VR", "Spatial.io"]
  },
  {
    id: "bio-trinity-college",
    category: "Biography",
    title: "Strategic Data Analysis & Process Optimization (TCD)",
    content: `At Trinity College Dublin, I applied data science methods to analyze enrollment trends and student-to-staff ratios for **World University Rankings** and government reporting.
    - Decision Support: Produced comprehensive reports for the university board to inform strategic management and budget planning.
    - Optimization: Streamlined student achievement awards, addressed workflow bottlenecks in the Academic Registry, and developed a **smart inventory system** to improve resource allocation.
    - Tech Integration: Identified opportunities to leverage AI and automation to further optimize university procedures.`,
    tags: ["Data Science", "Trinity College", "Process Optimization", "Strategy"]
  },
  {
    id: "philosophy-public-service",
    category: "Philosophy",
    title: "Civic Design & Public Service Principles",
    content: `Deeply familiar with the **Irish Government's 10 design principles** for better public services.
    - Commitment: Passionate about leveraging XR and AI to contribute to UN Sustainable Development Goals (e.g., Earth Day 2024 immersive experience).
    - Advocacy: My approach ensures that public services are designed with the needs of citizens at the forefront, focusing on accessibility, iterative improvement, and high-quality aesthetics.`,
    tags: ["Public Sector", "Civic Design", "Ethics", "Accessibility"]
  },
  {
    id: "bio-learning-certs",
    category: "Biography",
    title: "Continuous Learning & Community Leadership",
    content: `A lifelong learner committed to staying at the forefront of AI and UX. 
    - Certifications: **ChatGPT Prompt Engineering**, **AI & Creative Tech (Oxford)**, and Django with React Native.
    - Community: Runs a weekly VR UX community of practice on **Spatial.io** to foster collaborative learning and knowledge sharing.`,
    tags: ["Learning", "AI", "Certifications", "Community"]
  },
  {
    id: "project-traylz-deep",
    category: "Project",
    title: "TRAYLZ: Augmented Reality for Smart Tourism",
    content: `I provided strategic leadership for TRAYLZ, a first-of-its-kind AR application featuring interlinked location-based narratives.
    - Impact: Co-raised funding through the **Blackstone/Techstars LaunchPad Fellowship** and secured a position on Enterprise Ireland’s New Frontiers Programme.
    - Strategic Partnerships: Established product-market fit with key clients including **Fáilte Ireland and Sony Music**.
    - Innovation: Co-designed and executed a location-based AR experience for **Dublin Tech Summit**, enhancing user engagement through immersive storytelling.
    - Methodology: Applied primary market research and UX methodologies to align technical roadmaps with the needs of diverse industry and academic stakeholders.
    - Technical Execution: Designed brand identity and developed a responsive web platform for fundraising and initial expressions of interest.`,
    tags: ["AR", "Augmented Reality", "Smart Tourism", "Funding", "Leadership"]
  },
  {
    id: "project-muso-social-innovation",
    category: "Project",
    title: "MUSO: Educational Services & Social Innovation",
    content: `Developed and delivered innovative educational programs and workshops that leveraged multi-mediums to develop employability skills and promote well-being among underserved youth.
    - Impact: Successfully reached **hundreds of participants nationally** and secured funding from educational bodies for program expansion.
    - National Recognition: Co-created and managed the first **National Youth Music Awards** in partnership with the **Irish Music Rights Organisation (IMRO)**, building community engagement through a national media campaign.
    - Operational Excellence: Operationalized workshop facilitation by designing scalable, high-quality resources tailored to various literacy levels and delivering training for facilitators.
    - Community Engagement: Managed commission-based partnerships to showcase participant achievements and foster local business relationships, raising funds for entrepreneurial initiatives.`,
    tags: ["Social Innovation", "Education", "Leadership", "IMRO", "Youth Empowerment"]
  },
  {
    id: "project-renew-deep",
    category: "Project",
    title: "RENEW: AI-Powered Energy IoT",
    content: `I led the product and design team for RENEW, an AI-powered IoT initiative supporting Ireland's 'National Recovery and Resilience Plan.'
    - Impact: The project was a crucial deciding factor in securing **€2 Million in Prize Phase funding** (via the €65M National Challenge Fund) to scale nationwide.
    - Leadership: Managed the full UX lifecycle and asynchronous collaboration with an international team of engineers and community leads.
    - Design Strategy: Built a high-fidelity MVP across iOS, Android, and Web, translating complex IoT telemetry into a human-centered application.
    - Validation: Used **NASA-TLX** data to prove reduced cognitive load and successfully tested the platform's ability to drive 'Demand Flexibility' habits.
    - Inclusion: Grounded the design in **Universal Design Principles**, ensuring no household is left behind in the digital transition.`,
    tags: ["IoT", "Sustainability", "Funding", "Leadership", "Universal Design"]
  },
  {
    id: "methodology-behavioral-science",
    category: "Methodology",
    title: "Behavioral Science & Accessibility Design",
    content: `I approach design as a behavioral intervention, using established frameworks to move users from passive observers to active participants.
    - Accessibility: Implemented a clinical 'Dark Mode' for photophobia/cataracts and 'Light Mode' for presbyopia, strictly adhering to **WCAG 2.1 AAA** standards.
    - Behavioral Nudging: Used the 'Traffic Light' paradigm (Green/Amber/Red) to reduce friction for sustainable choices.
    - Gamification: Leveraged **Social Proof** (Community Challenges) and **Operant Conditioning** (Positive Reinforcement) to turn low-interest tasks (checking bills) into high-engagement habits.
    - Relatability: Translated abstract carbon savings into tangible metrics (e.g., 'trees planted') to build emotional resonance.`,
    tags: ["Behavioral Science", "Accessibility", "Gamification", "Nudging", "WCAG"]
  },
  {
    id: "project-questquill-deep",
    category: "Project",
    title: "QuestQuill: Generative AI Literacy Platform",
    content: `QuestQuill is a next-generation AI literacy platform transforming reading into immersive, adaptive discovery.
    - Wicked Problem: Static education models and the 'engagement gap' in traditional literacy programs.
    - Human Need: Turning curiosity into mastery through hero-centric adventures and personalized difficulty curves.
    - Technical Bridge: Architected a generative literacy engine using Gemini 2.0 and a real-time data pipeline to map behavioral telemetry to pedagogical insights.
    - Impact: Validated engagement through hero-centric quest loops and automated differentiation for educators.`,
    tags: ["EdTech", "Generative AI", "Literacy", "Pedagogy", "Gemini 2.0"]
  },
  {
    id: "project-spectrum-ai-deep",
    category: "Project",
    title: "Spectrum AI: Empathetic Autism Support Agent",
    content: `Spectrum AI provides empathetic, evidence-based guidance for parents of newly diagnosed children with autism.
    - Wicked Problem: The 'Perfect Storm' of information overload and critical support gaps parents face during an initial diagnosis.
    - Human Need: An empathetic, 24/7 'first responder' that translates complex clinical jargon into actionable early-intervention steps.
    - Technical Bridge: Architected a RAG (Retrieval-Augmented Generation) system using Gemini Pro and ChromaDB to anchor AI responses to a curated knowledge base.
    - Impact: Democratized access to specialized support, reducing the 'time-to-action' during the critical early-intervention window.`,
    tags: ["HealthTech", "AI for Good", "Accessibility", "RAG", "Gemini Pro"]
  },
  {
    id: "project-netzero-deep",
    category: "Project",
    title: "NetZero: Sustainable Product Discovery & Transparency",
    content: `NetZero is a mobile platform providing instant sustainability transparency through barcode scanning and curated data, designed to solve 'decision fatigue' and skepticism around greenwashing.
    - Wicked Problem: Modern consumers are paralyzed by a saturated market and misleading 'green' labels. Identification of a 'source of truth' gap between brand claims and consumer values.
    - Research & Systems Thinking: Used Mixed-Methods (Surveys for 'Value Pillars' and Think-Aloud sessions) to identify comprehension gaps in sustainability jargon (e.g., ESG, Circular Economy).
    - Design Pivot: Shifted the Information Architecture after testing revealed high interaction cost. Moved the Barcode Scanner from a secondary nav item to the 'Hero' action on the Home Page, significantly reducing 'time-to-task' in retail environments.
    - Behavioral Science: Applied Incentive Salience (linking planet health to personal health), Positive Reinforcement (gamified dopamine hits), and Choice Architecture (Progressive Disclosure of complex ESG data to prevent cognitive overwhelm).
    - Visual Strategy: High-transparency aesthetic optimized for Visual Accessibility in high-glare retail environments.
    - Impact: Created a 'Single-Button' path to ethical consumption for consumers and helped brands align with ESG targets through verified trust.`,
    tags: ["Sustainability", "ESG Transparency", "Mobile Design", "HCD", "Systems Thinking", "Information Architecture", "Behavioral Science", "Circular Economy"]
  },
  {
    id: "project-lost-voices-deep",
    category: "Project",
    title: "Lost Voices: Immersive Climate Action Narrative",
    content: `Lost Voices (Children of the Anthropocene) is a cross-platform (VR, Web, Mobile) immersive experience designed to move users from climate 'despair' to 'agency' through real-world activist messaging.
    - Role: Project Management, Creative Direction, Development & UX; led an international team (Ireland, USA, South Africa).
    - Cross-Platform Strategy: 'Inclusivity-First' design optimized for the Global South (Web/Mobile) and tactile presence (VR). Used Diegetic UI (e.g., in-world phone booths) to maintain immersion.
    - Conversational AI (EDEN): Integrated 'EDEN,' a diegetic AI sustainability expert. Used Voice User Interface (VUI) principles to create a grounded, wise mentor persona that nudges users toward regenerative tasks.
    - Behavioral Science: Applied Contrast Theory (the 'See the Past' mechanic) to create an emotional anchor, Social Proof via real-world activist messages, and Choice Architecture ('Shape the Future') to foster personal responsibility.
    - Methodology: Combined mixed-method accessibility testing with NASA-TLX to ensure the AI mentorship reduced, rather than increased, cognitive load.`,
    tags: ["Climate Action", "Immersive Narrative", "VR", "WebXR", "Cross-platform UX", "AI Mentor", "VUI", "Behavioral Science", "Diegetic UI"]
  },
  {
    id: "project-connect-tfi-deep",
    category: "Project",
    title: "Connect TFI: Social Travel & Urban Safety",
    content: `Connect TFI transforms the utilitarian Transport for Ireland (TFI) app into a secure, social companion to reduce safety barriers.
    - Wicked Problem: Users reported significant frustration with complexity and a growing sense of insecurity (post-pandemic antisocial behavior).
    - Discovery: Mixed-methods research including Empathy Mapping (identifying 'vulnerability hotspots') and Qualitative Interviews to uncover friction points like surveillance inadequacy and coordination friction.
    - Behavioral Science: Built on the 'Social Safety Net' (Social Proof) where users travel in 'digital packs.' Leveraged 'Belonging' via real-time monitoring and reduced 'Interaction Cost' by maintaining visual coherence with the parent app.
    - Methodology: Followed a 'Think-Make-Check' cycle, using NASA-TLX to ensure social features didn't increase the cognitive burden of the already complex interface.
    - Strategic Impact: Nudged users toward exploration (increasing revenue), improved safety perception, and transformed the app from a 'check and close' tool into a high-engagement social platform.`,
    tags: ["Mobility", "Social Design", "Urban Safety", "Behavioral Science", "NASA-TLX", "HCD", "Mixed-Methods"]
  },
  {
    id: "project-shape-burst-deep",
    category: "Project",
    title: "Shape Burst: 3D Interactive Cognitive Engagement",
    content: `Shape Burst is a high-performance 3D interactive system exploring the boundary between generative art and cognitive engagement.
    - Wicked Problem: The '8-second attention span' and the perceived coldness of complex digital systems.
    - Human Need: Designing rewarding, high-contrast feedback loops that sustain focus and invite intuitive interaction.
    - Technical Bridge: Architected a modular Three.js/WebGL engine with independent classes for particle bursts and constellation lines.
    - Impact: Optimized for universal touch and performance, identifying strategic applications in cognitive healthcare and marketing 'dwell time.'`,
    tags: ["Creative Tech", "3D Web", "Cognitive UX", "Three.js", "WebGL"]
  },
];
