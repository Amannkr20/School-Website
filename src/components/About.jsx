import React from 'react';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24 text-left">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div
          className="rounded-[2rem] bg-primary p-8 text-white shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5"
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Mission</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-bold">
            Children should begin their educational journey feeling safe, loved, and eager to explore.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/80">
            We combine play-based experiential learning with foundational literacy, numeracy, creative arts, and physical development. The result is a vibrant, supportive environment where children grow emotionally, socially, and intellectually.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
            <i className="fa-solid fa-child text-2xl text-secondary"></i>
            <h3 className="mt-4 font-display text-2xl text-primary font-bold">Personalized Care</h3>
            <p className="mt-3 text-sm leading-6 text-dark/72">
              Small class sizes ensure every child gets individualized attention and support tailored to their unique pace.
            </p>
          </article>
          <article className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
            <i className="fa-solid fa-puzzle-piece text-2xl text-secondary"></i>
            <h3 className="mt-4 font-display text-2xl text-primary font-bold">Play-Based Learning</h3>
            <p className="mt-3 text-sm leading-6 text-dark/72">
              Sensory play, creative building, and hands-on activities make complex concepts simple and engaging.
            </p>
          </article>
          <article className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
            <i className="fa-solid fa-palette text-2xl text-secondary"></i>
            <h3 className="mt-4 font-display text-2xl text-primary font-bold">Creative Expression</h3>
            <p className="mt-3 text-sm leading-6 text-dark/72">
              Through music, painting, drama, and storytelling, children build confidence and motor skills.
            </p>
          </article>
          <article className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
            <i className="fa-solid fa-shield-halved text-2xl text-secondary"></i>
            <h3 className="mt-4 font-display text-2xl text-primary font-bold">Safe &amp; Nurturing</h3>
            <p className="mt-3 text-sm leading-6 text-dark/72">
              A child-safe, hygienic, and highly monitored campus designed to give parents absolute peace of mind.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
