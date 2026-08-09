"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  // Contact info
  const myEmail = "mdashikur6398@gmail.com";
  const myLocation = "jashore,Dhaka Bangladesh";
  const myWork = "Web design & builds, consulting & collaboration";

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white md:px-8 md:py-32"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute right-[-150px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-500" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
              Contact
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_0.6fr] md:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
                Let&apos;s work{" "}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                Have a project, a performance problem, or just want to talk
                shop? Drop me a line.
              </p>
            </div>

            {/* Small decorative element */}
            <div className="hidden justify-end md:flex">
              <div className="rounded-2xl border border-purple-500/10 bg-white/[0.02] px-5 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d1d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/25">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl transition-all group-hover:bg-purple-500/20" />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>

                    <a
                      href={`mailto:${myEmail}`}
                      className="mt-1 block truncate text-sm font-semibold text-white transition-colors hover:text-purple-400"
                    >
                      {myEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy Email"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all hover:border-purple-500/30 hover:text-purple-400"
                >
                  {copied ? (
                    <span className="text-[9px] font-medium text-purple-400">
                      Copied!
                    </span>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d1d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/25">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {myLocation}
                  </p>
                </div>
              </div>
            </div>

            {/* Work Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d1d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/25">
              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Work
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-white">
                    {myWork}
                  </p>
                </div>
              </div>
            </div>

            {/* Extra CTA */}
            <div className="mt-2 rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-500/[0.07] via-transparent to-blue-500/[0.05] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                Let&apos;s connect
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                I&apos;m always open to discussing new projects, ideas and
                opportunities.
              </p>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d1d]/85 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            {/* Form glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-600/10 blur-[80px]" />

            <div className="relative z-10">
              <div className="mb-7">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  Send a message
                </span>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Tell me about your idea.
                </h3>
              </div>

              <form onSubmit={sendEmail} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-white/[0.08] bg-[#030712]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/[0.08] bg-[#030712]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="h-36 w-full resize-none rounded-xl border border-white/[0.08] bg-[#030712]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    minLength={10}
                    maxLength={1000}
                    required
                  />

                  <p className="mt-2 text-[10px] text-slate-600">
                    10–1000 characters.
                  </p>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="group mt-1 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 py-4 text-sm font-black text-white shadow-[0_15px_40px_rgba(99,102,241,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(99,102,241,0.28)] active:scale-[0.99]"
                >
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>

                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/20" />

          <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-600">
            Let&apos;s build something great
          </span>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/20" />
        </div>
      </div>
    </section>
  );
};

export default Contact;