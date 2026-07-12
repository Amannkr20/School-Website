export default function InfoModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100 flex flex-col text-left">
        {/* Title Bar */}
        <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
          <h3 className="font-sans text-lg font-black uppercase tracking-wider">{title}</h3>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition duration-150 cursor-pointer text-xl"
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <p className="text-gray-700 text-sm font-semibold whitespace-pre-line leading-relaxed">
            {content}
          </p>
        </div>

        {/* Close Button */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-100">
          <button 
            onClick={onClose}
            className="rounded-full bg-secondary text-white px-6 py-2 text-xs font-black uppercase tracking-wider hover:bg-primary transition shadow-md cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
