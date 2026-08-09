"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Education = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const educationData = [
    {
      year: "2028",
      status: "Currently Enrolled",
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science & Engineering",
      institution: "Uttara University",
      description:
        "Pursuing BSc in CSE with strong academic focus and continuous improvement in programming skills.",
      icon: "01",
    },
    {
      year: "2025",
      status: "Completed",
      degree: "Computer Science & Engineering (CSE)",
      field: "Diploma / Technical Education",
      institution: "Jashore Polytechnic Institute",
      description:
        "Achieved a CGPA of 3.88 out of 4. Built responsive web projects using HTML, CSS and JavaScript while continuously improving problem-solving skills.",
      icon: "02",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 30%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });

      gsap.from(".education-card", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white md:px-8 md:py-32"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-[15%] h-[380px] w-[380px] rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute right-[-150px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="education-heading mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-500" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
              Education
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_0.55fr] md:items-end">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl">
              My academic{" "}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                journey.
              </span>
            </h2>

            <div className="rounded-2xl border border-purple-500/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                  Education Path
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                Building a strong foundation in computer science while
                continuously developing practical skills.
              </p>
            </div>
          </div>
        </div>

        {/* ================= EDUCATION CARDS ================= */}
        <div
          ref={timelineRef}
          className="relative grid gap-8 md:grid-cols-2"
        >
          {/* Center Line */}
          <div className="timeline-line absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent md:block" />

          {educationData.map((item, index) => (
            <div
              key={item.institution}
              className={`education-card relative ${
                index === 1 ? "md:mt-20" : ""
              }`}
            >
              {/* Connector */}
              <div
                className={`absolute top-12 hidden h-px w-10 bg-gradient-to-r from-purple-500/40 to-blue-500/20 md:block ${
                  index === 0 ? "right-[-40px]" : "left-[-40px]"
                }`}
              />

              {/* Timeline Number */}
              <div
                className={`absolute top-6 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-purple-500/30 bg-[#080d1d] text-[9px] font-black text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.15)] md:flex ${
                  index === 0
                    ? "right-[-61px]"
                    : "left-[-61px]"
                }`}
              >
                {item.icon}
              </div>

              {/* Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d1d]/80 p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/25 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] md:p-8">
                {/* Gradient Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-[80px] transition-all duration-500 group-hover:bg-purple-600/20" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-600/10 blur-[80px]" />

                <div className="relative z-10">
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-3 py-1.5 text-xs font-black tracking-[0.15em] text-purple-400">
                        {item.year}
                      </span>
                    </div>

                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider text-slate-500">
                      {item.status}
                    </span>
                  </div>

                  {/* Icon / Number */}
                  <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/15 bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-xs font-black text-blue-400">
                    {item.icon}
                  </div>

                  {/* Degree */}
                  <h3 className="mt-6 text-2xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-purple-300 md:text-3xl">
                    {item.degree}
                  </h3>

                  {/* Field */}
                  <p className="mt-2 text-sm font-semibold text-blue-400/90">
                    {item.field}
                  </p>

                  {/* Institution */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/15 bg-purple-500/[0.06] text-xs text-purple-400">
                      ◆
                    </div>

                    <span className="text-sm font-bold text-slate-300">
                      {item.institution}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  {/* CGPA */}
                  {index === 1 && (
                    <div className="mt-6 flex w-fit items-center gap-3 rounded-xl border border-purple-500/15 bg-gradient-to-r from-purple-500/[0.07] to-blue-500/[0.04] px-4 py-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Result
                      </span>

                      <span className="h-4 w-px bg-white/10" />

                      <span className="text-sm font-black text-purple-400">
                        3.89 / 4.00
                      </span>
                    </div>
                  )}

                  {/* Bottom Accent */}
                  <div className="mt-7 h-px w-0 bg-gradient-to-r from-purple-500 via-blue-500 to-transparent transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM LABEL ================= */}
        <div className="education-heading mt-16 flex items-center justify-center gap-4">
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-purple-500/20" />

          <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-600">
            Learning never stops
          </span>

          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-blue-500/20" />
        </div>
      </div>
    </section>
  );
};

export default Education;