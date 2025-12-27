import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { getAllPortfolioMeta, getPortfolioBySlug } from "@/lib/portfolio-md";

export function generateStaticParams() {
  return getAllPortfolioMeta().map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  let data;
  try {
    data = getPortfolioBySlug(slug);
  } catch {
    return notFound();
  }

  const processed = await remark().use(html).process(data.content);
  const contentHtml = processed.toString();

  return (
    <main className="mx-auto max-w-[980px] px-5 py-14">
      <Link
        href="/portfolio"
        className="text-sm text-black/70 hover:text-black underline underline-offset-4"
      >
        ← Back to Portfolio
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-black/60">{data.meta.date}</div>
          <div className="text-xs text-black/60">{data.meta.note}</div>
        </div>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {data.meta.title}
        </h1>
        <p className="mt-3 max-w-[850px] text-black/80 leading-relaxed">
          {data.meta.summary}
        </p>

        {data.meta.stack?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {data.meta.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
              >
                {s}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <article
        className="prose prose-neutral mt-10 max-w-none
                   prose-headings:tracking-tight
                   prose-p:leading-relaxed
                   prose-a:underline prose-a:underline-offset-4
                   prose-code:before:content-[''] prose-code:after:content-['']
                   prose-pre:overflow-x-auto
                   prose-img:rounded-2xl prose-img:border prose-img:border-black/10"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
