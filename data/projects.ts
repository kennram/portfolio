export interface Project {
  id: string;
  title: string;
  pillar: "Systems" | "Environments" | "Cognition" | "Intelligence";
  category: string;
  description: string;
  wickedProblem: string;
  humanNeed: string;
  technicalBridge: string;
  engagementMetric: string;
  longDescription: string;
  outcomes: string[];
  techStack: string[];
  tags: string[];
  link?: string;
  image?: string;
  span: "small" | "medium" | "large";
  isSpatial?: boolean;
}

export const projects: Project[] = [
  {
    id: "renew",
    title: "RENEW",
    pillar: "Systems",
    category: "Scalable Systems",
    description: "An AI-powered IoT initiative focused on national sustainable energy practices and grid resilience.",
    wickedProblem: "Large-scale IoT telemetry is often too abstract for meaningful human-centered energy action.",
    humanNeed: "Translating sophisticated telemetry into an uncompromisingly accessible and actionable experience for diverse stakeholders.",
    technicalBridge: "Led the product team across iOS, Android, and Web to create a unified design language and high-fidelity interactive MVP.",
    engagementMetric: "Secured €2M in Prize Phase funding via the €65M National Challenge Fund.",
    longDescription: "As the Product & Design lead, I managed the full UX lifecycle for RENEW, a critical component of Ireland's 'National Recovery and Resilience Plan.' I collaborated asynchronously with an international team to code the frontend for a high-fidelity MVP, bridging the gap between large-scale sensor data and human utility.",
    outcomes: [
      "Secured €2M in national scaling funding.",
      "Unified design language across iOS, Android, and Web platforms.",
      "Crucial deciding factor for national-level sustainable energy infrastructure."
    ],
    techStack: ["IoT", "AI", "React", "Swift", "Kotlin", "TypeScript"],
    tags: ["Sustainability", "National Infrastructure", "Energy"],
    image: "/projects/renew.jpeg",
    span: "large",
  },
  {
    id: "net-zero",
    title: "NetZero",
    pillar: "Systems",
    category: "Scalable Systems",
    description: "A mobile platform providing instant sustainability transparency through barcode scanning and curated data.",
    wickedProblem: "Modern consumers are paralyzed by a saturated market and misleading 'green' labels, leading to skepticism and decision fatigue.",
    humanNeed: "Turning time-consuming sustainability research into a single-button action integrated into the 'on-the-go' shopping experience.",
    technicalBridge: "Led the design of a barcode-scanning interface that maps complex curated ESG data to instant consumer feedback.",
    engagementMetric: "Significant reduction in user research time per purchase during pilot testing.",
    longDescription: "Modern consumers want to shop sustainably but are often overwhelmed by greenwashing. NetZero is a mobile solution I designed to provide instant transparency. By integrating barcode scanning with curated sustainability data, we transformed a research-heavy process into a seamless part of the physical shopping journey.",
    outcomes: [
      "Designed a high-friction-to-zero-action consumer flow.",
      "Developed a design system for rapid 'green' data visualization.",
      "Bridged the gap between ESG transparency and daily consumer behavior."
    ],
    techStack: ["Mobile UX", "Barcode Integration", "Curated ESG Data", "React Native"],
    tags: ["Sustainability", "ESG Transparency", "Mobile Design"],
    image: "/projects/netzero.jpg",
    span: "medium",
  },
  {
    id: "lost-voices",
    title: "Lost Voices",
    pillar: "Environments",
    category: "Immersive Environments",
    description: "A cross-platform immersive experience (VR, Web, Mobile) empowering climate action through narrative.",
    wickedProblem: "Traditional education often fails to convey the scale and emotional weight of the climate crisis.",
    humanNeed: "Engaging players in an emotionally resonant journey that moves them from virtual exploration to real-world action.",
    technicalBridge: "Led project management, creative direction, and development to create a cohesive experience across VR, Web, and Mobile.",
    engagementMetric: "Measured increase in climate advocacy engagement among players.",
    longDescription: "Lost Voices - Children of the Anthropocene is an immersive post-apocalyptic world centered on the real-world messages of youth activists. My goal as lead designer was to create a cohesive, emotionally resonant experience that empowers players to transition from the digital world to meaningful real-world environmental action.",
    outcomes: [
      "Directed cross-platform immersive narrative for climate action.",
      "Bridged virtual world-building with real-world activist messaging.",
      "Managed full UX and development lifecycle for VR, Web, and Mobile."
    ],
    techStack: ["VR", "WebXR", "Creative Direction", "Cross-platform UX"],
    tags: ["Climate Action", "Immersive Narrative", "Youth Activism"],
    image: "/projects/lost-voices.jpg",
    span: "large",
    isSpatial: true,
  },
  {
    id: "traylz",
    title: "TRAYLZ",
    pillar: "Environments",
    category: "Immersive Environments",
    description: "AR-driven heritage exploration platform, treating locations as living records.",
    wickedProblem: "Historical significance is often lost in modern urban development.",
    humanNeed: "Mapping human narratives onto the built environment to preserve cultural identity.",
    technicalBridge: "Used AR-anchoring to create 'Ghost Windows'—mapping historical coordinates to physical space.",
    engagementMetric: "40% increase in site engagement among younger demographics.",
    longDescription: "TRAYLZ redefines how we interact with historical sites. By utilizing the Spatial Web and AR, we created immersive portals into the past, ensuring that human narratives are never lost behind technical novelty.",
    outcomes: [
      "Developed a proprietary AR anchoring system for heritage sites.",
      "Partnered with 5 national museums for trial implementations.",
      "Preserved architectural significance through digital storytelling."
    ],
    techStack: ["8th Wall", "Three.js", "WebXR", "Next.js"],
    tags: ["AR", "Heritage", "Spatial Web"],
    image: "/projects/traylz.jpeg",
    span: "medium",
    isSpatial: true,
  },
  {
    id: "beatvyne",
    title: "beatvyne",
    pillar: "Environments",
    category: "Immersive Environments",
    description: "A global digital ecosystem and live music marketplace connecting artists, hosts, fans, and brands.",
    wickedProblem: "Fragmented music ecosystems hindered artists from finding venues and fans from discovering unique local experiences.",
    humanNeed: "Empowering all stakeholders through a user-centric platform that simplifies event management and fosters genuine social connection.",
    technicalBridge: "Led foundational UX research and strategic design to build a brand and platform that attracted collaborators like IBM, Universal Music, and Getty Images.",
    engagementMetric: "Validated concept through key strategic partnerships and high-profile collaborations.",
    longDescription: "As Co-founder and CEO, I directed the vision for beatvyne to establish it as a thought leader at the intersection of music and technology. This culminated in the 'Music x Tech Experience.' My role combined strategic leadership with hands-on generative research, translating deep user insights into a platform strategy that bridged the gap between fragmented industry needs and high-profile brand objectives.",
    outcomes: [
      "Established strategic partnerships with IBM, Universal Music, and Getty Images.",
      "Created the 'Music x Tech Experience' thought leadership initiative.",
      "Translated foundational UX research into a validated, user-centric ecosystem strategy."
    ],
    techStack: ["UX Research", "Strategic Design", "Ecosystem Mapping", "Product Vision"],
    tags: ["Music Tech", "Marketplace", "Strategic UX"],
    link: "https://www.beatvyne.com",
    image: "/projects/beatvyne.jpg",
    span: "medium",
    isSpatial: true,
  },
  {
    id: "elysium",
    title: "Elysium",
    pillar: "Cognition",
    category: "Cognitive Architecture",
    description: "A purposeful VR wellness experience designed to alleviate acute stress and sensory confinement in restrictive environments.",
    wickedProblem: "The 'Confinement Paradox'—where life-saving clinical care or global travel environments create extreme restriction, sensory overload, and a total loss of user agency.",
    humanNeed: "Sensory regulation and a restored sense of 'world.' Users need to transition from passive, trapped observers to active participants in a restorative, biophilic environment.",
    technicalBridge: "Synthesized Unity with interactive narrative puzzles and a modular architecture (Foxoony onboarding guide) to synchronize environmental pacing with user movement.",
    engagementMetric: "70% of users preferred interactive biophilic mechanics over passive VR, reporting a deep state of 'flow' and significant reduction in perceived confinement time.",
    longDescription: "Elysium is a VR ecosystem that breaks the psychological walls of clinical and travel environments. By utilizing biophilic design principles and interactive 'puzzles as metaphors' for emotional regulation, the project transforms VR into a therapeutic tool that restores agency and provides a scientifically-grounded escape from physical restriction.",
    outcomes: [
      "Released functional MVP on SideQuest (Early Access) for traveler anxiety testing.",
      "Developed a 'Portal' navigation system to reduce cognitive load and motion sensitivity.",
      "Integrated immersion-first tutorials into an AI-narrative guide to maintain user presence."
    ],
    techStack: ["Unity (C#)", "XR Interaction Toolkit", "SideQuest", "Spatial Audio", "C#"],
    tags: ["VR", "Mental Health", "Biophilia", "Spatial UX"],
    link: "https://sidequestvr.com/app/41287/elysium",
    image: "/projects/elysium.jpg",
    span: "large",
    isSpatial: true,
  },
  {
    id: "connect-tfi",
    title: "Connect TFI",
    pillar: "Cognition",
    category: "Cognitive Architecture",
    description: "Transforming a utilitarian transport tool into a secure, social companion to reduce safety barriers in public travel.",
    wickedProblem: "Users reported significant frustration with complexity and a growing sense of insecurity during public travel.",
    humanNeed: "Reducing the 'perceived lack of safety' and antisocial behavior barriers through social connection.",
    technicalBridge: "Integrated a social travel layer into the TFI ecosystem using real-time location sharing and group coordination.",
    engagementMetric: "Improved user sentiment regarding safety and social ease in pilot conceptual tests.",
    longDescription: "Despite being a primary transport tool, users of the TFI (Transport for Ireland) app reported significant frustration. In this conceptual exercise, I led the design of 'Connect'—a social layer that leverages real-time location sharing, group coordination, and social planning to transform the app into a secure companion that addresses psychological barriers to public transport usage.",
    outcomes: [
      "Conceptualized a social travel layer for the national TFI ecosystem.",
      "Identified and addressed key psychological barriers to public transit.",
      "Designed real-time coordination features to enhance perceived safety."
    ],
    techStack: ["HCD", "UX Research", "Mobile Design", "Coordination APIs"],
    tags: ["Mobility", "Social Design", "Urban Safety"],
    image: "/projects/connect-tfi.jpg",
    span: "medium",
  },
  {
    id: "questquill",
    title: "QuestQuill",
    pillar: "Intelligence",
    category: "Adaptive Intelligence",
    description: "A next-generation AI literacy platform transforming reading into immersive, adaptive discovery.",
    wickedProblem: "Static education models and the 'engagement gap' in traditional literacy programs that fail to address diverse cognitive needs.",
    humanNeed: "Turning curiosity into mastery through hero-centric adventures and a personalized difficulty curve that fosters a lifelong love for reading.",
    technicalBridge: "Architected a generative literacy engine using Gemini 2.0 and a real-time data pipeline to map behavioral telemetry to pedagogical insights.",
    engagementMetric: "Validated engagement through hero-centric quest loops and automated differentiation for educators.",
    longDescription: "QuestQuill moves beyond static e-books into generative literacy. By combining the creative power of Gemini 2.0 with rigorous pedagogical tracking, it identifies specific reading struggles in real-time. The platform empowers students through personalized quests, while providing teachers and parents with a 'Pedagogical Advisor'—a research-backed engine that delivers tailored instructional strategies based on student data.",
    outcomes: [
      "Eliminated the manual burden of differentiated instruction for educators.",
      "Pioneered a 'generative literacy' model where learners drive the narrative.",
      "Integrated behavioral analytics to flag and address literacy gaps autonomously."
    ],
    techStack: ["Gemini 2.0", "Next.js", "Vercel", "Cinematic Audio Engine", "Behavioral Analytics"],
    tags: ["EdTech", "Generative AI", "Literacy", "Pedagogy"],
    link: "https://questquill.vercel.app/",
    image: "/projects/questquill.jpg",
    span: "medium",
  },
  {
    id: "spectrum-ai",
    title: "Spectrum AI",
    pillar: "Intelligence",
    category: "Adaptive Intelligence",
    description: "An AI-powered support agent providing empathetic, evidence-based guidance for parents of newly diagnosed children with autism.",
    wickedProblem: "The 'Perfect Storm' of information overload and critical support gaps parents face during an initial autism diagnosis.",
    humanNeed: "An empathetic, 24/7 'first responder' that translates complex clinical jargon into actionable early-intervention steps.",
    technicalBridge: "Architected a RAG (Retrieval-Augmented Generation) system using Gemini Pro and ChromaDB to anchor AI responses to a curated knowledge base.",
    engagementMetric: "Democratized access to specialized support, reducing the 'time-to-action' during the critical early-intervention window.",
    longDescription: "Spectrum AI serves as an intelligent companion for parents navigating the overwhelming early stages of an autism diagnosis. By combining empathetic natural language interaction with a rigorous, evidence-based knowledge base, the system provides immediate, personalized guidance to bridge the gap between initial diagnosis and professional specialist consultation.",
    outcomes: [
      "Automated sifting of complex medical documentation into actionable steps.",
      "Provided 24/7 accessibility for crisis-moment queries and emotional validation.",
      "Mapped personalized resources based on user-specific context and distress levels."
    ],
    techStack: ["Python", "Gemini Pro", "ChromaDB", "RAG Architecture", "Semantic Search"],
    tags: ["HealthTech", "AI for Good", "Accessibility", "RAG"],
  
    image: "/projects/spectrum-ai.jpg",
    span: "large",
  },
  {
    id: "ooda",
    title: "OODA",
    pillar: "Systems",
    category: "Scalable Systems",
    description: "An immersive business simulation translating military strategy into a high-stakes startup board game.",
    wickedProblem: "The 'Fog of Startup War'—where traditional business education fails to capture the non-linear, high-stakes reality of rapid-fire decision making.",
    humanNeed: "Safe-to-fail strategic intuition; a 'flight simulator' for leaders to build muscle memory in resource allocation and collaborative negotiation.",
    technicalBridge: "Architected a generative AI-driven scenario engine to balance complex game rules and create 50+ contextually relevant market disruptions.",
    engagementMetric: "Over 50 AI-generated scenarios across 4 startup lifecycle phases; designed for leadership accelerators and corporate agility programs.",
    longDescription: "OODA is a physical/digital hybrid simulation that bridges military strategy with business logic. By leveraging Generative AI to craft realistic scenarios and balance resource dynamics (Cash, Product, Talent, Morale), the project provides a low-risk environment for teams to sharpen their strategic OODA loop (Observe-Orient-Decide-Act) under pressure.",
    outcomes: [
      "Dynamic Rule Balancing: Used GenAI to simulate and refine game mechanics for optimal complexity.",
      "Visual Immersion: Created a cohesive visual language for resource states using AI-driven asset generation.",
      "Experiential Learning: Developed a social strategy framework that facilitates collaborative problem-solving."
    ],
    techStack: ["Generative AI", "Game Theory", "Midjourney", "Narrative Design", "Python"],
    tags: ["Systems Thinking", "Simulation", "Strategy", "Game Design"],
    image: "/projects/ooda.jpg",
    span: "medium",
  },
  {
    id: "shape-burst",
    title: "Shape Burst",
    pillar: "Cognition",
    category: "Cognitive Architecture",
    description: "A high-performance 3D interactive system exploring the boundary between generative art and cognitive engagement.",
    wickedProblem: "The '8-second attention span' and the perceived coldness of complex digital systems.",
    humanNeed: "Designing rewarding, high-contrast feedback loops that sustain focus and invite intuitive interaction.",
    technicalBridge: "Architected a modular Three.js/WebGL engine with independent classes for particle bursts and constellation lines, reducing development time by 70% through AI-assisted workflows.",
    engagementMetric: "Live prototype deployed at shapeburst.netlify.app; optimized for universal touch and performance.",
    longDescription: "Shape Burst is more than a game; it is a proxy for human-centric system design. By utilizing Three.js and particle physics, I created an environment where complex code responds to human presence with cinematic fluidity. The project explores cross-industry applications—from gamified cognitive training for ADHD to immersive 3D data visualization for fintech.",
    outcomes: [
      "Pioneered a modular 3D architecture for rapid creative scaling.",
      "Identified strategic applications in cognitive healthcare and marketing 'dwell time.'",
      "Created a high-fidelity bridge between abstract code and sensory delight."
    ],
    techStack: ["Three.js", "WebGL", "JavaScript (Modular)", "AI-Assisted Dev"],
    tags: ["Creative Tech", "3D Web", "Cognitive UX"],
    image: "/projects/shape-burst.jpg",
    link: "https://shapeburst.netlify.app",
    span: "small",
  },
];
