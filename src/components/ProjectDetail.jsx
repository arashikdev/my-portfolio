"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectDetail = ({ project }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Initial reveal animation
      gsap.from(".detail-reveal", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Scroll animations
      gsap.utils.toArray(".detail-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  // =========================
  // PROJECT NOT FOUND
  // =========================

  if (!project) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050811] px-6 text-white">
        {/* Glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="relative z-10 text-center">
          <p className="font-mono text-sm font-bold text-violet-400">
            404
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            Project not found
          </h1>

          <Link
            href="/#projects"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-br
              from-violet-500
              to-blue-500
              px-6
              py-3
              text-xs
              font-black
              uppercase
              tracking-widest
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:from-violet-400
              hover:to-blue-400
              hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]
            "
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  // =========================
  // FEATURES
  // =========================

  const features = [
    {
      number: "01",
      title: "Modern Architecture",
      description:
        "Built with modern technologies and a structured architecture focused on scalability, maintainability, and a smooth development experience.",
    },
    {
      number: "02",
      title: "Responsive Experience",
      description:
        "Designed to provide a clean and responsive experience across desktop, tablet, and mobile devices.",
    },
    {
      number: "03",
      title: "Performance Focused",
      description:
        "Focused on fast loading, optimized assets, clean UI, and an efficient user experience.",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050811]
        text-slate-200
        selection:bg-violet-500
        selection:text-white
      "
    >
      {/* ================================================= */}
      {/* AMBIENT BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none fixed -left-40 top-40 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="pointer-events-none fixed -right-40 top-[50%] h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none fixed left-[45%] top-[20%] h-72 w-72 rounded-full bg-violet-500/5 blur-[120px]" />

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        {/* ================================================= */}
        {/* BACK BUTTON */}
        {/* ================================================= */}

        <Link
          href="/#projects"
          className="
            detail-reveal
            group
            mb-12
            inline-flex
            items-center
            gap-3
            font-mono
            text-[10px]
            font-black
            uppercase
            tracking-[0.25em]
            text-slate-500
            transition-all
            duration-300
            hover:-translate-x-1
          "
        >
          <span
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          >
            ←
          </span>

          <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">
            Back to Projects
          </span>
        </Link>

        {/* ================================================= */}
        {/* PROJECT HEADER */}
        {/* ================================================= */}

        <section className="detail-section">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_380px]">
            {/* LEFT */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-blue-500" />

                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-[10px] font-black uppercase tracking-[0.3em] text-transparent">
                  {project.year} / Project
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
                {project.title}

                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  .
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                {project.description}
              </p>
            </div>

            {/* RIGHT META */}

            <div
              className="
                rounded-2xl
                border
                border-white/[0.07]
                bg-[#07111e]/80
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-violet-500/20
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Role
                </p>

                <p className="mt-2 text-sm font-bold text-white">
                  {project.role || "Full Stack Developer"}
                </p>
              </div>

              <div className="my-5 h-px bg-white/[0.06]" />

              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Year
                </p>

                <p className="mt-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-sm font-bold text-transparent">
                  {project.year || "2026"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* HERO IMAGE */}
        {/* ================================================= */}

        <section className="detail-section mt-14">
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.07]
              bg-[#07111e]
              transition-all
              duration-500
              hover:border-violet-500/20
              hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
            "
          >
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-violet-500/15 to-blue-500/10 blur-[100px]" />

            <div className="relative aspect-[16/8] overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                whileHover={{ scale: 1.04 }}
                className="h-full w-full object-cover transition-all duration-700 group-hover:brightness-90"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 via-transparent to-transparent" />

              {/* Image Label */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-xl
                  border
                  border-violet-500/20
                  bg-[#07111e]/70
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-transparent">
                  Featured Project
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* PROJECT INFO */}
        {/* ================================================= */}

        <section className="detail-section mt-16 grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* ABOUT */}

          <div
            className="
              rounded-3xl
              border
              border-white/[0.07]
              bg-[#07111e]/70
              p-7
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-violet-500/20
            "
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-blue-500" />

              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-[10px] font-black uppercase tracking-[0.25em] text-transparent">
                About Project
              </span>
            </div>

            <h2 className="text-3xl font-black md:text-4xl">
              The idea behind{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-400 md:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* TECH STACK */}

          <div
            className="
              rounded-3xl
              border
              border-white/[0.07]
              bg-[#07111e]/70
              p-7
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-violet-500/20
            "
          >
            <p className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-[9px] font-black uppercase tracking-[0.25em] text-transparent">
              Technology
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags?.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="
                    rounded-lg
                    border
                    border-violet-500/20
                    bg-gradient-to-br
                    from-violet-500/[0.08]
                    to-blue-500/[0.05]
                    px-3
                    py-2
                    font-mono
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-violet-300
                    transition-all
                    duration-300
                    hover:border-violet-400/40
                    hover:from-violet-500/[0.15]
                    hover:to-blue-500/[0.10]
                  "
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* FEATURES */}
        {/* ================================================= */}

        <section className="detail-section mt-24">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-blue-500" />

              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-[10px] font-black uppercase tracking-[0.25em] text-transparent">
                Highlights
              </span>
            </div>

            <h2 className="text-3xl font-black md:text-5xl">
              What makes it{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                special?
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.number}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#07111e]/80
                  p-7
                  transition-all
                  duration-300
                  hover:border-violet-500/30
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                "
              >
                {/* Hover Glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-xs font-black text-transparent">
                    {feature.number}
                  </span>

                  <h3 className="mt-8 text-xl font-black text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/* ACTION SECTION */}
        {/* ================================================= */}

        <section className="detail-section mt-24">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-violet-500/10
              bg-[#07111e]
              p-8
              md:p-14
            "
          >
            {/* Glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/10 to-blue-500/10 blur-[120px]" />

            <div className="relative z-10 text-center">
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-[9px] font-black uppercase tracking-[0.3em] text-transparent">
                Take a closer look
              </span>

              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Explore the project.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
                View the live application or explore the source code to see
                how this project was built.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {/* Live Demo */}

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-br
                    from-violet-500
                    to-blue-500
                    px-7
                    py-3.5
                    text-xs
                    font-black
                    uppercase
                    tracking-widest
                    text-white
                    shadow-[0_10px_40px_rgba(139,92,246,0.18)]
                    transition-all
                    duration-300
                    hover:from-violet-400
                    hover:to-blue-400
                    hover:shadow-[0_15px_50px_rgba(59,130,246,0.25)]
                  "
                >
                  Live Demo
                  <span>↗</span>
                </motion.a>

                {/* GitHub */}

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-7
                    py-3.5
                    text-xs
                    font-black
                    uppercase
                    tracking-widest
                    text-slate-300
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-violet-500/30
                    hover:bg-gradient-to-br
                    hover:from-violet-500/[0.08]
                    hover:to-blue-500/[0.06]
                    hover:text-violet-300
                  "
                >
                  GitHub
                  <span>↗</span>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* BACK TO PROJECTS */}
        {/* ================================================= */}

        <div className="mt-16 flex justify-center">
          <Link
            href="/#projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              font-mono
              text-[9px]
              font-black
              uppercase
              tracking-[0.25em]
              text-slate-600
              transition-all
              duration-300
              hover:-translate-x-1
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">
              All Projects
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;