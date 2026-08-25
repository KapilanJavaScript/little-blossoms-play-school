import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Baby, Blocks, BookOpen, Palette, Phone } from "lucide-react";

import { Reveal, ScrollProgress, SmoothScroll } from "@/components/custom-ui/LbInteractive";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV_LINKS = [
  { href: "#welcome", label: "Welcome" },
  { href: "#programs", label: "Programs" },
  { href: "#day", label: "A day inside" },
  { href: "#families", label: "Families" },
];

const PROGRAMS = [
  {
    icon: Baby,
    chip: "lb-bg-sun",
    name: "Playgroup",
    ages: "Ages 1.5 to 2.5",
    copy: "A warm first step into school, full of songs, hugs and soft toys.",
  },
  {
    icon: Blocks,
    chip: "lb-bg-leaf",
    name: "Nursery",
    ages: "Ages 2.5 to 3.5",
    copy: "Building blocks, colours and make-believe that grows little minds.",
  },
  {
    icon: BookOpen,
    chip: "lb-bg-blossom",
    name: "Kindergarten",
    ages: "Ages 3.5 to 5",
    copy: "Letters, numbers and curiosity, taught gently through play.",
  },
  {
    icon: Palette,
    chip: "lb-bg-sea",
    name: "Day care",
    ages: "Ages 1.5 to 10",
    copy: "A safe, caring home away from home for busy families.",
  },
];

const DAY_STEPS = [
  { n: "1", tint: "lb-bg-sun", title: "Good morning", copy: "Greetings, songs and a cheerful hello." },
  { n: "2", tint: "lb-bg-leaf", title: "Play time", copy: "Running, climbing and making friends outside." },
  { n: "3", tint: "lb-bg-blossom", title: "Learn time", copy: "Letters, numbers and stories at circle time." },
  { n: "4", tint: "lb-bg-sea", title: "Make time", copy: "Painting, sticking and messy happy hands." },
  { n: "5", tint: "lb-bg-sun", title: "Home time", copy: "A wave, a smile and a sticker to take home." },
];

const QUOTES = [
  {
    avatar: "AS",
    tint: "lb-bg-leaf",
    name: "Aarthi S.",
    role: "Parent of Aarav, Nursery",
    stars: 5,
    quote: "Aarav runs to school every morning. That says more than I ever could.",
  },
  {
    avatar: "MP",
    tint: "lb-bg-blossom",
    name: "Meera P.",
    role: "Parent of Anaya, Kindergarten",
    stars: 5,
    quote: "Warm teachers, gentle days, and real learning through play.",
  },
  {
    avatar: "RK",
    tint: "lb-bg-sea",
    name: "Rahul K.",
    role: "Parent of Dev, Playgroup",
    stars: 5,
    quote: "As working parents, we trust them fully. That peace of mind is everything.",
  },
];

function SunBrand() {
  return (
    <a className="lb-brand" href="#top" aria-label="Little Blossoms home">
      <span className="lb-sun-dot" aria-hidden="true" />
      <span>Little Blossoms</span>
    </a>
  );
}

function HeroArtSlot() {
  // Image slot for the user's "kids forming the school name" illustration.
  return (
    <div className="lb-hero-art" role="img" aria-label="Little Blossoms illustration">
      <span className="lb-art-sun" aria-hidden="true" />
      <span className="lb-art-hill" aria-hidden="true" />
      <span className="lb-art-hill2" aria-hidden="true" />
      <span className="lb-fill">Your hero artwork lands here</span>
    </div>
  );
}

