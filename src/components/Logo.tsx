import Image from "next/image";

type LogoProps = {
  className?: string;
  compact?: boolean;
  /** Height in Tailwind units (e.g., "h-8", "h-10"). Default h-9 for nav. */
  sizeClass?: string;
};

/**
 * Dark-variant logo for near-black surfaces (nav, footer, default app chrome).
 * For light surfaces (future press kit, email templates), use the source file
 * at /brand/nr-wordmark.svg directly.
 */
export function Logo({ className = "", compact = false, sizeClass = "h-9" }: LogoProps) {
  if (compact) {
    return (
      <Image
        src="/brand/nr-badge-dark.svg"
        alt="NASHCO Rentals"
        width={40}
        height={40}
        className={`${sizeClass} w-auto ${className}`}
        priority
      />
    );
  }
  return (
    <Image
      src="/brand/nr-wordmark-dark.svg"
      alt="NASHCO Rentals"
      width={1160}
      height={290}
      className={`${sizeClass} w-auto ${className}`}
      priority
    />
  );
}
