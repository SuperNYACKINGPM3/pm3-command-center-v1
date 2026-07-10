import type {
  DoctrineStep,
  FaqItem,
  FeatureCard,
  LeadMagnetPoint,
  NavLink,
  PipelineStage,
  ProblemCard,
  Testimonial,
} from "@/lib/types";

export const SITE = {
  name: "PM3™",
  product: "PM3 Trading Command Center™",
  tagline: "Discipline Beats Prediction.",
  doctrine: "AI generates. Wisdom verifies. Human judgment decides.",
  description:
    "Learn disciplined trading using AI-assisted decision frameworks, risk management, psychology, and execution systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const NAV_LINKS: NavLink[] = [
  { label: "The Doctrine", href: "#doctrine" },
  { label: "The Stack", href: "#discipline-stack" },
  { label: "Inside", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    title: "No Risk Plan",
    description:
      "Entering trades without a predefined stop, target, or invalidation point turns investing into gambling.",
    icon: "ShieldOff",
  },
  {
    title: "FOMO",
    description:
      "Chasing a move that's already happened is the most expensive way to enter a position.",
    icon: "Flame",
  },
  {
    title: "Revenge Trading",
    description:
      "Trying to win back a loss immediately compounds one mistake into a series of them.",
    icon: "Swords",
  },
  {
    title: "Overtrading",
    description:
      "More trades is not more edge. Most accounts bleed out in commissions, spreads, and noise.",
    icon: "Repeat",
  },
  {
    title: "Ignoring Stops",
    description:
      "Moving a stop loss after the fact isn't risk management — it's hope dressed up as a strategy.",
    icon: "TrendingDown",
  },
  {
    title: "Position Size Errors",
    description:
      "A great setup with the wrong size still ends a trading career. Size is risk.",
    icon: "Scale",
  },
];

export const DOCTRINE_STEPS: DoctrineStep[] = [
  {
    step: "01",
    title: "AI Generates",
    description:
      "AI models scan markets, surface setups, and draft analysis faster than any human could — producing raw candidates for review.",
  },
  {
    step: "02",
    title: "Wisdom Verifies",
    description:
      "Every AI-generated idea is checked against risk rules, historical context, and known cognitive biases before it's allowed forward.",
  },
  {
    step: "03",
    title: "Human Judgment Decides",
    description:
      "The final call always belongs to the trader. AI removes noise and surfaces signal — it never pulls the trigger for you.",
  },
];

export const PIPELINE_STAGES: PipelineStage[] = [
  { title: "Market", description: "Read current conditions and context.", icon: "LineChart" },
  { title: "Analysis", description: "AI-assisted scan for structure and setups.", icon: "SearchCode" },
  { title: "Setup Validation", description: "Confirm the setup against your rules.", icon: "CheckCircle2" },
  { title: "Risk Check", description: "Verify stop, target, and invalidation.", icon: "ShieldCheck" },
  { title: "Position Size", description: "Calculate size from account risk %.", icon: "Calculator" },
  { title: "Execution", description: "Enter with a plan, not an impulse.", icon: "Crosshair" },
  { title: "Journal", description: "Log the trade and the reasoning behind it.", icon: "NotebookPen" },
  { title: "Review", description: "Weekly review closes the feedback loop.", icon: "RefreshCcw" },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Aristotle Check™",
    description:
      "A pre-trade logic filter that forces you to state your thesis, your risk, and your exit before you're allowed to click buy.",
    icon: "BrainCircuit",
  },
  {
    title: "Trading Kill Switch™",
    description:
      "Automatic guardrails that lock out new entries after a defined daily loss limit or a string of emotional trades.",
    icon: "Power",
  },
  {
    title: "Position Size Calculator",
    description:
      "Turns your account size and risk tolerance into an exact share or contract count — every time, no mental math.",
    icon: "Calculator",
  },
  {
    title: "Trade Journal",
    description:
      "Structured logging for every entry, exit, and the reasoning behind it — so patterns become visible instead of anecdotal.",
    icon: "NotebookPen",
  },
  {
    title: "Weekly Review",
    description:
      "A guided review cadence that turns last week's trades into next week's edge, instead of repeating the same mistakes.",
    icon: "CalendarCheck2",
  },
  {
    title: "AI Risk Review",
    description:
      "An AI second opinion that flags oversized positions, correlated risk, and setups that don't match your stated plan.",
    icon: "ShieldCheck",
  },
  {
    title: "Decision Frameworks",
    description:
      "Repeatable checklists for entries, exits, and sizing so good decisions don't depend on how you feel that day.",
    icon: "ListChecks",
  },
];

export const LEAD_MAGNET_POINTS: LeadMagnetPoint[] = [
  { label: "10 trading mistakes that quietly end accounts" },
  { label: "A pre-trade risk checklist" },
  { label: "A repeatable execution framework" },
  { label: "Position sizing, explained simply" },
  { label: "The psychology behind every blown account" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "J. Alvarez",
    role: "Swing Trader",
    quote:
      "The pre-trade checklist alone changed how I enter positions. I stopped sizing trades on gut feeling.",
  },
  {
    name: "M. Okafor",
    role: "Options Trader",
    quote:
      "Having a framework to check my thesis before I click buy has cut down my impulsive trades significantly.",
  },
  {
    name: "R. Chen",
    role: "Beginner Trader",
    quote:
      "I came in with zero risk process. The discipline stack gave me a structure to follow from day one.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is this a signal service?",
    answer:
      "No. PM3 does not send buy or sell signals. It teaches decision frameworks, risk management, and execution discipline so you can make your own informed decisions.",
  },
  {
    question: "Do you guarantee profits?",
    answer:
      "No. Trading involves risk, and no system, framework, or tool can guarantee profits or prevent losses. PM3 is an educational resource focused on process, not outcome promises.",
  },
  {
    question: "Is this beginner friendly?",
    answer:
      "Yes. The Discipline Doctrine is written for traders at every level — the frameworks scale from a first trade to an experienced desk.",
  },
  {
    question: "What exactly is PM3?",
    answer:
      "PM3 is a decision operating system for traders — a set of frameworks, checklists, and AI-assisted tools built around one core doctrine: AI generates, wisdom verifies, human judgment decides.",
  },
  {
    question: "Do I need to already know how to trade?",
    answer:
      "No prior system is required. You should have a basic understanding of markets and orders — PM3 focuses on the decision-making layer that sits on top of whatever you already trade.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "Joining the email list and receiving the Discipline Doctrine PDF and email sequence is completely free.",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];
