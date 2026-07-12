const CARDS = [
  { icon: 'fa-child', title: 'Personalized Care', chip: 'bg-poppy/12 text-poppy', desc: 'Small class sizes ensure every child gets individualized attention and support tailored to their unique pace.' },
  { icon: 'fa-puzzle-piece', title: 'Play-Based Learning', chip: 'bg-secondary/15 text-secondary-dark', desc: 'Sensory play, creative building, and hands-on activities make complex concepts simple and engaging.' },
  { icon: 'fa-palette', title: 'Creative Expression', chip: 'bg-accent/12 text-accent', desc: 'Through music, painting, drama, and storytelling, children build confidence and motor skills.' },
  { icon: 'fa-shield-halved', title: 'Safe & Nurturing', chip: 'bg-leaf/12 text-leaf', desc: 'A child-safe, hygienic, and highly monitored campus designed to give parents absolute peace of mind.' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24 text-left">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] bg-primary p-8 text-white shadow-[0_18px_50px_rgba(30,70,56,0.1)] border border-black/5">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Mission</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-bold">
            Children should begin their educational journey feeling safe, loved, and eager to explore.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/80">
            We combine play-based experiential learning with foundational literacy, numeracy, creative arts, and physical development. The result is a vibrant, supportive environment where children grow emotionally, socially, and intellectually.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_50px_rgba(30,70,56,0.06)] border border-black/5 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(30,70,56,0.12)]"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.chip}`}>
                <i className={`fa-solid ${card.icon} text-lg`}></i>
              </div>
              <h3 className="mt-4 font-display text-2xl text-primary font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-dark/72">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
