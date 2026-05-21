# Resume-2026 Context and Instructions

## Project Overview
This project is a dynamic, multi-profile interactive resume application built with React, Vite, and TypeScript. It uses vanilla CSS for styling.

## Architecture & Data Loading
- The application supports multiple role-specific resume profiles (e.g., `web-developer`, `supply-chain-analyst`, `loblaw-strategy-analyst`).
- Resume data is separated into JSON files (contacts, education, professional summary, skills, work experience).
- The JSON data resides in both `public/data/` and `src/data/`. When modifying profile data, ensure the correct profile folder is targeted.

## Conventions & Rules
- **TypeScript**: Strict typing is expected. Use functional React components.
- **Styling**: Standard CSS files are paired with their respective components (e.g., `Header.tsx` imports `Header.css`). Avoid adding Tailwind or other CSS frameworks unless requested.
- **Build Tool**: Vite (`vite.config.ts`).
- **Dependencies**: React, Vite, TypeScript.

## Common Tasks
- When updating resume content, modify the respective JSON files within the `data/` directories. **CRITICAL: Every time a change is made in `src/data`, copy it to the `public/data` folder to replicate the changes.**
- When creating new components, place them in `src/components/` with a matching `.css` file.
