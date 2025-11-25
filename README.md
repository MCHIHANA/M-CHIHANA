# Modern Portfolio Website

A fully responsive and contemporary portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

* Modern hero section with animated background elements
* About section with skills visualization and animated progress bars
* Interactive project showcase with detailed cards
* Dedicated CV/Resume download section
* Blog/Articles section for publishing content
* Testimonials section for client feedback
* Functional contact form for direct communication
* Professional footer with social links and newsletter integration
* Fully responsive layout for all devices
* Built-in dark mode support
* Smooth animations powered by Framer Motion
* Tailwind CSS for efficient utility-first styling

## Tech Stack

* **Framework:** Next.js 16
* **UI Library:** React 19
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion
* **Icons:** Lucide React, React Icons
* **Email Integration:** EmailJS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to:

```
http://localhost:3000
```

## Customization Guide

### 1. Personal Information

Update your profile details in:

* `src/components/Hero.tsx` – Name, title, introduction
* `src/components/About.tsx` – Biography and skills
* `src/components/Footer.tsx` – Footer information

### 2. Projects

Modify the project list in `src/components/Projects.tsx`:

* Update the `projects` array with your real projects
* Add images, descriptions, external links, and related tags

### 3. Blog Articles

Modify `src/components/Blog.tsx`:

* Add entries to the `articles` array
* Link to full articles hosted locally or externally

### 4. Testimonials

Edit `src/components/Testimonials.tsx`:

* Add or replace client testimonials
* Update names, positions, and messages

### 5. Contact Information

Update `src/components/Contact.tsx`:

* Replace email, phone, and social media links
* Configure form submission using EmailJS or your backend

### 6. CV/Resume

Place your CV files inside the `public` folder:

* `public/cv.pdf`
* `public/resume.docx`

Update the download links in `src/components/CV.tsx`.

### 7. Colors and Styling

Customize the design using Tailwind CSS:

* Replace primary colors
* Modify gradients
* Adjust spacing, borders, and typography as needed

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Main page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navbar.tsx        # Navigation bar
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Projects.tsx      # Project showcase
│       ├── CV.tsx            # CV download section
│       ├── Blog.tsx          # Articles/blog
│       ├── Testimonials.tsx  # Client testimonials
│       ├── Contact.tsx       # Contact form
│       └── Footer.tsx        # Footer
├── public/                   # Static assets
└── package.json
```

## Production Build

```bash
npm run build
npm start
```

## Deployment

Deploy easily to Vercel using the button below:

[Vercel Deployment](https://vercel.com/new)

Other supported hosting providers:

* Netlify
* AWS Amplify
* GitHub Pages
* Any static hosting service

## License

Released under the MIT License. You are free to use, modify, and distribute this project.

## Support

For assistance or customization help, feel free to reach out.
