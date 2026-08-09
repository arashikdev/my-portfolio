"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050711] text-slate-200">
      <main className="relative flex min-h-[calc(100vh-80px)] flex-grow items-center justify-center overflow-hidden px-6 py-24">
        {/* ================= AMBIENT GLOW ================= */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="pointer-events-none absolute left-[30%] top-[25%] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[10%] right-[20%] h-72 w-72 rounded-full bg-violet-500/5 blur-[120px]" />

        {/* ================= FLOATING PARTICLES ================= */}

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="absolute hidden rounded-full bg-violet-400/50 blur-[1px] md:block"
            style={{
              width: `${(i % 3) + 3}px`,
              height: `${(i % 3) + 3}px`,
              top: `${15 + i * 14}%`,
              left: `${10 + i * 17}%`,
            }}
          />
        ))}

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 w-full max-w-4xl text-center">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/20
              bg-gradient-to-br
              from-violet-500/10
              to-blue-500/10
              px-4
              py-2
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-violet-300
              backdrop-blur-xl
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />

            404 — Page Not Found
          </motion.div>

          {/* ================= BIG 404 ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >
            <h1
              className="
                select-none
                bg-gradient-to-br
                from-violet-500/30
                via-blue-500/20
                to-transparent
                bg-clip-text
                text-[10rem]
                font-black
                leading-none
                tracking-[-0.08em]
                text-transparent
                sm:text-[15rem]
                md:text-[20rem]
              "
            >
              404
            </h1>

            {/* ================= TEXT ================= */}

            <div className="-mt-12 sm:-mt-20 md:-mt-28">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                Lost in{" "}
                <span
                  className="
                    bg-gradient-to-br
                    from-violet-500
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Cyberspace?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                The page you are looking for doesn't exist or may have been
                moved to another location in the digital universe.
              </p>
            </div>
          </motion.div>

          {/* ================= ACTION BUTTONS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* Home Button */}

            <Link
              href="/"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-br
                from-violet-500
                to-blue-500
                px-8
                py-4
                text-xs
                font-black
                uppercase
                tracking-widest
                text-white
                shadow-[0_10px_40px_rgba(139,92,246,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:from-violet-400
                hover:to-blue-400
                hover:shadow-[0_15px_50px_rgba(59,130,246,0.25)]
                active:scale-95
                sm:w-auto
              "
            >
              {/* Home Icon */}

              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"
                />
              </svg>

              Return Home
            </Link>

            {/* Projects Button */}

            <Link
              href="/#projects"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-8
                py-4
                text-xs
                font-black
                uppercase
                tracking-widest
                text-slate-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-400/30
                hover:bg-gradient-to-br
                hover:from-violet-500/10
                hover:to-blue-500/10
                hover:text-violet-300
                sm:w-auto
              "
            >
              View Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* ================= BOTTOM LABEL ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500/30" />

            <span className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-slate-700">
              Nothing to see here
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/30" />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}