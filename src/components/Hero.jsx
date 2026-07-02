import React from 'react';
import NoticeBoard from './NoticeBoard';

export default function Hero({ onOpenAdmissions }) {
  return (
    <section className="relative overflow-hidden bg-primary text-white text-left">
      <div
        className="absolute inset-y-0 right-0 hidden w-2/5 bg-[radial-gradient(circle_at_top,rgba(245,175,25,0.28),transparent_58%)] lg:block"
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
        <div className="relative flex flex-col justify-center">
          <span
            className="inline-flex max-w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-secondary mb-6"
          >
            Now Enrolling For 2026 - 2027
          </span>
          <h1 className="font-display text-5xl leading-tight md:text-7xl font-bold">
            A bright start for curious minds and joyful hearts.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Shri Kids School in Bhilai blends play-based exploration, foundational literacy, and a caring environment where every child thrives and grows with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={onOpenAdmissions}
              className="rounded-full bg-secondary px-7 py-3 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-primary transition hover:bg-white cursor-pointer"
            >
              Start Admission
            </button>
            <a
              href="#programs"
              className="rounded-full border border-white/25 px-7 py-3 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-primary"
            >
              Explore Programs
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-secondary">8:1</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/65">Student-Teacher Ratio</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-secondary">15+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/65">Activities &amp; Hobbies</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-secondary">100%</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/65">Joy &amp; Safety Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Live Notices NoticeBoard Sidebar */}
        <NoticeBoard />
      </div>
    </section>
  );
}
