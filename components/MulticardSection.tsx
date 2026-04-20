import Image from "next/image";
import type { CSSProperties } from "react";

const CARDS = [
  {
    index: "1",
    src: "/sec2/1.png",
    title: "Sense at the edge",
    body: "Every node observes locally — motion, vibration, acoustics, RF. Raw signals stay on the device. Only compact, confidence-scored events leave the sensor.",
  },
  {
    index: "2",
    src: "/sec2/2.png",
    title: "Fuse in the core",
    body: "Events from across the mesh are cleaned, correlated, clustered and tracked. The core turns noise into objects, and objects into trajectories.",
  },
  {
    index: "3",
    src: "/sec2/3.png",
    title: "Decide with context",
    body: "A live, replayable map. Every track carries its evidence, its confidence and its history. The operator sees — and stays in command.",
  },
] as const;

export function MulticardSection() {
  return (
    <section
      className="multicard multicard__multicard theme-light section u-accent-fg--primary-browserbase-red"
      data-columns="3"
    >
      <div className="multicard__container grid">
        <div
          className="textLockUp textLockUp--center multicard__textLockUp"
          data-size-variant="heading-2"
          data-wrap-in-link="false"
        >
          <div className="textLockUp__content">
            <h2 className="textLockUp__title u-wordbreak type-heading-2">
              From signal <span className="u-accent">to decision</span>
            </h2>
            <div className="textLockUp__subhead type-subhead-2">
              <p>Distributed sensing, intelligent fusion, and a command-ready situational picture.</p>
            </div>
          </div>
        </div>

        <div
          className="grid--3up multicard__cards multicard__cards--indexed"
          data-reveal-children=""
        >
          {CARDS.map((card) => (
            <article
              key={card.index}
              className="multicard__card card card--default card--vertical u-link-reset"
              style={{ "--index": `'${card.index}'` } as CSSProperties}
            >
              <div className="card__media multicard__card-media">
                <div className="frame frame--ratio-8-9">
                  <Image
                    src={card.src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="card__content multicard__card-content">
                <div
                  className="textLockUp textLockUp--left multicard__card__textLockUp"
                  data-size-variant="heading-4"
                  data-wrap-in-link="false"
                >
                  <div className="textLockUp__content">
                    <h3 className="textLockUp__title u-wordbreak type-heading-4">{card.title}</h3>
                    <div className="textLockUp__subhead type-subhead-4">
                      <p>{card.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
