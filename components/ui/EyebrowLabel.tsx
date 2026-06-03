// components/ui/EyebrowLabel.tsx
// Small uppercase category label displayed above section headings.
// Used across all pages to establish visual hierarchy (Apple / Nike pattern).

// This is a simple Server Component — no "use client" needed.
// It has no interactivity, no state, no browser APIs.
// Next.js renders it on the server and sends plain HTML to the browser,
// which is faster and better for SEO.

type EyebrowLabelProps = {
  children: string;
  // "crimson" = brand red, used on dark sections for emphasis
  // "zinc"    = muted gray, used when the label should be subtle
  color?: "crimson" | "zinc";
  // withLine = adds a short decorative vertical bar to the left of the text
  withLine?: boolean;
  className?: string;
};

export default function EyebrowLabel({
  children,
  color = "zinc",       // default: muted zinc if no color is specified
  withLine = false,     // default: no line
  className = "",
}: EyebrowLabelProps) {
  // Map the "color" prop to the corresponding Tailwind class
  const colorClass =
    color === "crimson" ? "text-crimson" : "text-zinc-400";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Decorative line — only rendered when withLine prop is true */}
      {withLine && (
        <span
          className="block w-6 h-px bg-crimson"
          aria-hidden="true"   // hidden from screen readers — it's purely decorative
        />
      )}

      <span
        className={`
          text-xs font-semibold uppercase tracking-widest
          ${colorClass}
        `}
      >
        {children}
      </span>
    </div>
  );
}
