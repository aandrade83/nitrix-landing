import Link from "next/link";

const footerLinks = [
  { label: "Performance", href: "/performance" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Investors", href: "/investors" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/5 bg-ink-soft py-12 px-6"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-widest text-foreground hover:text-crimson transition-colors duration-200"
          aria-label="NitricX home"
        >
          NITRIC<span className="text-crimson">X</span>
        </Link>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6" role="list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs tracking-wide text-zinc-600 hover:text-zinc-400 transition-colors duration-200 uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <p className="text-xs text-zinc-600 tracking-wide">
          &copy; {year} NitricX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
