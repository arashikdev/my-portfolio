



"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".code-window", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white md:px-8 md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[15%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-[-100px] bottom-[10%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="about-reveal mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-500" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
              About Me
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h2>

            <div className="hidden rounded-full border border-purple-500/20 bg-purple-500/[0.04] px-4 py-2 md:block">
              <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
                Developer Profile
              </span>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div className="about-reveal relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d1d]/80 p-7 shadow-2xl backdrop-blur-xl md:p-9">
            {/* Card Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-purple-600/10 blur-[80px]" />

            <div className="relative">
              {/* Profile Label */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.05] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Who I Am
                </span>
              </div>

              <p className="about-reveal text-xl font-bold leading-8 text-white md:text-2xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Ashikur Rahman
                </span>
                , a Junior Web Developer and CSE student passionate about
                building modern web applications.
              </p>

              <p className="about-reveal mt-5 text-sm leading-7 text-slate-400 md:text-base">
                I enjoy creating clean, responsive and interactive experiences
                using React, Next.js and modern web technologies. I&apos;m
                continuously learning and improving my skills by building
                real-world projects.
              </p>

              {/* Mini Info */}
              <div className="about-reveal mt-8 grid grid-cols-2 gap-3">
                <div className="group rounded-2xl border border-purple-500/10 bg-gradient-to-br from-purple-500/[0.08] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30">
                  <p className="text-2xl font-black text-white">CSE</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Student
                  </p>
                </div>

                <div className="group rounded-2xl border border-blue-500/10 bg-gradient-to-br from-blue-500/[0.08] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                  <p className="text-2xl font-black text-white">MERN</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Development
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="about-reveal mt-8">
                <p className="mb-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                  Technologies I Work With
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "JavaScript",
                    "Tailwind",
                    "MongoDB",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] font-bold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-purple-400/[0.05] hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CODE WINDOW */}
          <div className="code-window relative flex items-center">
            {/* Outer Glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/10 blur-3xl" />

            <div className="relative w-full overflow-hidden rounded-3xl border border-purple-500/15 bg-[#070b18]/95 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              {/* Top Gradient Border */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-slate-500">
                    stack.json
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                </div>
              </div>

              {/* Code Area */}
              <div className="p-6 font-mono text-[12px] leading-7 md:p-8 md:text-[13px]">
                <div className="mb-2 flex gap-3">
                  <span className="select-none text-slate-700">01</span>
                  <span className="text-slate-500">{"{"}</span>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">02</span>

                  <div>
                    <span className="text-purple-300">
                      &quot;languages&quot;
                    </span>
                    <span className="text-slate-500">: [</span>

                    <span className="text-blue-300">
                      &quot;JavaScript&quot;
                    </span>

                    <span className="text-slate-500">, </span>

                    <span className="text-blue-300">&quot;C++&quot;</span>

                    <span className="text-slate-500">],</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">03</span>

                  <div>
                    <span className="text-purple-300">
                      &quot;frontend&quot;
                    </span>

                    <span className="text-slate-500">: [</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">04</span>

                  <span className="pl-4 text-blue-300">
                    &quot;React&quot;,
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">05</span>

                  <span className="pl-4 text-blue-300">
                    &quot;Next.js&quot;,
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">06</span>

                  <span className="pl-4 text-blue-300">
                    &quot;Tailwind CSS&quot;
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">07</span>

                  <span className="text-slate-500">],</span>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">08</span>

                  <div>
                    <span className="text-purple-300">
                      &quot;backend&quot;
                    </span>

                    <span className="text-slate-500">: [</span>

                    <span className="text-blue-300">
                      &quot;Node.js&quot;
                    </span>

                    <span className="text-slate-500">, </span>

                    <span className="text-blue-300">
                      &quot;Express&quot;
                    </span>

                    <span className="text-slate-500">],</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">09</span>

                  <div>
                    <span className="text-purple-300">
                      &quot;database&quot;
                    </span>

                    <span className="text-slate-500">: [</span>

                    <span className="text-blue-300">
                      &quot;MongoDB&quot;
                    </span>

                    <span className="text-slate-500">],</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">10</span>

                  <div>
                    <span className="text-purple-300">
                      &quot;status&quot;
                    </span>

                    <span className="text-slate-500">: </span>

                    <span className="text-blue-300">
                      &quot;Always learning&quot;
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="select-none text-slate-700">11</span>

                  <span className="text-slate-500">{"}"}</span>
                </div>
              </div>

              {/* Bottom Status */}
              <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.015] px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    Currently learning & building
                  </span>
                </div>

                <span className="hidden text-[9px] font-bold uppercase tracking-widest text-slate-700 sm:block">
                  v1.0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="about-reveal mt-16 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default About;
