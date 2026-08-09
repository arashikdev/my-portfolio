
 

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const [showCvModal, setShowCvModal] = useState(false);

  // CV Links
  const cvViewLink =
    "https://drive.google.com/file/d/1ND7eRXVOv0TngezGneN9ofd0AknNP4Mm/view?usp=sharing";

  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=1ND7eRXVOv0TngezGneN9ofd0AknNP4Mm";

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/arashik65",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.19 7.69 10.68.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.28-5.14 5.56.4.34.76 1 .76 2.02v3c0 .3.2.65.78.54a11.26 11.26 0 0 0 7.68-10.68C23.25 5.48 18.27.5 12 .5Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:mdashikur6398@gmail.com",
      icon: (
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
            d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="m4 7 8 6 8-6"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".hero-glow", {
        scale: 1.12,
        opacity: 0.7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-dot", {
        y: -15,
        x: 7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030712]
        text-white
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.22]
            bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            -left-60
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/[0.08]
            blur-[140px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute
            -right-60
            bottom-0
            h-[550px]
            w-[550px]
            rounded-full
            bg-blue-600/[0.08]
            blur-[140px]
          "
        />

        {/* Small Dot */}
        <div
          className="
            floating-dot
            absolute
            right-[35%]
            top-[25%]
            h-1.5
            w-1.5
            rounded-full
            bg-violet-400
            shadow-[0_0_15px_rgba(139,92,246,0.8)]
          "
        />
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 md:px-8 md:pt-32">

        <div
          className="
            grid
            min-h-[calc(100vh-210px)]
            items-center
            gap-14
            lg:grid-cols-[1fr_0.85fr]
            lg:gap-20
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="order-2 max-w-3xl lg:order-1">

            {/* Available */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                hero-reveal
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-violet-400/20
                bg-violet-400/[0.05]
                px-4
                py-2
                text-xs
                font-semibold
                tracking-wide
                text-slate-300
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_12px_rgba(139,92,246,0.9)]
                "
              />

              Available for opportunities
            </motion.div>


            {/* Role */}
            <div
              className="
                hero-reveal
                mt-6
                flex
                items-center
                gap-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-violet-400
              "
            >
              <span>Junior Web Developer</span>

              <span className="text-slate-700">•</span>

              <span className="text-slate-500">
                Bangladesh
              </span>
            </div>


            {/* Heading */}
            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.055em]
                sm:text-6xl
                md:text-7xl
                lg:text-[82px]
              "
            >
              <div className="overflow-hidden">
                <div className="hero-reveal">
                  Hi, I&apos;m
                </div>
              </div>

              <div className="overflow-hidden">
                <div
                  className="
                    hero-reveal
                    mt-3
                    bg-gradient-to-r
                    from-violet-400
                    via-blue-400
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  Ashikur Rahman.
                </div>
              </div>
            </h1>


            {/* Description */}
            <p
              className="
                hero-reveal
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-slate-400
                md:text-lg
              "
            >
              I&apos;m a{" "}
              <span className="font-bold text-slate-200">
                Junior Web Developer
              </span>{" "}
              and CSE student focused on building clean, responsive, and
              modern web applications. I enjoy turning ideas into smooth
              digital experiences using{" "}
              <span className="font-semibold text-violet-400">
                React, Next.js
              </span>{" "}
              and modern web technologies.
            </p>


            {/* Technologies */}
            <div className="hero-reveal mt-7">

              <p
                className="
                  mb-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-600
                "
              >
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "Tailwind CSS",
                  "MongoDB",
                  "MERN",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      tracking-wide
                      text-slate-400
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-violet-400/30
                      hover:bg-violet-400/[0.05]
                      hover:text-violet-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>


            {/* Buttons */}
            <div
              className="
                hero-reveal
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >

              {/* View Work */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-500
                  to-blue-500
                  px-7
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  shadow-[0_10px_35px_rgba(99,102,241,0.2)]
                  transition-shadow
                  hover:shadow-[0_15px_45px_rgba(99,102,241,0.35)]
                "
              >
                <span className="relative z-10">
                  View My Work
                </span>

                <span
                  className="
                    relative
                    z-10
                    text-lg
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/20
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />
              </motion.a>


              {/* CV */}
              <motion.button
                type="button"
                onClick={() => setShowCvModal(true)}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/[0.1]
                  bg-white/[0.03]
                  px-7
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  transition-all
                  hover:border-violet-400/30
                  hover:bg-violet-400/[0.06]
                "
              >
                <span>
                  Download CV
                </span>

                <span className="text-violet-400">
                  ↓
                </span>
              </motion.button>

            </div>


            {/* Social */}
            <div
              className="
                hero-reveal
                mt-8
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  mr-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-600
                "
              >
                Connect
              </span>

              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <a
                    href={social.href}
                    target={
                      social.name === "Email"
                        ? "_self"
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-slate-500
                      transition-all
                      hover:border-violet-400/30
                      hover:bg-violet-400/[0.06]
                      hover:text-violet-300
                    "
                  >
                    {social.icon}
                  </a>
                </motion.div>
              ))}

            </div>

          </div>


          {/* =====================================================
              RIGHT RECTANGLE IMAGE
          ===================================================== */}

          <div
            className="
              order-1
              relative
              flex
              min-h-[500px]
              items-center
              justify-center
              lg:order-2
              lg:justify-end
            "
          >

            {/* Main Glow */}
            <div
              className="
                hero-glow
                absolute
                right-0
                top-1/2
                h-[400px]
                w-[400px]
                -translate-y-1/2
                rounded-full
                bg-violet-500/[0.09]
                blur-[120px]
              "
            />

            {/* Blue Glow */}
            <div
              className="
                absolute
                bottom-0
                right-5
                h-[230px]
                w-[230px]
                rounded-full
                bg-blue-500/[0.08]
                blur-[90px]
              "
            />


            {/* IMAGE AREA */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="
                relative
                z-10
                w-full
                max-w-[430px]
              "
            >

              {/* Small Top Label */}
              <div
                className="
                  absolute
                  -top-5
                  left-6
                  z-40
                  rounded-lg
                  border
                  border-violet-400/20
                  bg-[#07101f]
                  px-3
                  py-1.5
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-violet-300
                "
              >
                Junior Web Developer
              </div>


              {/* Rectangle Card */}
              <div
                className="
                  relative
                  h-[500px]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.1]
                  bg-gradient-to-br
                  from-violet-500/[0.08]
                  via-[#07101f]
                  to-blue-500/[0.08]
                  shadow-[0_35px_90px_rgba(0,0,0,0.55)]
                "
              >

                {/* Inner Border */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-3
                    z-30
                    rounded-xl
                    border
                    border-white/[0.07]
                  "
                />

                {/* Image */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-end
                    justify-center
                  "
                >
                  <Image
                    src="/images/ashik.png"
                    alt="Jahid Hasan - Junior Web Developer"
                    width={566}
                    height={600}
                    priority
                    className="
                      relative
                      z-10
                      h-full
                      w-full
                      object-contain
                      object-bottom
                      drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]
                      transition-transform
                      duration-700
                      hover:scale-[1.02]
                    "
                  />
                </div>


                {/* Bottom Gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-20
                    h-36
                    bg-gradient-to-t
                    from-[#07101f]
                    via-[#07101f]/45
                    to-transparent
                  "
                />


                {/* Bottom Text */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    z-40
                  "
                >
                  <p className="text-sm font-black text-white">
                    Building the Web
                  </p>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-slate-500
                    "
                  >
                    ONE PROJECT AT A TIME
                  </p>
                </div>

              </div>


              {/* Available Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                }}
                className="
                  absolute
                  -right-3
                  top-12
                  z-40
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-400/20
                  bg-[#07101f]/95
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                "
              >

                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-blue-400
                    shadow-[0_0_12px_rgba(96,165,250,0.9)]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-black
                    tracking-[0.15em]
                    text-slate-300
                  "
                >
                  AVAILABLE
                </span>

              </motion.div>

            </motion.div>

          </div>

        </div>


        {/* ================= STATS ================= */}

       

      </div>


      {/* ================= CV MODAL ================= */}

      <AnimatePresence>
        {showCvModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/70
              p-4
              backdrop-blur-md
            "
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 20,
              }}
              transition={{
                type: "spring",
                duration: 0.3,
              }}
              className="
                relative
                w-full
                max-w-sm
                rounded-2xl
                border
                border-violet-400/20
                bg-[#07101f]
                p-6
                shadow-[0_25px_80px_rgba(0,0,0,0.6)]
              "
            >

              {/* Close */}
              <button
                type="button"
                onClick={() => setShowCvModal(false)}
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.08]
                  text-slate-400
                  transition-all
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                ✕
              </button>


              {/* Header */}
              <div className="mb-6 text-center">

                <h3
                  className="
                    bg-gradient-to-r
                    from-violet-400
                    to-blue-400
                    bg-clip-text
                    text-lg
                    font-extrabold
                    text-transparent
                  "
                >
                  Curriculum Vitae
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Choose how you want to access the file
                </p>

              </div>


              {/* Actions */}
              <div className="flex flex-col gap-3">

                {/* View */}
                <a
                  href={cvViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCvModal(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.04]
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    transition-all
                    hover:border-violet-400/30
                    hover:bg-violet-400/[0.06]
                  "
                >
                  <svg
                    className="h-4 w-4 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>

                  View CV Online
                </a>


                {/* Download */}
                <a
                  href={cvDownloadLink}
                  onClick={() => setShowCvModal(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-500
                    to-blue-500
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    shadow-lg
                    shadow-indigo-500/10
                    transition-all
                    hover:from-violet-400
                    hover:to-blue-400
                  "
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>

                  Direct Download
                </a>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;