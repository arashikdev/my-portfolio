



"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  const driveViewUrl =
    "";

  const driveDownloadUrl =
    "";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Gradient Border */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-violet-500/50 via-blue-500/40 to-cyan-400/50">

            {/* Glass Navbar */}
            <div
              className="
                relative
                rounded-2xl
                bg-[#050816]/90
                backdrop-blur-2xl
                border border-white/[0.06]
                shadow-[0_10px_50px_rgba(0,0,0,0.35)]
              "
            >
              <div className="h-[72px] px-4 md:px-6 flex items-center justify-between">

                {/* ================= LOGO ================= */}
                <Link
                  href="/"
                  className="group flex items-center gap-3 shrink-0"
                >
                  {/* Logo */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    className="
                      relative
                      w-10 h-10
                      rounded-xl
                      flex items-center justify-center
                      overflow-hidden

                      bg-gradient-to-br
                      from-violet-500
                      to-blue-500

                      shadow-[0_0_25px_rgba(139,92,246,0.35)]
                    "
                  >
                    <span className="relative z-10 text-white text-lg font-black">
                      &gt;_
                    </span>

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-br
                        from-white/20
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
                    />
                  </motion.div>

                  {/* Name */}
                  <div className="hidden sm:flex flex-col leading-none">
                    <span className="text-[16px] font-black text-white tracking-tight">
                      Md Ashikur{" "}
                      <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                        Rahman
                      </span>
                    </span>

                    <span className="mt-1.5 text-[8px] font-bold tracking-[0.25em] uppercase text-slate-500">
                      Frontend Developer
                    </span>
                  </div>
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <div className="hidden lg:flex items-center ml-auto mr-5">
                  <div
                    className="
                      flex items-center gap-1
                      rounded-xl
                      bg-white/[0.025]
                      border border-white/[0.05]
                      p-1
                    "
                  >
                    {navLinks.map((link) => (
                      <motion.div
                        key={link.name}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <Link
                          href={link.href}
                          className="
                            relative
                            block
                            px-4 py-2
                            rounded-lg

                            text-[12px]
                            font-bold
                            tracking-wide
                            text-slate-400

                            hover:text-white
                            transition-all
                            duration-300

                            group
                          "
                        >
                          {link.name}

                          {/* Gradient Underline */}
                          <span
                            className="
                              absolute
                              left-1/2
                              -translate-x-1/2
                              bottom-1

                              h-[2px]
                              w-0

                              rounded-full

                              bg-gradient-to-r
                              from-violet-400
                              to-blue-400

                              shadow-[0_0_10px_rgba(139,92,246,0.8)]

                              group-hover:w-5

                              transition-all
                              duration-300
                            "
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="flex items-center gap-3">

                  {/* Available Status */}
                  <div className="hidden xl:flex items-center gap-2 mr-1">
                    <span
                      className="
                        w-2 h-2
                        rounded-full
                        bg-gradient-to-r
                        from-violet-400
                        to-blue-400

                        shadow-[0_0_10px_rgba(96,165,250,0.8)]

                        animate-pulse
                      "
                    />

                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-500">
                      Available
                    </span>
                  </div>

                  {/* ================= CV BUTTON ================= */}
                  <motion.button
                    onClick={() => setIsCvOpen(true)}
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      relative
                      hidden sm:flex
                      items-center
                      gap-2

                      px-4 py-2.5
                      rounded-xl

                      overflow-hidden

                      bg-gradient-to-r
                      from-violet-600
                      to-blue-600

                      text-white
                      text-[11px]
                      font-black
                      tracking-[0.12em]

                      shadow-[0_0_25px_rgba(99,102,241,0.25)]

                      hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]

                      transition-all
                      duration-300
                    "
                  >
                    {/* Shine */}
                    <span
                      className="
                        absolute inset-0
                        -translate-x-full
                        group-hover:translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/25
                        to-transparent
                        transition-transform
                        duration-700
                      "
                    />

                    <span className="relative">
                      VIEW CV
                    </span>

                    <span className="relative text-sm">
                      ↗
                    </span>
                  </motion.button>

                  {/* ================= MOBILE MENU ================= */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                      lg:hidden

                      w-10 h-10
                      rounded-xl

                      border border-white/10
                      bg-white/[0.04]

                      text-white

                      flex items-center justify-center

                      hover:border-violet-400/40
                      hover:text-violet-300

                      transition-all
                    "
                    aria-label="Toggle menu"
                  >
                    <div className="space-y-1.5">
                      <span
                        className={`
                          block
                          w-5
                          h-[2px]
                          bg-current
                          transition-transform
                          ${
                            isOpen
                              ? "rotate-45 translate-y-[4px]"
                              : ""
                          }
                        `}
                      />

                      <span
                        className={`
                          block
                          w-5
                          h-[2px]
                          bg-current
                          transition-opacity
                          ${isOpen ? "opacity-0" : ""}
                        `}
                      />

                      <span
                        className={`
                          block
                          w-5
                          h-[2px]
                          bg-current
                          transition-transform
                          ${
                            isOpen
                              ? "-rotate-45 -translate-y-[4px]"
                              : ""
                          }
                        `}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              top-[100px]
              left-4
              right-4
              z-40

              lg:hidden

              rounded-2xl
              p-[1px]

              bg-gradient-to-r
              from-violet-500/50
              via-blue-500/40
              to-cyan-400/50
            "
          >
            <div
              className="
                rounded-2xl
                bg-[#050816]/95
                backdrop-blur-2xl
                border border-white/[0.05]
                shadow-2xl
                p-3
              "
            >
              <div className="flex flex-col gap-1">

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        flex items-center justify-between

                        px-4 py-3.5
                        rounded-xl

                        text-sm
                        font-bold
                        text-slate-400

                        hover:text-white
                        hover:bg-gradient-to-r
                        hover:from-violet-500/10
                        hover:to-blue-500/10

                        transition-all
                      "
                    >
                      <span>{link.name}</span>

                      <span
                        className="
                          text-transparent
                          bg-gradient-to-r
                          from-violet-400
                          to-blue-400
                          bg-clip-text
                        "
                      >
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CV */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsCvOpen(true);
                  }}
                  className="
                    mt-2
                    flex items-center justify-center
                    gap-2

                    rounded-xl
                    py-3

                    bg-gradient-to-r
                    from-violet-600
                    to-blue-600

                    text-white

                    text-sm
                    font-black

                    shadow-[0_0_25px_rgba(99,102,241,0.25)]

                    hover:from-violet-500
                    hover:to-blue-500

                    transition-all
                    w-full
                  "
                >
                  VIEW CV
                  <span>↗</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CV MODAL ================= */}

      <AnimatePresence>
        {isCvOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvOpen(false)}
              className="
                absolute inset-0
                bg-black/80
                backdrop-blur-md
              "
            />

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                type: "spring",
                duration: 0.4,
              }}
              className="
                relative

                w-full
                max-w-4xl
                h-[85vh]

                flex
                flex-col

                rounded-2xl

                border border-white/10

                bg-[#070b1a]

                shadow-[0_0_80px_rgba(79,70,229,0.20)]

                overflow-hidden
                z-10
              "
            >

              {/* Modal Header */}
              <div
                className="
                  flex items-center
                  justify-between

                  px-5 py-4

                  border-b border-white/10

                  bg-gradient-to-r
                  from-violet-500/[0.05]
                  to-blue-500/[0.05]
                "
              >
                <div className="flex items-center gap-2">

                  <span
                    className="
                      w-3 h-3
                      rounded-full

                      bg-gradient-to-r
                      from-violet-400
                      to-blue-400

                      animate-pulse

                      shadow-[0_0_12px_rgba(139,92,246,0.8)]
                    "
                  />

                  <h3 className="text-white text-sm md:text-base font-bold tracking-wide">
                    Curriculum Vitae Preview
                  </h3>
                </div>

                <div className="flex items-center gap-3">

                  {/* Download */}
                  <a
                    href={driveDownloadUrl}
                    download
                    className="
                      px-3.5 py-1.5
                      rounded-lg

                      border border-violet-400/30

                      bg-gradient-to-r
                      from-violet-500/10
                      to-blue-500/10

                      text-violet-300

                      text-xs
                      font-bold

                      hover:from-violet-500
                      hover:to-blue-500

                      hover:text-white

                      transition-all
                      duration-300
                    "
                  >
                    Download PDF 📥
                  </a>

                  {/* Close */}
                  <button
                    onClick={() => setIsCvOpen(false)}
                    className="
                      w-8 h-8
                      rounded-lg

                      bg-white/5
                      border border-white/10

                      text-slate-400

                      hover:text-white
                      hover:border-violet-400/30

                      transition-colors

                      flex items-center justify-center
                    "
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* CV */}
              <div className="flex-1 w-full bg-black/40 relative">
                <iframe
                  src={driveViewUrl}
                  className="w-full h-full border-none"
                  title="CV Preview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
