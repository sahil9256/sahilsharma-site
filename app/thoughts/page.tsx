import Link from "next/link";
import { getAllThoughtsMeta } from "@/lib/thoughts";

export default function ThoughtsPage() {
  const posts = getAllThoughtsMeta();

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Thoughts</h1>
          <p className="mt-3 max-w-[860px] leading-relaxed text-black/80">
            Short posts on QA strategy, CI reliability, Playwright/Cypress architecture, and security testing.
          </p>
        </div>

        <Link
          href="/"
          className="text-sm text-black/70 hover:text-black underline underline-offset-4"
        >
          Back home
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/thoughts/${p.slug}`}
            className="group rounded-2xl border border-black/10 bg-white/60 p-6 transition
                       hover:border-black/25 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs text-black/60">{p.date}</div>
              <div className="text-xs text-black/50">Thought</div>
            </div>

            <div className="mt-3 text-xl font-semibold leading-snug">
              {p.title}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-black/80">
              {p.summary}
            </p>

            <div className="mt-5 text-sm text-black/70 underline underline-offset-4 group-hover:text-black">
              Read →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
