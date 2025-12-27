// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { getAllPortfolioMeta } from "@/lib/portfolio-md";
import { getAllThoughtsMeta } from "@/lib/thoughts";

const chips = [
  "Playwright",
  "Cypress",
  "CI/CD Quality",
  "API Testing",
  "Performance",
  "OWASP Top 10",
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-[900px]">
      <div className="flex items-center gap-3 text-sm text-emerald-700">
        <span className="h-px w-8 bg-emerald-600/70" />
        <span className="tracking-wide">{eyebrow}</span>
      </div>

      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-slate-700">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const allPortfolio = getAllPortfolioMeta().sort((a, b) =>
    (a.date ?? "") < (b.date ?? "") ? 1 : -1
  );

  // remove duplicates by slug (safety)
  const portfolioItems = Array.from(
    new Map(allPortfolio.map((p) => [p.slug, p])).values()
  ).slice(0, 4);

  const latest = getAllThoughtsMeta().slice(0, 3);

  return (
    <main className="bg-white">
      {/* HERO (full-bleed) */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
        {/* background image + overlays */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero.webp" alt="" fill priority className="object-cover" />

          {/* dark/green overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-emerald-950/30" />

          {/* subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_55%)]" />
        </div>

        {/* content container stays aligned */}
        <div className="relative z-10 mx-auto max-w-[1100px] px-5 py-14 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for remote roles · Open to consulting (quietly)
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl tracking-tight font-semibold text-white">
              Automation QA Lead.
              <br />
              <span className="relative text-white/85">
                Playwright · Cypress · CI/CD.
                <span className="absolute -bottom-1 left-0 h-[3px] w-24 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-200" />
              </span>
            </h1>

            <p className="mt-4 max-w-[820px] text-lg leading-relaxed text-white/80">
              I build scalable automation frameworks, stabilize flaky suites, and
              drive quality strategy across pipelines — covering UI, API,
              performance, and security validation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur
                             transition hover:border-emerald-300/70 hover:text-emerald-100"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Contact
              </a>

              <a
                href="#portfolio"
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/15"
              >
                View portfolio
              </a>

              <Link
                href="/thoughts"
                className="rounded-xl px-4 py-2 text-sm text-white/80 underline underline-offset-4 hover:text-white"
              >
                Read thoughts
              </Link>
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Reveal>
        </div>
      </section>

      {/* Everything after HERO stays constrained */}
      <div className="mx-auto max-w-[1100px] px-5">
        {/* ABOUT */}
        <Reveal>
          <section id="about" className="py-16 md:py-20">
            <SectionHeading
              eyebrow="About"
              title="Solving for quality, reliability, and delivery speed."
              subtitle="I build maintainable automation frameworks, integrate testing into CI/CD, and improve release confidence across teams."
            />
          </section>
        </Reveal>

        {/* SKILLS */}
        <Reveal>
          <section
            id="skills"
            className="py-16 md:py-20 bg-slate-50 border-y border-slate-200 rounded-3xl px-6 md:px-10"
          >
            <div className="max-w-[900px]">
              <div className="flex items-center gap-3 text-sm text-emerald-700">
                <span className="h-px w-8 bg-emerald-600/70" />
                <span className="tracking-wide">Expertise</span>
              </div>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
                Automation depth across UI, API, performance &amp; security.
              </h2>

              <p className="mt-3 text-lg leading-relaxed text-slate-700">
                Enterprise-grade frameworks, predictable CI pipelines, and practical security
                validation aligned to OWASP Top 10.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition
                           hover:-translate-y-0.5 hover:border-slate-300
                           hover:shadow-[0_18px_50px_rgba(2,6,23,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-semibold text-slate-950">Automation &amp; Frameworks</div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-800">
                    UI + API
                  </span>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                  <li>Playwright (TS), Cypress (JS/TS), POM + scalable architecture</li>
                  <li>Flake reduction: deterministic data setup, retries with intent</li>
                  <li>Reporting: Allure, traces, videos, artifacts for debugging</li>
                </ul>
              </div>

              <div
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition
                           hover:-translate-y-0.5 hover:border-slate-300
                           hover:shadow-[0_18px_50px_rgba(2,6,23,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-semibold text-slate-950">CI/CD, Cloud &amp; Testing Depth</div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-800">
                    Reliability
                  </span>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                  <li>Azure DevOps, GitLab CI, Jenkins; Dockerized pipelines</li>
                  <li>AWS validation: Lambdas, Step Functions, DynamoDB via SDK</li>
                  <li>Performance: JMeter/BlazeMeter · Security: OWASP Top 10 checks</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* PORTFOLIO */}
        <Reveal>
          <section id="portfolio" className="py-16 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div className="max-w-[900px]">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950">
                  Portfolio
                </h2>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Selected work across e-commerce, payments, and enterprise data validation. Some
                  details are generalized to respect confidentiality.
                </p>
              </div>

              <Link
                href="/portfolio"
                className="text-sm text-slate-700 hover:text-slate-950 underline underline-offset-4"
              >
                View all
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {portfolioItems.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition
                             hover:-translate-y-0.5 hover:border-slate-300
                             hover:shadow-[0_18px_50px_rgba(16,185,129,0.18)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-lg font-semibold text-slate-950">{p.title}</div>
                    <div className="text-xs text-slate-500">{p.note}</div>
                  </div>

                  <p className="mt-2 text-slate-700 leading-relaxed">{p.summary}</p>

                  {p.stack?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.slice(0, 8).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 text-sm text-slate-700 underline underline-offset-4 group-hover:text-slate-950">
                    Read case study →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* THOUGHTS */}
        <Reveal>
          <section id="thoughts" className="py-16 md:py-20 border-t border-slate-200">
            <div className="flex items-end justify-between gap-4">
              <div className="max-w-[900px]">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950">
                  Thoughts
                </h2>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Short posts on QA strategy, CI reliability, Playwright/Cypress architecture, and
                  security testing.
                </p>
              </div>

              <Link
                href="/thoughts"
                className="text-sm text-slate-700 hover:text-slate-950 underline underline-offset-4"
              >
                View all
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {latest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/thoughts/${p.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition
                             hover:-translate-y-0.5 hover:border-slate-300
                             hover:shadow-[0_18px_50px_rgba(16,185,129,0.18)]"
                >
                  <div className="text-xs text-slate-500">{p.date}</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    {p.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {p.summary}
                  </div>
                  <div className="mt-4 text-sm text-slate-700 underline underline-offset-4 group-hover:text-slate-950">
                    Read →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* CONTACT */}
        <Reveal>
          <section id="contact" className="py-16 md:py-20 border-t border-slate-200">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950">
              Contact
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-900 transition"
                href="mailto:sahil9256@yahoo.com"
              >
                sahil9256@yahoo.com
              </a>

              <a
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 hover:border-slate-300 transition"
                href="https://www.linkedin.com/in/sahil-sharma-302540105"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 hover:border-slate-300 transition"
                href="https://github.com/sahil9256"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </section>
        </Reveal>

        <footer className="py-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Sahil Sharma · sahilsharmaqa.com
        </footer>
      </div>
    </main>
  );
}
