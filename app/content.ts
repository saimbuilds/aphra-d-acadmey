// Course names, lesson titles, lesson counts, member photos and testimonials come from
// the live Aphro-D Academy site and member area. Lifestyle photography is free-licence
// stock from Pexels (see public/media/stock/CREDITS.md).

export const transformations = Array.from(
  { length: 22 },
  (_, i) => `/media/t/t${String(i + 1).padStart(2, "0")}.webp`,
);

export const problems = [
  "Belly fat that won't move",
  "Afternoon crashes",
  "Poor sleep",
  "Low drive",
  "Brain fog",
  "Sugar cravings",
  "Slow recovery",
  "Stress",
  "Stiff joints",
  "No time to train",
  "Confusing diet advice",
  "Losing muscle",
];

export const programCards = [
  { img: "/media/prog/lose.webp", pos: "50% 20%", count: 29, name: "Lose weight", line: "Drop the belly fat with simple food rules and walking, not endless cardio." },
  { img: "/media/prog/muscle.webp", pos: "50% 25%", count: 28, name: "Build muscle", line: "How much protein you need, where to get it, and how to train for it." },
  { img: "/media/stock/outdoor.jpg", pos: "50% 60%", count: 21, name: "Energy & focus", line: "Get through the afternoon without the crash. Bloodwork explained." },
  { img: "/media/prog/limitless.webp", pos: "50% 40%", count: 24, name: "Limitless", line: "Limitless Protocol 2.0. The full body-and-mind transformation." },
  { img: "/media/prog/brain.webp", pos: "50% 45%", count: 24, name: "Mindset", line: "Discipline, stress and habits. How your brain drives your body." },
  { img: "/media/stock/food.jpg", pos: "50% 70%", count: 25, name: "Anabolic meals", line: "High-protein meals and dessert recipes that fit the plan." },
  { img: "/media/stock/home.jpg", pos: "35% 60%", count: 23, name: "Train anywhere", line: "Home, equipment and travel band workouts. No gym needed." },
];

export const programs = [
  {
    name: "Lose weight & get lean",
    count: 29,
    lessons: ["The cardio trap", "Fat loss food traps", "What is GLP-1?", "Fix your gut in 12 days", "Full day of eating"],
  },
  {
    name: "Build muscle",
    count: 28,
    lessons: ["How much protein you need", "Meat vs. whey protein", "Top 10 protein foods", "10 foundations of growth", "Grocery haul"],
  },
  {
    name: "Energy & focus",
    count: 21,
    lessons: ["Boost energy now", "Bloodwork: energy levels", "The caffeine deception", "3 instant energy upgrades", "The nut trap"],
  },
  {
    name: "Bedroom performance",
    count: 24,
    lessons: ["Level up now", "Bloodwork: performance", "4 herbs I take every day", "Bedroom rockstar", "9 dark lies about health food"],
  },
  {
    name: "Mindset & discipline",
    count: 24,
    lessons: ["All about the brain", "Neural destressing", "The now trap", "Destroying porn addiction", "Habit formation"],
  },
];

export const morePrograms = [
  "Anabolic meals",
  "Dessert recipes",
  "Sleep hacks",
  "Home workouts",
  "Travel band workouts",
  "Brain-Body Connection",
];

export const testimonials = [
  {
    quote: "I'm 60 years old and had lost 40lbs with the Academy's advice and gain more muscles.",
    name: "Pedro Mendoza",
    detail: "Member, 60",
    age: "60",
  },
  {
    quote: "This system made dieting and training easy for me to understand.",
    name: "Nicholas Holt",
    detail: "Member",
    age: null as string | null,
  },
  {
    quote: "I am 51 and I have more focus and I seem to be more laid back when the unexpected happens.",
    name: "Thomas Duty",
    detail: "Member, 51",
    age: "51",
  },
];

export const faqs = [
  { q: "Is there a free trial?", a: "Yes. Every plan starts with 7 days free, with full access to every program." },
  { q: "What happens after the trial?", a: "Your plan starts at the price you chose. Cancel before day 7 and you won't be charged." },
  { q: "How do I cancel?", a: "From your account, at any time." },
  {
    q: "Is it just videos, or do I get help?",
    a: "Ask the coaches questions inside the platform and get answers for your situation. You also join Aphro-D Nation, the member community.",
  },
  { q: "Is there a mobile app?", a: "Yes. Add the Academy to your home screen from Chrome or Safari and it works like an app." },
  {
    q: "Why not just watch YouTube?",
    a: "YouTube gives you a thousand opinions and no order. The Academy gives you one plan, in sequence, with a coach to ask.",
  },
];
