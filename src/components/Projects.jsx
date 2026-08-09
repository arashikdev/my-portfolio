// "use client";

// import React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const Projects = ({ projectsData = [] }) => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (!projectsData || projectsData.length === 0) return;

//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".project-card").forEach((card, i) => {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 50 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             delay: i * 0.12,
//             scrollTrigger: {
//               trigger: card,
//               start: "top 88%",
//               toggleActions: "play none none none",
//             },
//           },
//         );
//       });

//       gsap.to(".projects-title", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//         },
//         y: -20,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [projectsData]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32"
//       id="projects"
//     >
//       {/* Background Ambient Glow */}
//       <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[140px]" />

//       {/* Header Section */}
//       <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//         <div>
//           <div className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
//             <span className="h-px w-6 bg-emerald-400"></span>
//             <span>03 / Selected Works</span>
//           </div>
//           <h2 className="projects-title text-4xl font-extrabold tracking-tight text-white md:text-5xl">
//             Featured <span className="text-emerald-400">Projects</span>
//           </h2>
//         </div>

//         <p className="max-w-md text-sm leading-relaxed text-slate-400">
//           A showcase of full-stack web applications, interactive portals, and
//           modern digital experiences.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {projectsData && projectsData.length > 0 ? (
//           projectsData.map((project, index) => (
//             <motion.div
//               key={project.id || index}
//               whileHover={{ y: -8 }}
//               transition={{ type: "spring", stiffness: 250, damping: 20 }}
//               className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0b1120] shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10"
//             >
//               {/* Background Glow on Hover */}
//               <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

//               {/* Image Banner */}
//               <div className="relative h-52 w-full overflow-hidden bg-slate-950">
//                 <motion.img
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.5 }}
//                   src={project.image}
//                   alt={project.title}
//                   className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
//                 />

//                 {/* Number Badge */}
//                 <span className="absolute left-4 top-4 rounded-lg border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-400 backdrop-blur-md">
//                   0{index + 1}
//                 </span>

//                 {/* Hover Details Button Overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
//                   <Link
//                     href={`/projects/${project.id}`}
//                     className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-md transition-all hover:bg-emerald-400 hover:text-slate-950 hover:shadow-lg hover:shadow-emerald-400/20"
//                   >
//                     View Case Study
//                   </Link>
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="flex flex-1 flex-col p-6 md:p-7">
//                 <Link href={`/projects/${project.id}`}>
//                   <h3 className="text-xl font-bold text-white transition-colors hover:text-emerald-400">
//                     {project.title}
//                   </h3>
//                 </Link>

//                 <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
//                   {project.description}
//                 </p>

//                 {/* Tags */}
//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {project.tags &&
//                     project.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400"
//                       >
//                         #{tag.toLowerCase()}
//                       </span>
//                     ))}
//                 </div>

//                 {/* Live Preview Button */}
//                 <div className="mt-7 pt-2">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/40 py-3 text-xs font-extrabold uppercase tracking-widest text-slate-200 transition-all hover:border-emerald-500/50 hover:bg-emerald-400/10 hover:text-emerald-300"
//                   >
//                     Live Preview
//                     <svg
//                       className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <div className="col-span-3 py-20 text-center font-mono text-sm text-slate-500">
//             No projects found in database.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;


