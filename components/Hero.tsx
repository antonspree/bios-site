import { HeroCta } from "./HeroCta";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col items-center justify-start overflow-hidden bg-neutral-500 px-5 pt-16 pb-[max(3rem,calc(env(safe-area-inset-bottom,0px)+2.5rem))] sm:pt-20 md:pt-24 md:pb-[max(4rem,calc(env(safe-area-inset-bottom,0px)+3rem))]">
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/15"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-[22rem] text-center sm:max-w-md">
        <h2 className="text-balance text-[1.65rem] font-bold leading-[1.35] tracking-tight text-white sm:text-3xl sm:leading-[1.32] md:text-[1.875rem] md:leading-tight">
          <span className="hero-title-mark box-decoration-clone bg-[#ff4f00] px-1.5 py-0.5 sm:px-2 sm:py-1">
            Situational awareness that doesn&apos;t blink.
          </span>
        </h2>
        <p className="mt-5 text-pretty text-base font-medium leading-snug text-black sm:text-lg">
          Distributed sensing, resilient mesh, learning fusion. Persistent situational awareness for
          mission-critical environments.
        </p>
        <div className="mt-8">
          <HeroCta />
        </div>
      </div>
    </section>
  );
}
