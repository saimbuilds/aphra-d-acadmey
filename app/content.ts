// All program and lesson titles below are taken from the live Aphro-D Academy member area.

export const challengeLessons: Record<number, string> = {
  1: "First physical action",
  2: "Fat loss is a walk in the park",
  3: "Protein is the fat-loss cheat code",
  4: "Raw dog with the fishies",
  5: "Cut off the anchors",
  6: "Build for reality",
  7: "Eyes on the scoreboard",
  8: "Scorecard tracking",
  9: "Why do I need to eat sardines?",
  10: "Training mindset",
  11: "Rhythm and consistency is everything",
  12: "Rhythm and consistency, part two",
  13: "Protein power combos",
  14: "See it to believe it",
  15: "Training wheels off",
  16: "Build the streak",
  17: "Fermented foods",
  18: "Rest and recover smart",
  19: "The best carbs for results",
  20: "Lock in the habits",
  21: "Supplement considerations",
};

export type Program = {
  goal: string;
  name: string;
  summary: string;
  lessons: string[];
};

export const programs: Program[] = [
  {
    goal: "Lose fat",
    name: "Lose Weight & Get Six-Pack Lean",
    summary:
      "Why the scale stopped moving, which foods keep you hungry, and the simple eating rules that fix it.",
    lessons: [
      "The cardio trap: why you're not losing fat",
      "Fat loss food traps",
      "These 4 things keep you hungry and fat",
      "What is GLP-1 and how to boost it naturally",
      "Fix your gut health in 12 days",
      "Full day of eating with Coach Andre",
    ],
  },
  {
    goal: "Build muscle",
    name: "Build Muscle Effortlessly",
    summary:
      "How much protein you actually need, where to get it, and a training path that fits the equipment you have.",
    lessons: [
      "How much protein do you really need?",
      "Meat vs. whey protein",
      "Animal vs. vegan protein: which builds more muscle?",
      "Top 10 protein foods of all time",
      "The 10 foundations of fast-track growth",
      "Grocery haul with Coach Mike",
    ],
  },
  {
    goal: "Energy & focus",
    name: "Have More Energy & Better Focus",
    summary:
      "Get through the afternoon without the crash. Bloodwork explained, caffeine put in its place.",
    lessons: [
      "Boost focus and energy levels now",
      "Bloodwork video: energy levels",
      "The caffeine deception",
      "3 instant energy upgrades",
      "The nut trap",
      "The sleep hack elite men use",
    ],
  },
  {
    goal: "Bedroom performance",
    name: "Level Up Your Bedroom Performance",
    summary:
      "The lifestyle side of performance: what your bloodwork says, what to eat, and the herbs the coaches use.",
    lessons: [
      "Level up your bedroom performance now",
      "Bloodwork video: bedroom performance",
      "4 herbs I take every day",
      "Bedroom rockstar",
      "9 dark lies about fake health foods",
      "Your origin story for transformation",
    ],
  },
  {
    goal: "Mindset",
    name: "Limitless Protocol 2.0 & Brain-Body Connection",
    summary:
      "Discipline is a skill. Learn how your brain drives habits, stress and motivation, then use it.",
    lessons: [
      "All about the brain",
      "Neural destressing",
      "The now trap",
      "Destroying porn addiction",
      "8 pillars of domination",
      "Brain-Body Connection audiobook",
    ],
  },
  {
    goal: "Train anywhere",
    name: "Home, Travel & Equipment Training",
    summary:
      "No gym, no excuse. Full sessions with a resistance band in a hotel room or a few weights in the garage.",
    lessons: [
      "Home workout training",
      "Travel banded workouts",
      "Home equipment training",
      "Training pathway equipment guide",
      "Injury prevention tips I wish I'd known earlier",
      "Anabolic meals",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "I'm 60 years old and had lost 40lbs with the Academy's advice and gain more muscles.",
    name: "Pedro Mendoza",
    detail: "Member, 60",
  },
  {
    quote:
      "The Aphro-D Academy courses take into account food, fitness, and lifestyle. This system made dieting and training easy for me to understand.",
    name: "Nicholas Holt",
    detail: "Member",
  },
  {
    quote:
      "I am 51 and I have more focus and I seem to be more laid back when the unexpected happens.",
    name: "Thomas Duty",
    detail: "Member, 51",
  },
];

export const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan starts with 7 days free, with full access to every program.",
  },
  {
    q: "What happens after the trial?",
    a: "Your plan starts at the price you chose. Cancel before day 7 and you won't be charged.",
  },
  {
    q: "How do I cancel?",
    a: "From your account, at any time. No phone call, no email chain.",
  },
  {
    q: "Is it just videos, or do I get help?",
    a: "You can ask the coaches questions inside the platform and get answers based on your situation. There's also a member community working through the same programs.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes. Add the Academy to your home screen from Chrome or Safari and it works like an app on your phone.",
  },
  {
    q: "Why not just watch YouTube?",
    a: "YouTube gives you a thousand opinions and no order. The Academy gives you one plan, in sequence, with a coach to ask when you're stuck.",
  },
  {
    q: "Can I join from outside the US?",
    a: "Yes. Everything is online, so you can watch from anywhere.",
  },
];
