// components/ui/Button.tsx
// Reusable Button primitive — supports variant styles via CVA and
// renders as a Next.js <Link> when an href prop is provided,
// or as a native <button> element otherwise.

import { forwardRef } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

// ─── Step 1: Define the class recipe with CVA ───────────────────────────────
//
// cva() takes two arguments:
//   1. A string of "base" classes — always applied, no matter which variant
//   2. An object with a "variants" key where we list every variant + its classes
//
// The result (buttonClasses) is a function we call like:
//   buttonClasses({ variant: "primary", size: "md" })
//   → returns a single className string with all the right Tailwind classes

const buttonClasses = cva(
  // Base classes — every button gets these
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium tracking-wide",
    "rounded-full",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    "disabled:opacity-40 disabled:pointer-events-none",
  ],
  {
    variants: {
      // "variant" controls the color / style of the button
      variant: {
        // Primary — solid crimson background, white text. Main CTA.
        primary:
          "bg-crimson text-white hover:bg-crimson-dark active:scale-[0.97]",
        // Ghost — no background, white border. Secondary actions.
        ghost:
          "bg-transparent border border-white/20 text-foreground hover:border-white/50 hover:bg-white/5 active:scale-[0.97]",
        // Outline — zinc border, muted text. Tertiary / low-emphasis actions.
        outline:
          "bg-transparent border border-zinc-600 text-zinc-400 hover:border-zinc-400 hover:text-foreground active:scale-[0.97]",
      },
      // "size" controls the padding and font size
      size: {
        sm: "px-4 py-1.5 text-xs",
        md: "px-5 py-2 text-sm",
        lg: "px-7 py-3 text-base",
      },
    },
    // Default values — if you use <Button> without specifying variant or size,
    // it will use "primary" and "md" automatically
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// ─── Step 2: Define the TypeScript type for Button's props ──────────────────
//
// We combine three sources of props:
//   1. VariantProps<typeof buttonClasses> — extracts { variant?, size? } from our CVA recipe
//   2. React.ButtonHTMLAttributes<HTMLButtonElement> — all native <button> props
//      (onClick, disabled, type, aria-*, etc.)
//   3. Our own custom props (href, children, className)
//
// The "Omit<..., "children">" part removes "children" from the native button
// props so we can re-declare it ourselves with a cleaner type.

type ButtonProps = VariantProps<typeof buttonClasses> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: string;       // If provided, renders as a Next.js <Link>
    children: React.ReactNode;
    className?: string;
  };

// ─── Step 3: The component ──────────────────────────────────────────────────
//
// forwardRef wraps the component so parent components (and Framer Motion)
// can attach a ref directly to the underlying <button> or <a> DOM element.
//
// How it works:
//   forwardRef((props, ref) => ...)
//   - props: all the props passed to <Button>
//   - ref:   the ref forwarded from outside (could be null if none was passed)

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { variant, size, href, children, className, ...rest },
    ref
  ) => {
    // Compute the final className string from the CVA recipe
    const classes = buttonClasses({ variant, size, className });

    // If an href was provided → render a Next.js Link (navigates to a page)
    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    // Otherwise → render a native <button> element
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

// displayName helps React DevTools show "Button" instead of "ForwardRef"
// in the component tree when debugging
Button.displayName = "Button";

export default Button;
