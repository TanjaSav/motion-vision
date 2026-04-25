"use client";

import type { CodeExample } from "@/Types/types";

// Reusable static card for transition code snippets.
export default function CodeCard({
  title,
  description,
  code,
}: CodeExample) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6">
      {/* Card title */}
      <h3 className="text-lg font-medium text-white sm:text-xl">{title}</h3>

      {/* Decorative divider */}
      <div
        aria-hidden="true"
        className="mt-3 h-px bg-gradient-to-r from-cyan-300/70 to-blue-400/40 sm:mt-4"
      />

      {/* Card description */}
      <p className="mt-3 text-sm leading-6 text-white/80 sm:mt-4 sm:leading-7">
        {description}
      </p>

      {/* Code block */}
      <pre className="custom-scrollbar mt-5 overflow-x-auto rounded-2xl bg-black/30 p-4 text-xs leading-6 text-white/90 sm:mt-6 sm:text-sm sm:leading-7">
        <code>{code}</code>
      </pre>
    </article>
  );
}