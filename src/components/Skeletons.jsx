"use client";

import React from "react";

/* =========================
   PROJECT CARD SKELETON
========================= */

export const CardSkeleton = () => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07111f]/80 shadow-xl backdrop-blur-xl">
    {/* Gradient glow */}
    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
    <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

    {/* Image */}
    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-500/[0.08] via-blue-500/[0.05] to-transparent">
      <div className="absolute inset-0 animate-pulse bg-white/[0.04]" />

      {/* Image corner badge */}
      <div className="absolute right-4 top-4 h-7 w-20 animate-pulse rounded-full bg-white/[0.07]" />
    </div>

    {/* Content */}
    <div className="relative z-10 p-6">
      {/* Title */}
      <div className="h-6 w-3/4 animate-pulse rounded-lg bg-white/[0.09]" />

      {/* Description */}
      <div className="mt-5 space-y-2.5">
        <div className="h-3.5 w-full animate-pulse rounded bg-white/[0.05]" />
        <div className="h-3.5 w-[90%] animate-pulse rounded bg-white/[0.05]" />
        <div className="h-3.5 w-[65%] animate-pulse rounded bg-white/[0.05]" />
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        <div className="h-6 w-16 animate-pulse rounded-full bg-purple-400/[0.08]" />
        <div className="h-6 w-20 animate-pulse rounded-full bg-blue-400/[0.08]" />
        <div className="h-6 w-16 animate-pulse rounded-full bg-white/[0.06]" />
      </div>

      {/* Bottom */}
      <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
        <div className="h-3 w-20 animate-pulse rounded bg-white/[0.06]" />

        <div className="h-9 w-24 animate-pulse rounded-lg bg-gradient-to-r from-purple-500/[0.12] to-blue-500/[0.12]" />
      </div>
    </div>
  </div>
);


/* =========================
   PROJECT GRID SKELETON
========================= */

export const ProjectGridSkeleton = () => (
  <section className="relative overflow-hidden bg-[#050914] py-20">
    {/* Background glow */}
    <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-purple-600/[0.07] blur-[120px]" />

    <div className="pointer-events-none absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-blue-600/[0.07] blur-[120px]" />

    <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

      {/* Section heading skeleton */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-10 animate-pulse bg-purple-400/40" />

          <div className="h-3 w-24 animate-pulse rounded bg-purple-400/[0.12]" />
        </div>

        <div className="h-10 w-72 animate-pulse rounded-xl bg-white/[0.07] md:h-12 md:w-96" />

        <div className="mt-4 h-4 w-full max-w-xl animate-pulse rounded bg-white/[0.04]" />
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);


/* =========================
   PROJECT DETAIL SKELETON
========================= */

export const DetailSkeleton = () => (
  <section className="relative min-h-screen overflow-hidden bg-[#050914]">
    {/* Background glow */}
    <div className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-purple-600/[0.08] blur-[140px]" />

    <div className="pointer-events-none absolute right-10 top-1/3 h-80 w-80 rounded-full bg-blue-600/[0.07] blur-[120px]" />

    {/* Hero image */}
    <div className="relative h-[55vh] min-h-[380px] overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-500/[0.08] via-blue-500/[0.05] to-transparent" />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent" />

      {/* Center skeleton */}
      <div className="absolute bottom-12 left-1/2 w-full max-w-4xl -translate-x-1/2 px-6">
        <div className="h-3 w-28 animate-pulse rounded bg-purple-400/[0.12]" />

        <div className="mt-5 h-10 w-3/4 animate-pulse rounded-xl bg-white/[0.09] md:h-14" />

        <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-white/[0.05]" />
      </div>
    </div>

    {/* Main content */}
    <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr] lg:gap-20">

        {/* Left */}
        <div>
          <div className="mb-10">
            <div className="h-8 w-56 animate-pulse rounded-lg bg-white/[0.08]" />

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-white/[0.05]" />
              <div className="h-4 w-[95%] animate-pulse rounded bg-white/[0.05]" />
              <div className="h-4 w-[90%] animate-pulse rounded bg-white/[0.05]" />
              <div className="h-4 w-[70%] animate-pulse rounded bg-white/[0.05]" />
            </div>
          </div>

          {/* Feature blocks */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-28 animate-pulse rounded-2xl border border-white/[0.06] bg-white/[0.025]" />
            <div className="h-28 animate-pulse rounded-2xl border border-white/[0.06] bg-white/[0.025]" />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-white/[0.07] bg-[#07111f]/80 p-6 backdrop-blur-xl">
            <div className="h-5 w-28 animate-pulse rounded bg-white/[0.08]" />

            <div className="mt-6 space-y-4">
              <div className="h-10 animate-pulse rounded-xl bg-white/[0.05]" />
              <div className="h-10 animate-pulse rounded-xl bg-white/[0.05]" />
              <div className="h-10 animate-pulse rounded-xl bg-white/[0.05]" />
            </div>
          </div>

          <div className="h-12 animate-pulse rounded-xl bg-gradient-to-r from-purple-500/[0.12] to-blue-500/[0.12]" />
        </div>

      </div>
    </div>
  </section>
);