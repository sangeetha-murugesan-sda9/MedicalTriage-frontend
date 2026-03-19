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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Medical triage app

This frontend calls the Spring Boot backend using `NEXT_PUBLIC_API_BASE_URL`.

Environment:
- `NEXT_PUBLIC_API_BASE_URL` (example): `http://localhost:8080`

Endpoints:
- `POST /assessment` (triage recommendation + available slots)
- `POST /booking` (booking confirmation)


## Frontend Technical Stack :

Next.js ,Tailwind.css,Typescript.

**Next.js**

Chosen for its built-in routing, server-side rendering, and great developer experience.
Makes it easy to scale and structure the app cleanly.

**TypeScript**

Adds type safety, which helps prevent bugs and improves maintainability.
Makes the codebase easier to understand and refactor over time.

**Tailwind CSS**

Speeds up UI development with utility classes.
Keeps styling consistent without writing a lot of custom CSS.

**Running the Frontend**
Install dependencies
## Bash: 
npm install 

npx create-next-app@latest frontend --typescript --use-npm --eslint --src-dir --app --import-alias "@/*"

**Run development server**
npm run dev

**Build for production**
npm run build
npm start

The app will usually run on:
**http://localhost:3000**


