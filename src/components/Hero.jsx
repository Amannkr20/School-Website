import React from 'react';

export default function Hero({ onOpenAdmissions }) {
  return (
    <section className="relative overflow-hidden bg-light py-16 lg:py-24 text-left">
      {/* Decorative background shape */}
      <div
        className="absolute -right-40 -top-40 hidden h-[600px] w-[600px] rounded-full bg-secondary/5 blur-3xl lg:block"
      />
      <div
        className="absolute -left-20 bottom-0 hidden h-[300px] w-[300px] rounded-full bg-primary/5 blur-2xl lg:block"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        {/* Left Side: Content */}
        <div className="relative z-10 flex flex-col justify-center">
          <span
            className="inline-flex max-w-fit items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary border border-secondary/20 mb-6"
          >
            <i className="fa-solid fa-graduation-cap text-secondary"></i>
            Admissions Open 2026 - 2027
          </span>
          <h1 className="font-display text-4xl leading-tight text-primary font-bold md:text-6xl">
            A vibrant beginning for curious minds.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-dark/70 md:text-lg">
            Shri Kids School in Bhilai blends play-based exploration, foundational literacy, and a nurturing environment where every child grows with confidence and joy.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={onOpenAdmissions}
              className="rounded-full bg-secondary px-8 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-primary shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              Start Admission
            </button>
            <a
              href="#programs"
              className="rounded-full border border-primary/15 px-8 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/5"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right Side: Professional Image Container */}
        <div className="relative z-10 lg:pl-6">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Background Accent Frame */}
            <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-dashed border-secondary/20 lg:-inset-4"></div>
            
            {/* Main Image Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white shadow-xl border border-black/5 sm:aspect-[1.4/1]">
              <img
                src="/parent_child.png"
                alt="Parent and child learning together"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
              
              {/* Micro badge overlay */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm border border-black/5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-primary">
                  <i className="fa-solid fa-star text-secondary"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider leading-none mb-1">Play & Primary School</p>
                  <p className="text-[10px] text-dark/60 font-semibold">10+ Years of Educational Legacy in Bhilai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
