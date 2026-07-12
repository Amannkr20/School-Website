import { useState, useEffect } from 'react';

export default function NoticeBoard() {
  const [notices, setNotices] = useState([
    {
      date: "June 17",
      title: "Annual Kids Clay Art Exhibition",
      desc: "Come and view the beautiful secondary models and finger paintings crafted by our Nursery and KG stars."
    },
    {
      date: "June 21",
      title: "Parent-Teacher Play Meet",
      desc: "A fun interactive session where parents participate in developmental games with kids and meet our teachers."
    },
    {
      date: "June 24",
      title: "Monsoon Camp Registration",
      desc: "Explore activities like music, dance, and storytelling in our special 2-week camp starting next month."
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNotices((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first) {
          next.push(first);
        }
        return next;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="relative flex flex-col gap-5 w-full text-left sm:flex-row lg:flex-col">
      <div className="min-w-0 flex-1 rounded-[2rem] bg-white p-6 text-dark shadow-[0_18px_50px_rgba(30,70,56,0.08)] border border-black/5">
        <div className="flex items-center justify-between gap-3 border-b border-black/10 pb-3">
          <h2 className="font-display text-2xl text-primary font-bold truncate">Today At Shri Kids</h2>
          <span className="shrink-0 rounded-full bg-poppy/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-poppy">
            <i className="fa-solid fa-circle text-[6px] mr-1.5 align-middle animate-pulse"></i>
            Live
          </span>
        </div>
        <div className="mt-5 space-y-4">
          {notices.slice(0, 2).map((notice, idx) => (
            <article
              key={`${notice.title}-${idx}`}
              className="rounded-2xl bg-light p-4 transition-all duration-500"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-secondary-dark">{notice.date}</p>
              <h3 className="mt-1 font-bold text-primary">{notice.title}</h3>
              <p className="mt-2 text-sm leading-6 text-dark/70">{notice.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="min-w-0 flex-1 rounded-[2rem] bg-primary p-6 text-white shadow-[0_18px_50px_rgba(30,70,56,0.12)]">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Quick Facts</p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-display font-extrabold text-3xl">2015</p>
            <p className="mt-1 text-white/72">Founded</p>
          </div>
          <div>
            <p className="font-display font-extrabold text-3xl">12+</p>
            <p className="mt-1 text-white/72">Co-curriculars</p>
          </div>
          <div>
            <p className="font-display font-extrabold text-3xl">15</p>
            <p className="mt-1 text-white/72">Max Class Size</p>
          </div>
          <div>
            <p className="font-display font-extrabold text-3xl">100%</p>
            <p className="mt-1 text-white/72">Trained Staff</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
