"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/arashik65",
    },
    {
      name: "LinkedIn",
      href: "",
    },
    {
      name: "Facebook",
      href: "",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#030712] text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Purple Glow */}
        <div className="absolute left-[10%] top-[-120px] h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[120px]" />

        {/* Blue Glow */}
        <div className="absolute right-[5%] top-[-100px] h-[280px] w-[280px] rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= TOP FOOTER ================= */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          {/* ================= BRAND ================= */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-4">
              {/* Logo */}
              <motion.div
                whileHover={{ rotate: -5, scale: 1.05 }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-purple-500/20
                  bg-gradient-to-br
                  from-purple-500/10
                  to-blue-500/10
                  text-sm
                  font-black
                  text-purple-400
                  shadow-[0_0_30px_rgba(139,92,246,0.08)]
                  transition-all
                  duration-300
                  group-hover:border-purple-500/40
                  group-hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]
                "
              >
                &lt;/&gt;
              </motion.div>

              {/* Name */}
              <div>
                <p
                  className="
                    text-xl
                    font-black
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-purple-300
                  "
                >
                  Ashikur{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Rahman
                  </span>
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-slate-600
                  "
                >
                  Junior Web Developer
                </p>
              </div>
            </Link>

            {/* Short line */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-purple-500/50 to-blue-500/20" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Built with passion & code
              </span>
            </div>
          </div>

          {/* ================= SOCIALS ================= */}
          <div className="md:flex md:justify-end">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 backdrop-blur-xl">
              <p className="mb-3 px-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                Connect with me
              </p>

              <nav className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <motion.div
                    key={social.name}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                  >
                    <Link
                      href={social.href || "#"}
                      target={social.href ? "_blank" : undefined}
                      rel={
                        social.href
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        px-4
                        py-2.5
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-slate-500
                        transition-all
                        duration-300
                        hover:border-purple-500/30
                        hover:bg-purple-500/[0.06]
                        hover:text-purple-300
                      "
                    >
                      {social.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          {/* Copyright */}
          <p
            className="
              text-center
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-slate-600
              md:text-left
            "
          >
            © 2026 Ashikur Rahman
            <span className="mx-2 text-purple-400/40">•</span>
            All rights reserved.
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 rounded-full border border-purple-500/10 bg-purple-500/[0.03] px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Junior Web Developer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;