import Image from "next/image";

type LogoProps = {
  className?: string;
  compact?: boolean;
  /** When true, render the light-surface variant (black letters + navy
   *  gradient badge) used on cream chrome (nav, footer). Default false
   *  uses the dark-surface variant (brushed-steel letters + navy
   *  gradient badge) for near-black surfaces. */
  light?: boolean;
  /** Height in Tailwind units (e.g., "h-12", "h-16"). Default h-14 for nav. */
  sizeClass?: string;
};

export function Logo({
  className = "",
  compact = false,
  light = false,
  sizeClass = "h-14",
}: LogoProps) {
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
      src={light ? "/brand/nr-wordmark.svg" : "/brand/nr-wordmark-dark.svg"}
      alt="NASHCO Rentals"
      width={1160}
      height={290}
      className={`${sizeClass} w-auto ${className}`}
      priority
    />
  );
}
