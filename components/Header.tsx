import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-[980px] items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Sahil Sharma
        </Link>

        <nav className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 hover:text-black transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
