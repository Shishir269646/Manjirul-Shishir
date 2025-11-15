# Manjirul Shishir's Personal Portfolio

This is a personal portfolio website for Manjirul Shishir, built with Next.js and TypeScript. It showcases his skills, projects, and experience in a modern and interactive way.

## Features

- **Interactive Hero Section:** A visually appealing hero section with a particle animation background.
- **About Me Section:** A detailed section about Manjirul, his skills, and his experience.
- **Skills Network:** An interactive visualization of his skills, built with HTML5 Canvas.
- **Timeline:** A timeline of his education and work experience.
- **Project Showcase:** A section to showcase his projects using glassmorphic project cards.
- **Responsive Design:** The website is fully responsive and works on all devices.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:**
  - [tsparticles](https://particles.js.org/) for particle animations.
  - [GSAP](https://greensock.com/gsap/) for other animations.
  - [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for the skills network.
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── AboutSection.tsx
│   ├── glassmorphic-project-card.tsx
│   ├── HeroSection.tsx
│   ├── SkillsNetwork.tsx
│   ├── Timeline.tsx
│   ├── animation
│   │   └── ParticlesBackground.tsx
│   └── ui
│       ├── badge.tsx
│       ├── Buton.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib
│   └── utils.ts
├── public
│   └── images
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```