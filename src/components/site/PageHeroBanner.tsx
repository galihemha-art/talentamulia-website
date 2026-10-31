import { usePageHero } from "@/lib/page-heroes";

/** Shared hero image for pages that have no hero photo in their own layout. */
export function PageHeroBanner() {
  const hero = usePageHero();
  if (!hero?.banner) return null;
  if (hero.illustration) {
    return (
      <div className="mx-auto max-w-3xl px-5 pt-8">
        <img
          src={hero.src}
          alt={hero.alt}
          width={1280}
          height={720}
          decoding="async"
          className="mx-auto h-36 w-auto rounded-2xl object-contain md:h-44"
        />
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-6xl px-5 pt-6">
      <img
        src={hero.src}
        alt={hero.alt}
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
        className="h-48 w-full rounded-3xl border border-border object-cover shadow-soft sm:h-64 md:h-80"
      />
    </div>
  );
}
