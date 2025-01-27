# THE DUNK WEB

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Web Pages](#web-pages)
- [Code Structure](#code-structure)
- [Power Up Instructions (developers)](#power-up-instructions-developers)
- [For the user](#for-the-user)
- [Website Preview](#website-preview)

## Introduction

This is the frontend of The Dunk Web, a dark-themed platform designed to intrigue and engage users. Built with Next.js and styled using Tailwind CSS, the frontend delivers a responsive and immersive user experience. It connects seamlessly to the backend for dynamic content delivery and authentication The backend build in nodejs is responsible for handling API requests, database interactions, and authentication.

## Features

- Complete authentication flow (sign-up, login, password recovery)
- Profile page for the users to manage their accounts
- Article page showcasing curated content
- Services page highlighting unique offerings
- Products page for exploring and purchasing artifacts
- Order page for managing purchases
- Dynamic UI with animations and transitions
- Red Room section (under development)
- Fully responsive for desktop and mobile

## Web Pages

1. Articles Page

   - Explore an archive of thought-provoking articles. Users can read, like, and share their favorite content.

2. Services Page

   - Discover unique offerings tailored to your needs. Each service is detailed for maximum clarity and engagement its between you and the service owner now.

3. Products Page

   - A curated marketplace of mysterious artifacts. Users can browse, view details, and purchase directly we made a special credits for you.

4. Order Page

   - A streamlined order management system. Users can view their purchase history, track ongoing orders, and manage payments.

5. Red Room
   - (Coming Soon) This exclusive section will offer hidden and thrilling experiences.

## Code Structure

### frontend

```sh
Frontend/
	├── public/
	└── src/
		├── app/
		├── assets/
		├── components/
		├── constants/
		├── hooks/
		├── lib/
		├── middleware/
		├── providers/
		├── types/
		├── utils/
		└── middleware.ts
```

## Power Up Instructions (developers)

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the frontend directory and install dependencies

   ```sh
   cd Frontend
   yarn
   ```

3. Set Up Environment Variables

   Create a `.env.local` file in the root directory with the required environment variables (API URL, authentication keys, etc.).

4. Start the frontend development server:

   ```sh
   yarn dev
   ```

5. Navigate to the backend directory and install dependencies:

   ```sh
   cd ../Backend
   npm install
   ```

6. Start the backend development server:

   ```sh
   npm run dev
   ```

How to Run the code

- Ensure the backend server is running on the designated port.
- Start the frontend using `yarn dev`.
- Open the application in your browser and explore the pages.
- Enjoy developing and maintaining the frontend of The Dunk Web!

## For the user

Or you just can vist the website [here](https://the-dunk-web.vercel.app/)

## Website Preview

![the dunk web](https://res.cloudinary.com/dudzfxx5i/image/upload/v1737928868/the-dunk-web_biebaj.png)
