const ZONES = [
  { icon: 'fa-child-reaching', title: 'Play Zones', border: 'border-secondary', desc: 'Indoor soft-play area and secure outdoor playgrounds with custom slides, swings, and sand pits.' },
  { icon: 'fa-display', title: 'Smart Classes', border: 'border-accent', desc: 'Classrooms equipped with interactive audio-visual screens to make learning visually engaging.' },
  { icon: 'fa-drum', title: 'Activity Center', border: 'border-poppy', desc: 'Dedicated spaces for music, rhythm, dance, creative puppetry, and storytelling sessions.' },
  { icon: 'fa-paintbrush', title: 'Creative Arts Room', border: 'border-leaf', desc: 'A bright, colorful environment for drawing, secondary modeling, finger painting, and crafts.' },
];

export default function CampusLife() {
  return (
    <section id="campus" className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24 text-left">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-primary p-8 text-white shadow-[0_18px_50px_rgba(30,70,56,0.1)]">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Campus Life</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Built for play, safety, and creative exploration.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ZONES.map((zone) => (
              <div key={zone.title} className={`rounded-3xl bg-white/10 p-5 border-l-4 ${zone.border}`}>
                <i className={`fa-solid ${zone.icon} text-secondary mb-2`}></i>
                <h3 className="font-bold text-white">{zone.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/74">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_50px_rgba(30,70,56,0.06)] border border-black/5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Kids Experience</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-dark/74 list-disc pl-5">
              <li>
                <span className="font-extrabold text-primary">Morning circles:</span> starts each day with fun greetings, interactive rhymes, and expressing feelings.
              </li>
              <li>
                <span className="font-extrabold text-primary">Creative block time:</span> dedicated slots for jigsaw puzzles, building blocks, and pattern recognition.
              </li>
              <li>
                <span className="font-extrabold text-primary">Theme days &amp; picnics:</span> regular events like fruit day, costume party, and local field trips to parks.
              </li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-secondary p-8 text-white shadow-[0_18px_50px_rgba(30,70,56,0.1)]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/72">Holistic Growth</p>
            <p className="mt-4 font-display text-3xl font-bold">Nurturing multiple talents early.</p>
            <p className="mt-3 text-sm leading-6 text-white/82">
              We believe in well-rounded development. Our kids explore gymnastics, public speaking, drawing, and music in a balanced weekly cycle, ensuring they develop confidence and physical coordination early.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