"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = ({ projectsData = [] }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!projectsData?.length) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".projects-header", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Card animation
      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projectsData]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* ================================================= */}
      {/* AMBIENT BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-[20%] h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/5 blur-[120px]" />

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="projects-header mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-br from-violet-500 to-blue-500" />

            <span className="bg-gradient-to-br from-violet-500 to-blue-500 bg-clip-text font-mono text-[10px] font-black uppercase tracking-[0.3em] text-transparent">
              03 / Selected Works
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Featured{" "}
                <span className="bg-gradient-to-br from-violet-500 to-blue-500 bg-clip-text text-transparent">
                  Projects.
                </span>
              </h2>

              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500">
              A collection of modern web applications and digital experiences
              built with a focus on performance, usability and clean design.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* PROJECT LIST */}
        {/* ================================================= */}

        <div className="space-y-8">
          {projectsData?.length > 0 ? (
            projectsData.map((project, index) => (
              <motion.article
                key={`${project.id}-${index}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  project-card
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-[#07111e]/80
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-violet-500/40
                  hover:shadow-[0_25px_80px_rgba(99,102,241,0.15)]
                "
              >

                {/* ================================================= */}
                {/* CARD HOVER GLOW */}
                {/* ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-72
                    w-72
                    rounded-full
                    bg-gradient-to-br
                    from-violet-500/20
                    to-blue-500/15
                    opacity-0
                    blur-[90px]
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -left-32
                    h-64
                    w-64
                    rounded-full
                    bg-blue-500/10
                    opacity-0
                    blur-[90px]
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* ================================================= */}
                {/* CARD */}
                {/* ================================================= */}

                <div className="relative grid lg:grid-cols-[1.05fr_1fr]">

                  {/* ================================================= */}
                  {/* IMAGE */}
                  {/* ================================================= */}

                  <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">

                    <motion.img
                      src={project.image}
                      alt={project.title}
                      initial={{
                        scale: 1,
                      }}
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:brightness-75
                      "
                    />

                    {/* Image Dark Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#07111e]/10
                        via-transparent
                        to-[#07111e]/90
                      "
                    />

                    {/* Violet Blue Hover Overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-violet-500/0
                        via-transparent
                        to-blue-500/0
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:from-violet-500/20
                        group-hover:to-blue-500/20
                        group-hover:opacity-100
                      "
                    />

                    {/* ================================================= */}
                    {/* NUMBER */}
                    {/* ================================================= */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-violet-500/30
                        bg-[#07111e]/80
                        font-mono
                        text-[10px]
                        font-black
                        text-violet-400
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:border-violet-400/60
                        group-hover:bg-violet-500/10
                        group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* ================================================= */}
                    {/* YEAR */}
                    {/* ================================================= */}

                    <span
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-3
                        py-1.5
                        font-mono
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-slate-300
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:border-violet-400/30
                        group-hover:bg-violet-500/10
                      "
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* ================================================= */}
                  {/* CONTENT */}
                  {/* ================================================= */}

                  <div className="relative flex flex-col justify-between p-7 md:p-9 lg:p-10">

                    <div>

                      {/* Category */}

                      <div className="mb-5 flex items-center justify-between">
                        <span className="bg-gradient-to-br from-violet-500 to-blue-500 bg-clip-text font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-transparent">
                          {project.role}
                        </span>

                        <span className="text-xs text-slate-600 transition-colors duration-300 group-hover:text-violet-400/70">
                          / {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* ================================================= */}
                      {/* TITLE */}
                      {/* ================================================= */}

                      <Link href={`/projects/${project.id}`}>
                        <h3
                          className="
                            text-2xl
                            font-black
                            tracking-tight
                            text-white
                            transition-all
                            duration-500
                            group-hover:translate-x-1
                            group-hover:bg-gradient-to-r
                            group-hover:from-violet-400
                            group-hover:to-blue-400
                            group-hover:bg-clip-text
                            group-hover:text-transparent
                            md:text-3xl
                          "
                        >
                          {project.title}
                        </h3>
                      </Link>

                      {/* ================================================= */}
                      {/* DESCRIPTION */}
                      {/* ================================================= */}

                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                        {project.description}
                      </p>

                      {/* ================================================= */}
                      {/* TAGS */}
                      {/* ================================================= */}

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags?.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            whileHover={{
                              y: -4,
                              scale: 1.05,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                            }}
                            className="
                              rounded-lg
                              border
                              border-violet-500/20
                              bg-gradient-to-br
                              from-violet-500/[0.08]
                              to-blue-500/[0.05]
                              px-3
                              py-1.5
                              font-mono
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-wider
                              text-violet-300
                              transition-all
                              duration-300
                              hover:border-violet-400/50
                              hover:from-violet-500/20
                              hover:to-blue-500/10
                              hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)]
                            "
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* BOTTOM ACTIONS */}
                    {/* ================================================= */}

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                      {/* ================================================= */}
                      {/* CASE STUDY */}
                      {/* ================================================= */}

                      <Link
                        href={`/projects/${project.id}`}
                        className="
                          group/button
                          relative
                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-2
                          overflow-hidden
                          rounded-xl
                          bg-gradient-to-br
                          from-violet-500
                          to-blue-500
                          px-5
                          py-3.5
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
                          hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)]
                          active:scale-95
                        "
                      >

                        {/* Shine */}

                        <span
                          className="
                            absolute
                            inset-y-0
                            -left-20
                            w-12
                            rotate-12
                            bg-white/20
                            blur-md
                            transition-all
                            duration-700
                            group-hover/button:left-[120%]
                          "
                        />

                        <span className="relative z-10">
                          View Case Study
                        </span>

                        <svg
                          className="
                            relative
                            z-10
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                          "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14m-6-6 6 6-6 6"
                          />
                        </svg>
                      </Link>

                      {/* ================================================= */}
                      {/* LIVE PREVIEW */}
                      {/* ================================================= */}

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-white/[0.025]
                          px-5
                          py-3.5
                          text-xs
                          font-black
                          uppercase
                          tracking-widest
                          text-slate-400
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-violet-500/40
                          hover:bg-gradient-to-br
                          hover:from-violet-500/10
                          hover:to-blue-500/10
                          hover:text-violet-300
                          hover:shadow-[0_12px_30px_rgba(99,102,241,0.12)]
                          active:scale-95
                        "
                      >
                        Live Preview

                        <svg
                          className="
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* ================================================= */}
                    {/* BOTTOM ACCENT */}
                    {/* ================================================= */}

                    <div
                      className="
                        mt-8
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-violet-500/40
                        via-blue-500/20
                        to-transparent
                        transition-all
                        duration-500
                        group-hover:from-violet-500/80
                        group-hover:via-blue-500/50
                      "
                    />
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            /* ================================================= */
            /* EMPTY STATE */
            /* ================================================= */

            <div className="rounded-3xl border border-white/[0.07] bg-[#07111e] py-20 text-center">
              <p className="font-mono text-sm text-slate-500">
                No projects found in database.
              </p>
            </div>
          )}
        </div>

        {/* ================================================= */}
        {/* BOTTOM LABEL */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-white/[0.07]" />

          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-transparent">
            Built with passion & code
          </span>

          <span className="h-px w-12 bg-white/[0.07]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;