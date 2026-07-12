export default function Programs() {
  return (
    <section id="programs" className="bg-white/70 py-16 lg:py-24 text-left">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Programs</p>
            <h2 className="mt-3 font-display text-4xl text-primary font-bold">Nurturing programs for early learning.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-dark/72">
            Our curriculum scales intentionally from play-based sensory milestones to cognitive development, phonics, and elementary readiness.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Playgroup: leaf-green for early growth */}
          <article className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(30,70,56,0.05)]">
            <span className="inline-flex rounded-full bg-leaf/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-leaf">
              Playgroup &amp; Nursery
            </span>
            <h3 className="mt-4 font-display text-3xl text-primary font-bold">Age 2-3 Yrs</h3>
            <p className="mt-4 text-sm leading-6 text-dark/72">
              Sensory play, socialization, basic motor skills, nursery rhymes, and colorful visual recognition activities.
            </p>
          </article>

          {/* Kindergarten: marigold - the school's signature color, front and center */}
          <article className="rounded-[2rem] border border-black/5 bg-primary p-8 text-white shadow-[0_18px_50px_rgba(30,70,56,0.12)] lg:-translate-y-3">
            <span className="inline-flex rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              Kindergarten (LKG &amp; UKG)
            </span>
            <h3 className="mt-4 font-display text-3xl text-white font-bold">Age 3-5 Yrs</h3>
            <p className="mt-4 text-sm leading-6 text-white/78">
              Introduction to phonics, basic arithmetic, environmental science, writing prep, and creative arts.
            </p>
          </article>

          {/* Primary: sky-blue for knowledge */}
          <article className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(30,70,56,0.05)]">
            <span className="inline-flex rounded-full bg-accent/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Primary School
            </span>
            <h3 className="mt-4 font-display text-3xl text-primary font-bold">Classes 1-5</h3>
            <p className="mt-4 text-sm leading-6 text-dark/72">
              Formal curriculum including languages, mathematics, science, computers, and moral education.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
