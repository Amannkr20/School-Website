import { useEffect, memo } from 'react';

export default memo(function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-5 left-5 right-5 z-[100] mx-auto flex max-w-sm items-center gap-3 rounded-2xl bg-white/95 border border-black/5 p-4 text-dark shadow-[0_18px_50px_rgba(31,41,55,0.06)] backdrop-blur-md transition-all duration-300 animate-bounce-in sm:left-auto sm:right-5"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <i className="fa-solid fa-check"></i>
      </div>
      <div className="min-w-0 text-left">
        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest leading-none mb-1">
          Message Status
        </p>
        <p className="text-sm font-bold text-primary break-words">{message}</p>
      </div>
    </div>
  );
})