function Index() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <div id="top" className="lb-shell">
        <header className="lb-nav">
          <div className="lb-nav-inner">
            <SunBrand />
            <nav className="lb-nav-links" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a className="lb-cta" href="#book">
              Book a visit
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="lb-hero">
          <div>
            <Reveal>
              <span className="lb-hero-eyebrow">Play school · Age 1.5 to 10</span>
            </Reveal>
            <Reveal as="div" delay={0.05}>
              <h1>
                A gentle start for <span className="lb-hi">big little people</span>
              </h1>
            </Reveal>
            <Reveal as="div" delay={0.1}>
              <p className="lb-hero-sub">
                A warm, safe and happy play school where every child grows through
                play, music, art and a great big hug of encouragement.
              </p>
            </Reveal>
            <Reveal as="div" delay={0.15}>
              <div className="lb-hero-actions">
                <a className="lb-cta" href="#book">
                  Book a visit
                </a>
                <a className="lb-textlink" href="#welcome">
                  See inside <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1}>
            <HeroArtSlot />
          </Reveal>
        </section>

        {/* Welcome */}
        <section id="welcome" className="lb-section">
          <div className="lb-split">
            <Reveal>
              <div className="lb-image-slot">Your welcome illustration lands here</div>
            </Reveal>
            <Reveal as="div" delay={0.08}>
              <span className="lb-kicker">Welcome to Little Blossoms</span>
              <h2 className="lb-h2">Where little roots grow into confident blooms</h2>
              <p className="lb-lede">
                We are a caring community of teachers, parents and children who
                believe childhood should feel like sunshine. Every day is a
                balance of playful learning, kind moments and plenty of outdoor
                air.
              </p>
              <div className="lb-points">
                <div className="lb-point">
                  <span className="lb-check">y</span>
                  <p>
                    <b>Low child to teacher ratio</b> so every child is truly seen.
                  </p>
                </div>
                <div className="lb-point">
                  <span className="lb-check">y</span>
                  <p>
                    <b>Learning through play</b> with a gentle, proven method.
                  </p>
                </div>
                <div className="lb-point">
                  <span className="lb-check">y</span>
                  <p>
                    <b>Safe, happy spaces</b> indoors and in our sunny garden.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="lb-section">
          <div className="lb-section-center">
            <Reveal>
              <span className="lb-kicker">Programs</span>
              <h2 className="lb-h2">Programs for every little stage</h2>
              <p className="lb-lede">
                From a first tender hello to a confident school-readiness goodbye,
                there is a gentle fit for every age.
              </p>
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1}>
            <div className="lb-programs">
              {PROGRAMS.map((program) => {
                const Icon = program.icon;
                return (
                  <article className="lb-prog" key={program.name}>
                    <span className={`lb-prog-icon ${program.chip}`}>
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <h3>{program.name}</h3>
                    <span className={`lb-age ${program.chip}`}>{program.ages}</span>
                    <p>{program.copy}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* A day inside */}
        <section id="day" className="lb-section">
          <div className="lb-section-center">
            <Reveal>
              <span className="lb-kicker">A day inside</span>
              <h2 className="lb-h2">A happy rhythm from hello to goodbye</h2>
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1}>
            <div className="lb-day">
              {DAY_STEPS.map((step) => (
                <div className="lb-day-step" key={step.n}>
                  <span className={`lb-num ${step.tint}`}>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Families */}
        <section id="families" className="lb-section">
          <div className="lb-section-center">
            <Reveal>
              <span className="lb-kicker">From our families</span>
              <h2 className="lb-h2">What parents say</h2>
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1}>
            <div className="lb-quotes">
              {QUOTES.map((item) => (
                <figure className="lb-quote" key={item.name}>
                  <div className="lb-stars" aria-label="5 out of 5 stars">
                    {"\u2605".repeat(item.stars)}
                  </div>
                  <p>{item.quote}</p>
                  <figcaption>
                    <span className={`lb-avatar ${item.tint}`} aria-hidden="true">
                      {item.avatar}
                    </span>
                    <span>
                      <b>{item.name}</b>
                      <span>{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Book a visit */}
        <section id="book" className="lb-section">
          <Reveal as="div">
            <div className="lb-banner">
              <div>
                <h2>Ready to feel the sunshine?</h2>
                <p>
                  Come see our garden, meet our teachers and watch the little
                  blossoms at play. We would love to welcome you.
                </p>
              </div>
              <div className="lb-banner-cta">
                <a className="lb-bubble" href="tel:">
                  <Phone size={20} aria-hidden="true" />
                  Book a free visit
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="lb-footer">
          <div className="lb-footer-inner">
            <div>
              <SunBrand />
              <p className="lb-foot-muted" style={{ margin: "0.9rem 0 0", maxWidth: "30ch" }}>
                A gentle, happy play school for little people aged 1.5 to 10.
              </p>
            </div>
            <div>
              <h4>School</h4>
              <div className="lb-foot-row">
                <a href="#welcome">About us</a>
                <a href="#programs">Programs</a>
                <a href="#book">Book a visit</a>
              </div>
            </div>
            <div>
              <h4>Visit us</h4>
              <div className="lb-foot-row">
                <span className="lb-foot-muted">123 Blossom Garden Lane</span>
                <span className="lb-foot-muted">hello@littleblossoms.com</span>
                <span className="lb-foot-muted">+1 555 010 2200</span>
              </div>
            </div>
          </div>
          <div className="lb-footer-bottom">
            © Little Blossoms Play School. Made with sunshine.
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}