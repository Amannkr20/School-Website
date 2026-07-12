import NoticeBoard from './NoticeBoard';

export default function Hero({ onOpenAdmissions }) {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24 text-left">
      {/* Decorative clean background accents */}
      <div className="absolute -right-40 -top-40 hidden h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl lg:block" />
      <div className="absolute -left-20 bottom-0 hidden h-[300px] w-[300px] rounded-full bg-secondary/5 blur-2xl lg:block" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* Left Side: Content */}
        <div className="relative z-10 flex flex-col justify-start lg:pt-8">
          <span className="inline-flex items-center gap-2 max-w-fit rounded-full bg-primary px-4 py-2 text-xs font-black uppercase tracking-wider text-white mb-6 shadow-sm">
            <i className="fa-solid fa-star text-secondary"></i>
            Admissions Open 2026 - 2027
          </span>

          <h1 className="text-4xl leading-tight text-primary font-black md:text-5xl lg:text-6xl">
            A vibrant beginning for <span className="text-secondary">curious minds</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg font-semibold">
            Shri Kids School in Bhilai blends play-based exploration, foundational literacy, and a nurturing environment where every child grows with confidence and joy.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={onOpenAdmissions}
              className="rounded-full bg-secondary px-8 py-4 text-center text-xs font-black uppercase tracking-wider text-white transition hover:bg-primary shadow-md cursor-pointer"
            >
              Start Admission
            </button>
            <a
              href="#programs"
              className="rounded-full border-2 border-primary/20 px-8 py-4 text-center text-xs font-black uppercase tracking-wider text-primary transition hover:bg-primary/5"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right Side: Image + live NoticeBoard */}
        <div className="relative z-10 flex flex-col gap-6 lg:pl-6">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Background Accent Frame */}
            <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-primary/20 lg:-inset-4"></div>

            {/* Main Image Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 sm:aspect-[1.5/1]">
              <img
                src="/Images/WhatsApp Image 2026-07-04 at 15.47.44.jpeg"
                alt="Shri Kids Learning Activities"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>

              {/* Micro badge overlay */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-4 shadow-md border border-gray-100 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-primary">
                  <i className="fa-solid fa-star text-secondary"></i>
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-black text-primary uppercase tracking-wider leading-none mb-1">Play &amp; Primary School</p>
                  <p className="text-[10px] text-gray-500 font-bold">10+ Years of Educational Legacy in Bhilai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Live rotating notices */}
          <NoticeBoard />
        </div>
      </div>
    </section>
  );
}
