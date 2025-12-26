import fs from "fs";
import path from "path";
import matter from "gray-matter";

const thoughtsDir = path.join(process.cwd(), "content/thoughts");

export type ThoughtMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export function getAllThoughtsMeta(): ThoughtMeta[] {
 if (!fs.existsSync(thoughtsDir)) return [];
const files = fs.readdirSync(thoughtsDir);

  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(thoughtsDir, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: String(data.title || slug),
        date: String(data.date || ""),
        summary: String(data.summary || ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getThoughtBySlug(slug: string) {
  const fullPath = path.join(thoughtsDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: String(data.title || slug),
      date: String(data.date || ""),
      summary: String(data.summary || ""),
    },
    content,
  };
}
