<div align="center">

   <h1 align="center">Welcome to Velora! 🌟</h1>

   <br />
    <img src="https://i.ibb.co/SXyKWg0/Velora-banner.png" alt="Project Banner">
    <br/><br/>

   <div>
      <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextjs" />
      <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React" />
      <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=FF4A4A" alt="sanity" />
      <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
      <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=4F46E5" alt="clerk" />
      <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC" alt="tailwind" />
      <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=007ACC" alt="typescript" />
      <img src="https://img.shields.io/badge/-zustand-black?style=for-the-badge&logoColor=white&logo=zustand&color=EF5B5B" alt="zustand" />
      <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logoColor=white&logo=framermotion&color=E91E63" alt="framermotion" />
   </div>

   <h3 align="center">"Where every sale reveals its aura!" 💫</h3>

**Velora** is a full-stack e-commerce platform built with **Next.js 15**, integrating **Sanity**, **Stripe**, and **Clerk**. It includes a dynamic real-time site builder that allows users to edit content directly on the page, with live, real-time previews and updates without page refreshes.

</div>

## Table of Contents

- [⚙️ Tech Stack](#tech-stack)
- [🔋 Features](#features)
- [🚀 Getting Started](#getting-started)
- [📜 Environment Variables](#environment-variables)
- [📋 Snippets](#snippets)
- [🔗 Links](#links)

## ⚙️ Tech Stack

Velora uses a modern tech stack to deliver a smooth and scalable experience:

- **Next.js 15** for powerful server-rendered applications.
- **React 19** for frontend components.
- **Sanity** as a headless CMS for real-time content management.
- **Stripe** for secure payment handling.
- **Clerk** for seamless user authentication, including support for passkeys.
- **Tailwind CSS** for rapid UI development.
- **TypeScript** for type safety.
- **Zustand** for efficient state management.
- **Framer Motion** for smooth animations.

## 🔋 Features

Velora comes with a suite of features to optimize the e-commerce experience:

- Real-time, code-free content management with live previews.
- Secure payment processing via Stripe integration.
- Dynamic user authentication using Clerk, supporting passkeys.
- Instant content updates for clients and visitors without page refresh.
- Seamless coupon code management for discounts.
- Responsive design with Tailwind CSS for both desktop and mobile.
- Interactive animations using Framer Motion.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Rahim21/Velora.git
cd Velora
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Once the server is running, open your browser and visit the following URLs:

- To view the application, go to: `http://localhost:3000`
- To access Sanity Studio for content management, visit: `http://localhost:3000/studio`

## 📜 Environment Variables

To create a new `.env` file in the root of your project, start by making a copy of the existing `.env.example` file. You can do this by running the following command:

```bash
cp .env.example .env
```

Next, open the `.env` file and replace the placeholder values with your actual keys:

```bash
# Sanity configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Sanity Studio : This is NEEDED for sanity to see the required variables in the studio deployment
SANITY_STUDIO_PROJECT_ID=your_sanity_project_id
SANITY_STUDIO_DATASET=production

# Clerk configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stripe configuration
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Ensure you replace `your_x_key` with your actual credentials.
You can obtain these credentials by signing up on:

- [Sanity](https://sanity.io/)
- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/)

## 📋 Snippets

Available soon 🛠️

## 🔗 Links

- [Live Demo](#) Available soon 🛠️
- [Documentation](#) Available soon 🛠️

---

## 👇 Find me on GitHub!

<div align="center">
  <img src="https://i.ibb.co/CvgBS4n/Rahim21-github-banner.png" alt="Rahim21 GitHub Banner" width="100%" />
</div>
