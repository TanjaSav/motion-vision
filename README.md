# Motion Vision — Interactive Animation Showcase

A learning project focused on modern web animations using React, Next.js, Framer Motion, GSAP, and Lottie.

## Live Demo

https://motion-vision.vercel.app/

## GitHub Repository

https://github.com/TanjaSav/motion-vision

A fully interactive animation showcase demonstrating modern UI motion techniques in real scenarios.

---

## Features

- Hero animations
  - Staggered text reveal  
  - Smooth entrance transitions  

- Micro-interactions
  - Hover effects  
  - Like button with particle burst  
  - Toggle switch  
  - Cursor magnet  
  - Input focus animation  
  
- Lottie animations
  - JSON-based motion assets  

- Scroll animations
  - Parallax layers (GSAP + ScrollTrigger)  
  - Sticky layouts  
  - Timeline-based reveal  

- Page transitions
  - Fade  
  - Slide  
  - Scale   

- Accessibility
  - Supports prefers-reduced-motion

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Framer Motion
- GSAP (ScrollTrigger)
- Lottie-react
- Tailwind CSS

---

## Purpose

This project was built to:

- Practice animation techniques in real UI  
- Understand motion as part of UX  
- Learn when and where to use animation  
- Build a reusable animation system mindset  

---

## Motion Theory (Short Overview)

### Timing
Defines how long an animation lasts.  
Fast animations feel responsive, slow ones feel more expressive.

### Easing
Controls acceleration and deceleration.  
Natural motion avoids linear movement and uses curves like:
- ease-out → responsive feel  
- spring → dynamic and playful  

### Hierarchy
Motion should guide attention:
- Primary elements animate first  
- Secondary elements follow  

### Feedback
Every interaction should respond:
- Hover → visual confirmation  
- Click → state change  
- Input → focus indication  

### Continuity
Animations should feel connected:
- Transitions link screens  
- Motion preserves context  

---

## Lottie — When and Why

Lottie renders animations exported from tools like After Effects as JSON.

### Advantages:
- Lightweight compared to video  
- Resolution-independent (vector-based)  
- Easy to control (loop, play, speed)

### Best use cases:
- Icons and UI feedback  
- Loading states  
- Empty states  
- Onboarding visuals  

### Important:
- Keep JSON files small  
- Avoid overly complex scenes  
- Use only where it adds value over CSS/JS animation  

---

## Getting Started

```bash
npm install
npm run dev
