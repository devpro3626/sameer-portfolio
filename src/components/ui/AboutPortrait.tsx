import Image from "next/image";

export function AboutPortrait({ name }: { name: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-border-strong p-px">
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-1/2 animate-spin-slower bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,var(--accent)_330deg,transparent_360deg)] [animation-duration:9s]"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface">
        <Image
          src="/images/portrait-studio.webp"
          alt={`${name} at work`}
          fill
          quality={95}
          sizes="(min-width: 1024px) 38vw, 90vw"
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>
    </div>
  );
}
