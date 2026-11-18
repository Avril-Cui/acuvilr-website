import { Metadata } from "next";
import BackButton from "./BackButton";

export const metadata: Metadata = {
  title: "Context Puck - Steering Ideas with Your Hands",
  description:
    "A tangible interface for steering ideas: pucks ringed with knobs you pull, push, flip and turn to go deeper, leave out, rule out and blend concepts.",
};

const ACCENT = "#ff5a1f";

const GESTURES = [
  { verb: "pull out", mean: "go deeper into that concept, one click at a time" },
  { verb: "press the cap", mean: "keep the deeper concept in place of the original" },
  { verb: "push in", mean: "leave the concept out" },
  { verb: "pull a spare", mean: "grow a brand-new concept in the gap" },
  { verb: "flip", mean: "rule the concept out of merges" },
  { verb: "turn", mean: "face the puck's thick side toward another puck to mix in more of it" },
];

function Demo({ src, title, caption, aspect }: { src: string; title: string; caption: string; aspect: string }) {
  return (
    <figure className="my-10">
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black" style={{ aspectRatio: aspect }}>
        <iframe src={src} title={title} loading="lazy" className="absolute inset-0 h-full w-full" />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm text-neutral-400">
        <span>{caption}</span>
        <a href={src} target="_blank" rel="noopener noreferrer" className="font-mono hover:underline" style={{ color: ACCENT }}>
          open full screen ↗
        </a>
      </figcaption>
    </figure>
  );
}

export default function ContextPuckPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Current work</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Context Puck</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-300">
          A tangible interface for steering ideas with your hands, a small grammar of physical gestures for going
          deeper, leaving things out, and blending ideas together.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full px-4 py-2 text-sm text-white" style={{ backgroundColor: "#3CBCC3" }}>current work</span>
          <span className="rounded-full px-4 py-2 text-sm text-white" style={{ backgroundColor: "#D05A27" }}>tangible UI</span>
          <span className="rounded-full px-4 py-2 text-sm text-white" style={{ backgroundColor: "#A33C21" }}>HCI</span>
          <span className="rounded-full px-4 py-2 text-sm text-white" style={{ backgroundColor: "#E6B479" }}>AI</span>
        </div>

        <h2 className="mt-16 text-2xl font-semibold sm:text-3xl">The idea</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-neutral-300">
          Each idea lives on a puck. Around its rim sit knobs, one per concept the idea is made of. Instead of
          rewriting a prompt, you reach out and adjust the concepts directly: the knobs click outward through
          progressively deeper versions of a concept, can be pushed in or flipped over, and a spare knob lets a new
          concept grow. Bring a second puck close, and turning the first one decides how much of each idea goes into
          the mix.
        </p>

        <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">The grammar</h2>
        <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {GESTURES.map((g, i) => (
            <li key={g.verb} className="flex gap-4">
              <span className="font-mono text-sm font-bold" style={{ color: ACCENT }}>{i + 1}</span>
              <span>
                <span className="font-semibold">{g.verb}</span>
                <span className="block text-neutral-400">{g.mean}</span>
              </span>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-2xl font-semibold sm:text-3xl">Every gesture at once</h2>
        <Demo
          src="/context-puck/animation.html"
          title="Context Puck gesture storyboard"
          caption="Click to pause · ← → to scrub (after clicking into the frame)."
          aspect="16 / 10"
        />

        <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">Try it</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-neutral-300">
          Drag a knob outward to go deeper, into the rim to drop it, click it to keep or flip it. Once you&apos;ve
          learned one puck, a second one (B) joins: drag it toward A and turn A to mix the two.
        </p>
        <Demo
          src="/context-puck/interactive.html"
          title="Context Puck interactive demo"
          caption="Best on a laptop or desktop · press R inside the frame to reset."
          aspect="16 / 9"
        />

        <BackButton />
      </div>
    </div>
  );
}
