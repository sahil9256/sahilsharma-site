import Link from "next/link";
import { getAllThoughtsMeta } from "@/lib/thoughts";
import { portfolio } from "@/lib/portfolio";

export default function Home() {
  const latest = getAllThoughtsMeta().slice(0, 3);

  return (
    <main className="mx-auto max-w-[980px] px-5 py-14">
      {/* HERO */}
      <section className="pb-14">
        <h1 className="text-5xl md:text-6xl tracking-tight">
          Automation QA Lead.
          <br />
          <span className="text-black/80">Playwright • Cypress • CI/CD.</span>
        </h1>

        <p className="mt-4 max-w-[780px] text-lg leading-relaxed text-black/80">
          I build scalable automation frameworks, stabilize flaky suites, and drive quality strategy
          across pipelines — covering UI, API, performance, and security validation.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl border border-black/20 px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            Contact
          </a>

          <a
            href="#portfolio"
            className="rounded-xl border border-black/10 px-4 py-2 text-sm text-black/80 hover:border-black/25 transition"
          >
            View Portfolio
          </a>
        </div>

 {/* Proof links (job-friendly) */}
<div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
  <a
    href="/Sahil-Sharma-Resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="text-black/80 underline underline-offset-4 hover:text-black"
  >
    Download CV
  </a>

  <span className="text-black/30">•</span>

  <a
    href="https://www.linkedin.com/in/sahil-sharma-302540105"
    target="_blank"
    rel="noreferrer"
    className="text-black/80 underline underline-offset-4 hover:text-black"
  >
    LinkedIn
  </a>

  <span className="text-black/30">•</span>

  <a
    href="https://github.com/sahil9256"
    target="_blank"
    rel="noreferrer"
    className="text-black/80 underline underline-offset-4 hover:text-black"
  >
    GitHub
  </a>
</div>

      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-black/10 py-14">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-3 max-w-[860px] leading-relaxed text-black/80">
          I’m Sahil Sharma, an Automation QA Lead with 10+ years in QA engineering. I focus on building
          maintainable frameworks, integrating testing into CI/CD, and improving reliability across releases.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-black/10 py-14">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed text-black/80">
          <li>Playwright (TS), Cypress (JS/TS), scalable framework design (POM)</li>
          <li>CI/CD: Azure DevOps, GitLab CI, Jenkins; Dockerized automation stacks</li>
          <li>API testing + AWS validation (Lambda, Step Functions, DynamoDB via SDK)</li>
          <li>
  Security testing (QA context): OWASP Top 10 awareness including access control (IDOR, Broken Access Control),
  input validation & injection risks (SQLi, XSS), CSRF, SSRF patterns, OAuth 2.0 flow validation using Burp Suite
</li>
          <li>AI-assisted automation (Playwright Test Agents / MCP workflows)</li>
        </ul>
      </section>

      {/* HOW I CAN HELP (job-friendly) */}
<section id="services" className="border-t border-black/10 py-14">
  <h2 className="text-xl font-semibold">How I can help</h2>
  <p className="mt-3 max-w-[860px] leading-relaxed text-black/80">
    I work with teams to improve quality engineering outcomes — making automation reliable, CI signal trustworthy,
    and releases safer.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-2">
    {[
      {
        title: "Automation framework architecture",
        desc: "Playwright/Cypress framework structure, fixtures, POM patterns, test data strategy, and maintainability practices.",
      },
      {
        title: "CI/CD quality strategy",
        desc: "Pipeline design, parallelization strategy, flake control, and defining a clear “ship/no-ship” quality gate.",
      },
      {
        title: "API + UI hybrid validation",
        desc: "End-to-end flows validated using backend setup + UI checks for faster, more deterministic automation.",
      },
      {
        title: "Reliability + observability mindset",
        desc: "Actionable reporting and test diagnostics (logs, traces, artifacts) to make failures debuggable and boring.",
      },
      {
  title: "Security-aware quality engineering",
  desc: "Early identification of security risks aligned with OWASP Top 10 — including IDOR, broken access control, injection flaws, XSS, CSRF, SSRF, and OAuth 2.0 misconfigurations — integrated into QA workflows and CI pipelines.",
}

    ].map((s) => (
      <div key={s.title} className="rounded-2xl border border-black/10 p-5">
        <div className="font-semibold">{s.title}</div>
        <div className="mt-2 leading-relaxed text-black/80">{s.desc}</div>
      </div>
    ))}
  </div>

  <p className="mt-6 text-sm text-black/60">
    Note: Some past work is summarized at a high level due to confidentiality.
  </p>
</section>


      {/* PORTFOLIO */}
      <section id="portfolio" className="border-t border-black/10 py-14">
        <h2 className="text-xl font-semibold">Portfolio</h2>
        <p className="mt-3 max-w-[860px] leading-relaxed text-black/80">
          Selected work across e-commerce, payments, and enterprise data validation. Some details are
          generalized to respect confidentiality.
        </p>

        <div className="mt-5 grid gap-4">
          {portfolio.map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/10 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-base font-semibold">{p.title}</div>
                <div className="text-xs text-black/60">{p.note}</div>
              </div>

              <p className="mt-2 leading-relaxed text-black/80">{p.summary}</p>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-black/80">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THOUGHTS (AUTO from Markdown) */}
      <section id="thoughts" className="border-t border-black/10 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Thoughts</h2>
            <p className="mt-2 max-w-[860px] leading-relaxed text-black/80">
              Short posts on QA strategy, Playwright/Cypress architecture, CI reliability, and AI-assisted testing.
            </p>
          </div>

          <Link
            href="/thoughts"
            className="text-sm text-black/70 hover:text-black underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="mt-6 grid gap-4">
          {latest.map((p) => (
            <Link
              key={p.slug}
              href={`/thoughts/${p.slug}`}
              className="rounded-2xl border border-black/10 p-5 hover:border-black/25 transition"
            >
              <div className="text-xs text-black/60">{p.date}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-black/80 leading-relaxed">{p.summary}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-black/10 py-14">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-3 leading-relaxed text-black/80">
          Email:{" "}
          <a className="underline hover:no-underline" href="mailto:sahil9256@yahoo.com">
            sahil9256@yahoo.com
          </a>
        </p>
      </section>

      <footer className="py-6 text-xs text-black/60">
        © {new Date().getFullYear()} Sahil Sharma · sahilsharmaqa.com
      </footer>
    </main>
  );
}
