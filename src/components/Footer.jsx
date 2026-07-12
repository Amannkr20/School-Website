import { copyPhone } from '../utils';

export default function Footer({ onShowToast }) {
  const handleCopyPhone = () => copyPhone(onShowToast);

  return (
    <footer id="contact" className="bg-dark py-16 text-white text-left">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Shri Kids Logo" className="h-12 w-12 rounded-xl object-cover" />
            <p className="font-display text-3xl text-secondary font-bold">Shri Kids</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/68">
            A future-facing preschool and primary school grounded in joyful exploration and strong foundational learning.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Visit</h3>
          <p className="mt-4 text-sm leading-6 text-white/72">
            Bhilai-3, Bhilai, Durg,<br />Chhattisgarh - 490021
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Contact</h3>
          <div className="mt-4 text-sm leading-6 text-white/72 space-y-1">
            <p>
              Admissions:{' '}
              <button
                onClick={handleCopyPhone}
                className="font-bold text-secondary hover:text-white transition cursor-pointer bg-transparent border-none p-0 inline align-baseline"
              >
                +91 79995 84503
              </button>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:srikidsbhilai@gmail.com"
                className="hover:text-secondary transition"
              >
                srikidsbhilai@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Follow</h3>
          <div className="mt-4 flex gap-4 text-lg text-white/70">
            <a
              href="https://www.youtube.com/@Shrikidsbhilai3"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-secondary"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="transition hover:text-secondary" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="transition hover:text-secondary" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/45 md:px-8">
        <p>&copy; {new Date().getFullYear()} Shri Kids School. All rights reserved.</p>
      </div>
    </footer>
  );
}
