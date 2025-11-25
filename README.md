# Modern Portfolio Website

A stunning, fully responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Hero Section** - Eye-catching hero with animated background elements
📊 **About Section** - Skills visualization with animated progress bars
🎨 **Interactive Projects** - Showcase your work with beautiful project cards
📄 **CV/Resume Download** - Dedicated section for resume downloads
📝 **Blog/Articles** - Share your thoughts and tutorials
💬 **Testimonials** - Display client feedback and reviews
📧 **Contact Form** - Functional contact form with direct client connection
🎯 **Professional Footer** - Complete with social links and newsletter signup
📱 **Fully Responsive** - Works perfectly on all devices
🌙 **Dark Mode Support** - Built-in dark mode styling
⚡ **Smooth Animations** - Powered by Framer Motion
🎨 **Tailwind CSS** - Modern utility-first styling

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Email:** EmailJS

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Personal Information
Update the following in the components:
- `src/components/Hero.tsx` - Your name and title
- `src/components/About.tsx` - Your bio and skills
- `src/components/Footer.tsx` - Copyright and brand name

### 2. Projects
Edit `src/components/Projects.tsx`:
- Update the `projects` array with your actual projects
- Add project images, descriptions, and links
- Modify tags to match your tech stack

### 3. Blog Articles
Edit `src/components/Blog.tsx`:
- Update the `articles` array with your blog posts
- Link to your actual blog or articles

### 4. Testimonials
Edit `src/components/Testimonials.tsx`:
- Add real client testimonials
- Update names, roles, and feedback

### 5. Contact Information
Edit `src/components/Contact.tsx`:
- Update email, phone, and social links
- Configure form submission (integrate with EmailJS or your backend)

### 6. CV/Resume Files
- Add your CV files to the `public` folder:
  - `public/cv.pdf`
  - `public/resume.docx`

### 7. Colors & Styling
Tailwind CSS makes it easy to customize:
- Primary color: Change `blue-600` to your preferred color
- Gradients: Modify gradient classes throughout components
- Spacing: Adjust padding and margins as needed

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navbar.tsx       # Navigation bar
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Projects.tsx     # Projects showcase
│       ├── CV.tsx           # CV download section
│       ├── Blog.tsx         # Blog/Articles
│       ├── Testimonials.tsx # Client testimonials
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer
├── public/                  # Static files
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to:
- Netlify
- AWS Amplify
- GitHub Pages
- Any static hosting service

## License

MIT License - feel free to use this for your own portfolio!

## Support

If you have any questions or need help customizing, feel free to reach out!
