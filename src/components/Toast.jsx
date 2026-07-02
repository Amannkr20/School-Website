import React, { useEffect } from 'react';

export default React.memo(function Toast({ message, visible, onClose }) {
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
      className="fixed bottom-5 right-5 z-[100] flex items-center gap-3 rounded-2xl bg-white/95 border border-black/5 p-4 text-dark shadow-[0_18px_50px_rgba(31,41,55,0.06)] backdrop-blur-md transition-all duration-300 animate-bounce-in"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <i className="fa-solid fa-check"></i>
      </div>
      <div className="text-left">
        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest leading-none mb-1">
          Message Status
        </p>
        <p className="text-sm font-bold text-primary">{message}</p>
      </div>
    </div>
  );
})

