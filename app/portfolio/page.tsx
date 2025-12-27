import Link from "next/link";
import { getAllPortfolioMeta } from "@/lib/portfolio-md";

export default function PortfolioPage() {
  const items = getAllPortfolioMeta();

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Portfolio</h1>
          <p className="mt-3 max-w-[860px] leading-relaxed text-black/80">
            Case studies and work summaries. Some details are generalized to respect confidentiality.
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
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="group rounded-2xl border border-black/10 bg-white/60 p-6 transition
                       hover:border-black/25 hover:-translate-y-0.5
                       hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="text-xs text-black/60">{p.note}</div>
            </div>

            <p className="mt-2 text-black/80 leading-relaxed">{p.summary}</p>

            {p.stack?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 8).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 group-hover:border-black/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-5 text-sm text-black/70 underline underline-offset-4 group-hover:text-black">
              Read case study →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
