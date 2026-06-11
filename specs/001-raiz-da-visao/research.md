# Research: Raiz da Visão

## Technical Context Unknowns Resolved

- **Language/Version**: Next.js 15.5.9 (JavaScript/TypeScript ecosystem). Decided based on existing `package.json` in the project.
- **Primary Dependencies**: React 19, Framer Motion for subtle organic micro-animations, TailwindCSS for styling.
- **Storage**: N/A for this informative page.
- **Testing**: Not specified, manual visual testing for Constitution alignment will suffice.
- **Target Platform**: Web Browser.
- **Project Type**: Next.js Web Application Page.

## Technology Choices & Rationale

- **Decision**: Next.js Pages Router vs App Router.
  - **Rationale**: The project structure implies a Next.js setup. We will use the App Router (`app/` directory) as it is the standard for Next.js 15, assuming the existing `app` folder is used for routing.
- **Decision**: Framer Motion for Animations.
  - **Rationale**: Already in `package.json`. Perfect for "subtle micro-animations that feel organic" without being overly flashy.
- **Decision**: Static content mapping vs CMS.
  - **Rationale**: Given the text provided by the user, we will map the text statically into components to keep it simple and performant. No CMS required right now.

## Best Practices

- Ensure semantic HTML tags (`<section>`, `<article>`, `<h1>`, `<h2>`) are used for Accessibility (Principle IV: Acessibilidade e Clareza).
- Respect color palettes (earthy tones, serene blues) per the Constitution guidelines.
