import React from 'react';

export default function Admissions({ onOpenAdmissions, onShowToast }) {
  const handleTalkToAdmissions = (e) => {
    const phoneNumber = "+917999584503";
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        onShowToast("+91 79995 84503 copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy number:", err);
      });
  };

  return (
    <>
      {/* Stats/Results Section */}
      <section id="results" className="bg-white/70 py-16 lg:py-24 text-left">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
              <p className="text-4xl font-extrabold text-primary">1000+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-dark/55">Happy Alumni</p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
              <p className="text-4xl font-extrabold text-primary">10+ Yrs</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-dark/55">Educational Legacy</p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
              <p className="text-4xl font-extrabold text-primary">100%</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-dark/55">Safety &amp; Hygiene Rate</p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(31,41,55,0.06)] border border-black/5">
              <p className="text-4xl font-extrabold text-primary">20+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-dark/55">Smart Activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process & Timeline */}
      <section id="admissions" className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24 text-left">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] bg-light p-8 shadow-[0_18px_50px_rgba(31,41,55,0.06)]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Admissions</p>
            <h2 className="mt-3 font-display text-4xl text-primary font-bold">
              A clear process, warm guidance, and room for questions.
            </h2>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-white p-5 shadow-sm border border-black/5">
                <p className="font-bold text-primary">1. Inquiry and Visit</p>
                <p className="mt-2 text-sm leading-6 text-dark/72">
                  Schedule a school tour, visit our activity rooms, and interact with our coordinator.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm border border-black/5">
                <p className="font-bold text-primary">2. Application Form</p>
                <p className="mt-2 text-sm leading-6 text-dark/72">
                  Submit birth certificate copy, passport size photos, and the simple application form.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm border border-black/5">
                <p className="font-bold text-primary">3. Warm Interaction</p>
                <p className="mt-2 text-sm leading-6 text-dark/72">
                  A friendly conversation to understand the child's needs and align expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-primary p-8 text-white shadow-[0_18px_50px_rgba(31,41,55,0.06)] relative flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Key Admissions Timeline</p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                  <div className="rounded-2xl bg-white/10 px-4 py-3 text-center min-w-[70px]">
                    <p className="text-xs uppercase tracking-[0.18em] text-secondary font-bold">Feb</p>
                    <p className="text-2xl font-extrabold leading-none mt-1">15</p>
                  </div>
                  <div>
                    <p className="font-bold">Admissions Open</p>
                    <p className="mt-1 text-sm text-white/76">
                      Enquiry forms available online and at the school reception.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                  <div className="rounded-2xl bg-white/10 px-4 py-3 text-center min-w-[70px]">
                    <p className="text-xs uppercase tracking-[0.18em] text-secondary font-bold">Apr</p>
                    <p className="text-2xl font-extrabold leading-none mt-1">10</p>
                  </div>
                  <div>
                    <p className="font-bold">Orientation Program</p>
                    <p className="mt-1 text-sm text-white/76">
                      Introductory session for parents on our play-based teaching methodology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/10 px-4 py-3 text-center min-w-[70px]">
                    <p className="text-xs uppercase tracking-[0.18em] text-secondary font-bold">Jun</p>
                    <p className="text-2xl font-extrabold leading-none mt-1">15</p>
                  </div>
                  <div>
                    <p className="font-bold">New Session Begins</p>
                    <p className="mt-1 text-sm text-white/76">
                      Welcome week starts with exciting orientation activities for children.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onOpenAdmissions();
                }}
                className="inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-primary transition hover:bg-white cursor-pointer"
              >
                Apply Online
              </button>
              <a
                href="#contact"
                onClick={handleTalkToAdmissions}
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-primary"
              >
                Talk To Admissions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
