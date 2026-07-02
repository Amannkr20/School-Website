import React from 'react';

export default function Calendar() {
  return (
    <section id="calendar" className="bg-primary py-16 text-white lg:py-24 text-left">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Calendar Highlights</p>
            <h2 className="mt-3 font-display text-4xl font-bold font-display">A year that feels active, not overstuffed.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/72">
            The calendar balances classroom activities with community celebrations, festivals, sports events, and parent-child bonding days.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">September</p>
            <h3 className="mt-3 text-xl font-bold">Grandparents' Day</h3>
            <p className="mt-2 text-sm leading-6 text-white/74">
              Special events where children perform and spend a beautiful day of bonding on campus.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">November</p>
            <h3 className="mt-3 text-xl font-bold">Children's Carnival</h3>
            <p className="mt-2 text-sm leading-6 text-white/74">
              An annual funfest with games, food stalls, puppet shows, and student talent showcases.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">February</p>
            <h3 className="mt-3 text-xl font-bold">Annual Sports Meet</h3>
            <p className="mt-2 text-sm leading-6 text-white/74">
              Exciting and fun-filled track events, drills, and games promoting teamwork and fitness.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">April</p>
            <h3 className="mt-3 text-xl font-bold">Graduation Ceremony</h3>
            <p className="mt-2 text-sm leading-6 text-white/74">
              Celebrating our kindergarten stars as they transition to primary school.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
