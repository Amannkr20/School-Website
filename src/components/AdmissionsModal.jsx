import React, { useState, useEffect } from 'react';

export default React.memo(function AdmissionsModal({ isOpen, onClose, onShowToast }) {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [classApplied, setClassApplied] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      studentName,
      parentName,
      classApplied,
      phone,
      email
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbyMGtF27_HDgfd3yK9jzU0HRZcmdvbZ2DLBBmTlX9as4Aarhr1pAaGomjtBSiublFZB/exec";

    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(formData)
    })
      .then(() => {
        setIsSuccess(true);
        onShowToast("Application submitted successfully! Our coordinator will contact you soon.");
        // Reset form states
        setStudentName('');
        setParentName('');
        setClassApplied('');
        setPhone('');
        setEmail('');
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        onShowToast("Something went wrong. Please try again or call our coordinator.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div
      onClick={(e) => {
        if (e.target.id === 'modal-overlay') onClose();
      }}
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm transition-all duration-300"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl grid md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-light text-dark/70 hover:bg-secondary hover:text-white transition shadow-sm cursor-pointer"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Left Side: Form or Success message */}
        <div className="p-8 md:p-10 flex flex-col justify-center bg-white text-left">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6 shadow-sm border border-emerald-100">
                <i className="fa-solid fa-check text-2xl animate-pulse"></i>
              </div>
              <h2 className="font-display text-3xl text-primary font-bold leading-tight">Thank You!</h2>
              <p className="mt-4 text-sm leading-relaxed text-dark/70 max-w-xs">
                Your application has been submitted successfully. Our admission coordinator will contact you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-8 rounded-xl bg-secondary px-8 py-3 text-sm font-bold text-white transition hover:bg-primary shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div>
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Academic Year 2026-27
                </span>
                <h2 className="mt-3 font-display text-3xl text-primary font-bold leading-tight">Admissions Open</h2>
                <p className="mt-1 text-sm text-dark/60">Fill in the details below and our coordinator will get in touch.</p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark/60 mb-1">Student Name</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter student's full name"
                    className="w-full rounded-xl border border-dark/10 bg-light/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark/60 mb-1">Parent Name</label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Enter parent or guardian name"
                    className="w-full rounded-xl border border-dark/10 bg-light/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark/60 mb-1">Class Applying For</label>
                  <select
                    required
                    value={classApplied}
                    onChange={(e) => setClassApplied(e.target.value)}
                    className="w-full rounded-xl border border-dark/10 bg-light/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition appearance-none"
                  >
                    <option value="" disabled>Select Class</option>
                    <option value="Playgroup">Playgroup (Age 1.5 - 2.5)</option>
                    <option value="Nursery">Nursery (Age 2.5 - 3.5)</option>
                    <option value="LKG">LKG (Age 3.5 - 4.5)</option>
                    <option value="UKG">UKG (Age 4.5 - 5.5)</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark/60 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit number"
                      className="w-full rounded-xl border border-dark/10 bg-light/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark/60 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full rounded-xl border border-dark/10 bg-light/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 rounded-xl bg-secondary py-3 text-sm font-bold text-white transition hover:bg-primary shadow-lg hover:shadow-primary/20 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Right Side: Image */}
        <div className="relative hidden md:block bg-primary text-left">
          <img
            src="/parent_child.png"
            alt="Parent and child drawing together"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <p className="font-display text-2xl leading-snug font-bold">Empowering young learners to explore, dream, and grow.</p>
            <p className="mt-2 text-sm text-white/70">— Shri Kids Campus Life</p>
          </div>
        </div>
      </div>
    </div>
  );
})

