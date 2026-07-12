const EVENTS = [
  { month: 'September', title: "Grandparents' Day", chip: 'text-secondary', desc: "Special events where children perform and spend a beautiful day of bonding on campus." },
  { month: 'November', title: "Children's Carnival", chip: 'text-poppy', desc: "An annual funfest with games, food stalls, puppet shows, and student talent showcases." },
  { month: 'February', title: 'Annual Sports Meet', chip: 'text-accent', desc: "Exciting and fun-filled track events, drills, and games promoting teamwork and fitness." },
  { month: 'April', title: 'Graduation Ceremony', chip: 'text-leaf', desc: "Celebrating our kindergarten stars as they transition to primary school." },
];

export default function Calendar() {
  return (
    <section id="calendar" className="bg-primary py-16 text-white lg:py-24 text-left">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Calendar Highlights</p>
            <h2 className="mt-3 font-display text-4xl font-bold">A year that feels active, not overstuffed.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/72">
            The calendar balances classroom activities with community celebrations, festivals, sports events, and parent-child bonding days.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {EVENTS.map((event) => (
            <article key={event.title} className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-sm">
              <p className={`text-xs font-bold uppercase tracking-[0.22em] ${event.chip}`}>{event.month}</p>
              <h3 className="mt-3 text-xl font-bold">{event.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/74">{event.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
