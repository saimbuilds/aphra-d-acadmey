import Image from "next/image";
import DailyPhone from "./DailyPhone";
import Pricing from "./Pricing";
import { faqs, problems, programCards, testimonials, transformations } from "./content";

/*
  Section patterns, by reference:
  - Hero, founder, closing: Equinox / CCO Padel (editorial black-and-white photography, repeated photo slices)
  - Steps, problems marquee, comparison, pricing: Function Health
  - Daily phone, program cards: Ladder
  - Member stories: Future
  - Results wall: original to Aphro-D
*/

const LOGIN = "https://aphro-dacademy.com/members/";

function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="ic">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function Cross() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="ic ic--no">
      <path d="M4.5 4.5l7 7m0-7l-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Wall({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className={`wall__row${reverse ? " wall__row--rev" : ""}`}>
      <div className="wall__track">
        {[...items, ...items].map((src, i) => (
          <div className="wall__item" key={i} aria-hidden={i >= items.length}>
            <Image src={src} alt={i < items.length ? "Member before and after the 90-day challenge" : ""} width={319} height={267} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const half = Math.ceil(transformations.length / 2);

  return (
    <>
      <header className="nav">
        <div className="nav__bar">
          <a href="#top" className="brand" aria-label="Aphro-D Academy home">
            <span className="brand__mark">Aphro-D</span>
            <span className="brand__sub">Academy</span>
          </a>
          <nav className="nav__links" aria-label="Main">
            <a href="#how">How it works</a>
            <a href="#programs">Programs</a>
            <a href="#results">Results</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="nav__right">
            <a href={LOGIN} className="nav__login">Log in</a>
            <a href="#pricing" className="pill pill--gold pill--sm">Start free trial</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO (Equinox / CCO Padel) */}
        <section className="hero">
          <div className="hero__photo" aria-hidden="true">
            <Image src="/media/stock/hero.jpg" alt="" fill priority sizes="100vw" className="hero__img" />
          </div>
          <div className="hero__slices" aria-hidden="true">
            {[0, 1, 2].map((i) => <span key={i} style={{ ["--i" as string]: i }} />)}
          </div>
          <div className="hero__shade" />
          <div className="wrap hero__inner">
            <div className="hero__copy">
              <p className="badge">7 days free</p>
              <h1 className="hero__title">
                Get your body <em>back</em> after 40.
              </h1>
              <p className="hero__lede">
                A 90-day plan for men over 40. Training, food and mindset, with coaches who
                answer your questions.
              </p>
              <div className="hero__actions">
                <a href="#pricing" className="pill pill--light">Start your free trial</a>
                <a href="#results" className="hero__link">See member results</a>
              </div>
            </div>
            <dl className="hero__stats">
              <div><dt>10.8K</dt><dd>Men in the community</dd></div>
              <div><dt>200+</dt><dd>Video lessons</dd></div>
              <div><dt>$0.27</dt><dd>Per day, yearly plan</dd></div>
            </dl>
          </div>
        </section>

        {/* STEPS (Function Health) */}
        <section className="section" id="how">
          <div className="wrap">
            <h2 className="title title--center">Getting fit is <em>simple</em></h2>
            <div className="steps">
              <article className="step">
                <p className="step__n">01</p>
                <h3>Start the challenge</h3>
                <p>Set your goal and take your day-zero photo.</p>
                <div className="ui ui--days" aria-hidden="true">
                  {["0", "1", "2", "3", "4", "5", "6"].map((d) => (
                    <span key={d} className={d === "3" ? "is-on" : Number(d) < 3 ? "is-done" : ""}>
                      <small>Day</small>{d}
                    </span>
                  ))}
                </div>
              </article>
              <article className="step">
                <p className="step__n">02</p>
                <h3>One lesson a day</h3>
                <p>A short video and one action. Done in minutes.</p>
                <div className="ui ui--list" aria-hidden="true">
                  <p className="is-done"><i />Your first action</p>
                  <p className="is-done"><i />Easy walk, easy fat loss</p>
                  <p className="is-on"><i />The protein cheat sheet</p>
                </div>
              </article>
              <article className="step">
                <p className="step__n">03</p>
                <h3>Ask and track</h3>
                <p>Check in, post progress, ask the coaches.</p>
                <div className="ui ui--chat" aria-hidden="true">
                  <p className="me">Day 14 check-in done.</p>
                  <p className="them">Good. Keep the walks, add one more protein meal.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* DAILY PHONE (Ladder) */}
        <section className="section section--tight">
          <div className="wrap">
            <DailyPhone />
          </div>
        </section>

        {/* PROBLEMS MARQUEE (Function Health) */}
        <section className="section section--tight">
          <div className="wrap">
            <h2 className="title title--center">Built for what <em>changes</em> after 40</h2>
            <ul className="ticks">
              <li><Check />Made for men 40 and up</li>
              <li><Check />Train at home or the gym</li>
              <li><Check />Cancel anytime</li>
            </ul>
          </div>
          <div className="orbit">
            <div className="orbit__rows" aria-hidden="true">
              {[0, 1, 2].map((r) => (
                <div className={`orbit__row${r === 1 ? " orbit__row--rev" : ""}`} key={r}>
                  <div className="orbit__track">
                    {[...problems, ...problems].map((_, i) => (
                      <span key={i}>{problems[(i + r * 4) % problems.length]}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <figure className="orbit__card">
              <Image src="/media/t/t04.webp" alt="A member before and after the 90-day challenge" width={319} height={267} />
              <figcaption><span>Before</span><span>After</span></figcaption>
            </figure>
          </div>
        </section>

        {/* RESULTS WALL (original) */}
        <section className="section section--dark" id="results">
          <div className="wrap">
            <h2 className="title title--center">Members, <em>not models</em></h2>
            <p className="lead lead--center">Every photo is a real member who took on the 90-day challenge.</p>
          </div>
          <div className="wall">
            <Wall items={transformations.slice(0, half)} />
            <Wall items={transformations.slice(half)} reverse />
          </div>
        </section>

        {/* PROGRAM CARDS (Ladder) */}
        <section className="section" id="programs">
          <div className="wrap">
            <h2 className="title title--center">20 programs, <em>one membership</em></h2>
            <p className="lead lead--center">Pick a goal. The lessons are already in order.</p>
          </div>
          <div className="cards" tabIndex={0} aria-label="Programs, scroll sideways">
            {programCards.map((p) => (
              <article className="card" key={p.name}>
                <Image src={p.img} alt="" fill sizes="(max-width: 700px) 80vw, 340px" style={{ objectPosition: p.pos }} />
                <div className="card__body">
                  <p className="card__count">{p.count} lessons</p>
                  <h3 className="card__name">{p.name}</h3>
                  <p className="card__line">{p.line}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOUNDER (Equinox editorial) */}
        <section className="founder">
          <div className="founder__photo">
            <Image src="/media/founder.webp" alt="Farhan Khawaja, Ph.D." fill sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <div className="founder__copy">
            <p className="founder__kicker">Founder</p>
            <h2 className="founder__title">Led by a <em>Ph.D.</em>, not an influencer.</h2>
            <p className="founder__text">
              Farhan Khawaja built the Academy to go beyond sets and reps: how your brain drives
              your habits, appetite and energy, so the changes are easier to keep.
            </p>
            <div className="founder__book">
              <div className="founder__cover">
                <Image src="/media/p/p08.webp" alt="The Brain-Body Connection book cover" fill sizes="80px" />
              </div>
              <p><strong>The Brain-Body Connection</strong>His book and audiobook, included for members. Coaching with Coach Andre and Coach Mike.</p>
            </div>
          </div>
        </section>

        {/* MEMBER STORIES (Future) */}
        <section className="section">
          <div className="wrap">
            <h2 className="title title--center">Our members get <em>real results</em></h2>
            <p className="lead lead--center">In their own words, from the 10.8K men in Aphro-D Nation.</p>
            <div className="stories">
              {testimonials.map((t) => (
                <figure className="story" key={t.name}>
                  <div className="story__tile">
                    <span className="story__age" aria-hidden="true">{t.age ?? t.name.split(" ").map((w) => w[0]).join("")}</span>
                    <p className="story__who"><strong>{t.name}</strong>{t.detail}</p>
                  </div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON (Function Health) */}
        <section className="section section--tight">
          <div className="wrap">
            <h2 className="title title--center">Not your average <em>gym membership</em></h2>
            <div className="compare" role="table" aria-label="Aphro-D Academy compared with a personal trainer and YouTube">
              <div className="compare__head" role="row">
                <span role="columnheader" />
                <span role="columnheader" className="compare__us">Aphro-D</span>
                <span role="columnheader">Personal trainer</span>
                <span role="columnheader">YouTube</span>
              </div>
              {[
                ["Cost per month", "$8.33 to $14", "$200+", "Free"],
                ["Daily plan for men 40+", true, false, false],
                ["Nutrition and meal planner", true, false, false],
                ["Ask a coach", true, true, false],
                ["Sleep, stress and mindset", true, false, false],
                ["Community of 10.8K men", true, false, false],
                ["Train anywhere", true, false, true],
              ].map(([label, a, b, c]) => (
                <div className="compare__row" role="row" key={label as string}>
                  <span role="rowheader">{label}</span>
                  {[a, b, c].map((v, i) => (
                    <span role="cell" key={i} className={i === 0 ? "compare__us" : ""}>
                      {typeof v === "string" ? <span>{v}</span> : v ? <Check /> : <Cross />}
                      {typeof v === "boolean" && <span className="sr">{v ? "Yes" : "No"}</span>}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING (Function Health) */}
        <section className="section" id="pricing">
          <div className="wrap">
            <h2 className="title title--center">One membership, <em>every program</em></h2>
            <Pricing />
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--tight">
          <div className="wrap faq">
            <h2 className="title">Questions, <em>answered</em></h2>
            <div className="faq__list">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING (Equinox) */}
        <section className="closing">
          <Image src="/media/stock/hero-alt.jpg" alt="" fill sizes="100vw" className="closing__img" />
          <div className="closing__shade" />
          <div className="closing__inner">
            <h2 className="closing__title">Day one starts <em>today</em>.</h2>
            <a href="#pricing" className="pill pill--light">Start your 7-day free trial</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <p className="brand"><span className="brand__mark">Aphro-D</span><span className="brand__sub">Academy</span></p>
          <p className="footer__legal">
            Education, not medical advice. Talk to your doctor before changing your diet, training
            or supplements. Individual results vary.
          </p>
          <nav className="footer__links" aria-label="Footer">
            <a href={LOGIN}>Member login</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
