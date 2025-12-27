import fs from "fs";
import path from "path";
import matter from "gray-matter";

const portfolioDir = path.join(process.cwd(), "content/portfolio");

export type PortfolioMeta = {
  slug: string;
  title: string;
  date?: string;
  summary: string;
  note?: string;
  stack?: string[];
};

export function getAllPortfolioMeta(): PortfolioMeta[] {
  const files = fs.readdirSync(portfolioDir).filter((f) => f.endsWith(".md"));

  const all = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(portfolioDir, file), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      summary: data.summary || "",
      note: data.note || "",
      stack: (data.stack || []) as string[],
    } as PortfolioMeta;
  });

  // newest first (date is string, but ISO format sorts well)
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPortfolioBySlug(slug: string) {
  const fullPath = path.join(portfolioDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "",
      summary: data.summary || "",
      note: data.note || "",
      stack: (data.stack || []) as string[],
    } as PortfolioMeta,
    content,
  };
}
