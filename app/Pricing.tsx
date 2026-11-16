"use client";

import { useState } from "react";

const plans = [
  { id: "monthly", label: "Monthly", price: "$14", per: "per month", note: "Flexible. Cancel anytime." },
  { id: "yearly", label: "Yearly", price: "$100", per: "per year", note: "$8.33 a month. You save $68." },
  { id: "lifetime", label: "Lifetime", price: "$600", per: "one time", note: "Pay once, keep access for good." },
];

const included = [
  "The 90-day Dad Bod to Jacked Bod challenge",
  "Every program: fat loss, muscle, energy, mindset, sleep",
  "Meal planner, anabolic meals and dessert recipes",
  "Ask the coaches, with answers for your situation",
  "Aphro-D Nation member community",
  "New courses every month",
];

export default function Pricing() {
  const [sel, setSel] = useState(1);
  const p = plans[sel];

  return (
    <div className="price">
      <div className="price__card">
        <div className="price__switch" role="radiogroup" aria-label="Billing">
          {plans.map((pl, i) => (
            <button
              key={pl.id}
              role="radio"
              aria-checked={i === sel}
              className="price__opt"
              onClick={() => setSel(i)}
            >
              {pl.label}
              {pl.id === "yearly" && <span className="price__save">Save 40%</span>}
            </button>
          ))}
        </div>
        <p className="price__amount" aria-live="polite">
          {p.price}
          <span>{p.per}</span>
        </p>
        <p className="price__note">{p.note}</p>
        <a href="#" className="pill pill--gold pill--block">Start your 7-day free trial</a>
        <p className="price__fine">You won&apos;t be charged if you cancel during the trial.</p>
      </div>
      <div className="price__list">
        <h3>Everything included</h3>
        <ul>
          {included.map((i) => (
            <li key={i}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
