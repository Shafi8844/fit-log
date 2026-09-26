This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
# FitLog

FitLog is a responsive workout library and daily training planner. Browse lifts, review their equipment and instructions, then add up to five workouts to today's plan or save them for later.

## Technologies

- Next.js App Router and React
- TypeScript
- Tailwind CSS 4 and DaisyUI
- Workout data from the FitLog API
- Browser localStorage for plan persistence

## Features

- Responsive workout library with muscle-group tags and workout statistics
- Workout detail pages with specifications and numbered instructions
- Today's Plan and Saved lists with live navigation counters
- Five-workout daily cap, duplicate prevention, and Mark as Done actions
- Duration, calories, and rating sorting on the plan page
- Persistent plans, action notifications, loading states, and a custom 404 page

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` and `npm run build` before deployment.
