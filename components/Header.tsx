import Link from "next/link";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/security", label: "Security" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-black/10">
        <div className="mx-auto max-w-[1100px] px-5 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white">
              <span className="text-sm font-semibold">SS</span>
            </span>
            <span className="font-semibold tracking-tight">Sahil Sharma</span>
            <span className="hidden sm:inline text-sm text-black/60">
              · Automation QA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="rounded-xl px-3 py-2 text-sm text-black/70 hover:text-black hover:bg-black/[0.04] transition"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/Sahil-Sharma-Resume.pdf"
              className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black/80 hover:border-black/25 transition"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>

            <a
              href="mailto:sahil9256@yahoo.com"
              className="rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/90 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
