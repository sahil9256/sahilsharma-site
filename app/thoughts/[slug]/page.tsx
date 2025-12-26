import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllThoughtsMeta, getThoughtBySlug } from "@/lib/thoughts";
import { remark } from "remark";
import html from "remark-html";

export function generateStaticParams() {
  return getAllThoughtsMeta().map((p) => ({ slug: p.slug }));
}

export default async function ThoughtPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  const post = getThoughtBySlug(slug);

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <main className="mx-auto max-w-[980px] px-5 py-14">
      <Link href="/thoughts" className="text-sm text-black/70 hover:text-black">
        ← Back to Thoughts
      </Link>

      <div className="mt-6">
        <div className="text-xs text-black/60">{post.meta.date}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {post.meta.title}
        </h1>
        <p className="mt-3 text-black/80 leading-relaxed">{post.meta.summary}</p>
      </div>

      <article
        className="prose prose-neutral mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
