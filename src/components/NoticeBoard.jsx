import React, { useState, useEffect } from 'react';

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
    <aside className="relative flex flex-col gap-5 w-full text-left">
      <div className="rounded-[2rem] bg-light p-6 text-dark shadow-[0_18px_50px_rgba(31,41,55,0.06)]">
        <div className="flex items-center justify-between border-b border-black/10 pb-3">
          <h2 className="font-display text-2xl text-primary font-bold">Today At Shri Kids</h2>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Live Notices</span>
        </div>
        <div className="mt-5 space-y-4 overflow-hidden relative h-[420px] md:h-[400px]">
          {notices.map((notice, idx) => (
            <article
              key={`${notice.title}-${idx}`}
              className="rounded-2xl bg-white p-4 shadow-sm border border-black/5 transition-all duration-500"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">{notice.date}</p>
              <h3 className="mt-1 font-bold text-primary">{notice.title}</h3>
              <p className="mt-2 text-sm leading-6 text-dark/70">{notice.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)] backdrop-blur-md text-white">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Quick Facts</p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-extrabold text-3xl">2015</p>
            <p className="mt-1 text-white/72">Founded</p>
          </div>
          <div>
            <p className="font-extrabold text-3xl">12+</p>
            <p className="mt-1 text-white/72">Co-curriculars</p>
          </div>
          <div>
            <p className="font-extrabold text-3xl">15</p>
            <p className="mt-1 text-white/72">Max Class Size</p>
          </div>
          <div>
            <p className="font-extrabold text-3xl">100%</p>
            <p className="mt-1 text-white/72">Trained Staff</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
