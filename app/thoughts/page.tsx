import Link from "next/link";
import { getAllThoughtsMeta } from "@/lib/thoughts";

export default function ThoughtsPage() {
  const posts = getAllThoughtsMeta();

  return (
    <main className="mx-auto max-w-[980px] px-5 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Thoughts</h1>
      <p className="mt-3 max-w-[780px] text-black/80 leading-relaxed">
        Notes on QA strategy, Playwright/Cypress architecture, CI reliability, and AI-assisted testing.
      </p>

      <div className="mt-8 grid gap-4">
        {posts.map((p) => (
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
    </main>
  );
}
