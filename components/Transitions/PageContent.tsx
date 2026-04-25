"use client";

import Image from "next/image";
import type { PagePreviewProps } from "@/Types/types";

// Shared image preview rendered inside all transition examples.
export default function PageContent({ page }: PagePreviewProps) {
  const pageImages = [
    "/images/Page-1.jpg",
    "/images/Page-2.jpg",
    "/images/Page-3.jpg",
  ];

  return (
    <div className="w-full max-w-[92vw] sm:max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-white/90 bg-black/30 shadow-2xl">
        <div className="px-0 py-4 sm:py-0">
          <div className="relative h-45 w-full sm:h-auto">
            <Image
              src={pageImages[page - 1]}
              alt={`Preview of page ${page}`}
              width={1600}
              height={1200}
              className="h-full w-full object-cover object-top sm:h-auto"
              priority={page === 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

