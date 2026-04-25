import type { ReactNode } from "react";

// Shared structure for code examples shown in modal or static code cards.
export type CodeExample = {
  title: string;
  description: string;
  code: string;
};

// Allowed transition modes for the page transitions demo.
export type TransitionType = "fade" | "slide" | "scale";

// Shared props for components that render a preview page number.
export type PagePreviewProps = {
  page: number;
};

// Shared props for cards that render custom child content.
export type ChildrenProps = {
  children: ReactNode;
};

// Shared information-card content shape.
export type InfoItem = {
  title: string;
  text?: string;
  description?: string;
};

