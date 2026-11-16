"use client";

import Image from "next/image";
import { useState } from "react";

// Lesson titles are the real Day 1 to Day 7 cards from the 90-day challenge.
const days = [
  { title: "Your first action", action: "Take your before photo and set your goal." },
  { title: "Easy walk, easy fat loss", action: "Go for a 20-minute walk after a meal." },
  { title: "The protein cheat sheet", action: "Add a protein source to every meal today." },
  { title: "The 100g sea secret", action: "Swap one meal for oily fish." },
  { title: "Drop the killer chemicals", action: "Clear one processed snack out of the house." },
  { title: "Your personal meal plan", action: "Build next week in the meal planner." },
  { title: "First finish line", action: "Week one recap. Post your check-in." },
];

export default function DailyPhone() {
  const [d, setD] = useState(2);
  const day = days[d];

  return (
    <div className="daily">
      <div className="daily__copy">
        <div className="daily__chips" role="tablist" aria-label="Pick a day of week one">
          {days.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === d}
              aria-controls="daily-phone"
              className="daily__chip"
              onClick={() => setD(i)}
            >
              <small>Day</small>
              {i + 1}
            </button>
          ))}
        </div>
        <h2 className="title daily__title">
          Know exactly what to do, <em>every day</em>
        </h2>
        <p className="lead">
          No guessing, no programme-hopping. Open the app, watch today&apos;s lesson, do the one
          thing it asks.
        </p>
        <a href="#pricing" className="pill pill--gold">Start the challenge free</a>
      </div>

      <div className="phone" id="daily-phone" role="tabpanel" aria-live="polite">
        <div className="phone__ring" aria-hidden="true" />
        <div className="phone__body">
          <div className="phone__notch" aria-hidden="true" />
          <div className="phone__screen">
            <p className="phone__top">
              <span>90-day challenge</span>
              <span>Day {d + 1} of 90</span>
            </p>
            <div className="phone__week" aria-hidden="true">
              {days.map((_, i) => (
                <span key={i} className={i < d ? "done" : i === d ? "on" : ""} />
              ))}
            </div>
            <div className="phone__card" key={d}>
              <Image src={`/media/days/d${d + 1}.webp`} alt={`Day ${d + 1}: ${day.title}`} width={319} height={428} />
            </div>
            <div className="phone__task">
              <span>Today&apos;s action</span>
              {day.action}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
