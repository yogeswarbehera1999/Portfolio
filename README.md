# Full-Stack Developer Portfolio

A modern, beautiful, and fully functional portfolio website built with React, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

- **Modern Design**: Clean, professional, and visually impressive UI/UX
- **Smooth Animations**: Powered by Framer Motion with scroll-based animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Theme toggle with persistent preference
- **Working Contact Form**: Backend powered by Supabase Edge Functions
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Production Ready**: Clean code, proper structure, and ready for deployment

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

### Backend
- Supabase (Database & Edge Functions)
- PostgreSQL (via Supabase)

## Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Main navigation with mobile menu
│   │   └── Footer.tsx       # Footer with social links
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section with animated intro
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills with animated progress bars
│   │   ├── Projects.tsx     # Featured projects showcase
│   │   ├── Experience.tsx   # Timeline of experience & achievements
│   │   └── Contact.tsx      # Contact form
│   ├── context/             # React context providers
│   │   └── ThemeContext.tsx # Dark/light theme management
│   ├── hooks/               # Custom React hooks
│   │   └── useScrollAnimation.ts # Scroll-triggered animations
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── supabase/
│   └── functions/
│       └── submit-contact/  # Edge function for contact form
└── public/                  # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env`

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero Section** (`src/sections/Hero.tsx`):
- Yogeswar Behera (line 40)
- Your role/title (line 50)
- Your intro text (line 59)
- Social media links (lines 73-75)

**About Section** (`src/sections/About.tsx`):
- Your bio and background (lines 76-89)

**Contact Section** (`src/sections/Contact.tsx`):
- Email address (line 165)
- Phone number (line 166)
- Location (line 167)

**Footer** (`src/components/Footer.tsx`):
- Social media links (lines 36-39)
- Yogeswar Behera (line 50)

### 2. Skills

Edit `src/sections/Skills.tsx` to add/remove/modify your skills:
- Update the `skillCategories` array (lines 5-58)
- Adjust skill levels (0-100)

### 3. Projects

Edit `src/sections/Projects.tsx` to showcase your projects:
- Update the `projects` array (lines 6-86)
- Add project images (use Pexels URLs or your own)
- Update live demo and GitHub links

### 4. Experience

Edit `src/sections/Experience.tsx` to add your experience:
- Update the `experiences` array (lines 6-93)
- Add work experience, education, certifications, awards, etc.

### 5. Theme Colors

To change the color scheme, update Tailwind classes throughout:
- Primary gradient: `from-blue-600 to-cyan-500`
- You can replace with any Tailwind color (e.g., `from-green-600 to-emerald-500`)

### 6. Images

Replace project images and other visuals:
- Use high-quality images from [Pexels](https://www.pexels.com)
- Update image URLs in `src/sections/Projects.tsx`

## Database Structure

The contact form submissions are stored in Supabase with the following schema:

**Table: `contact_messages`**
- `id` (uuid): Unique identifier
- `name` (text): Sender's name
- `email` (text): Sender's email
- `message` (text): Message content
- `created_at` (timestamp): Submission time
- `read` (boolean): Message read status

### Viewing Contact Messages

To view messages, you can:
1. Access your Supabase dashboard
2. Navigate to the `contact_messages` table
3. View all submissions with timestamps

## Edge Functions

The contact form uses a Supabase Edge Function for server-side processing:

**Function: `submit-contact`**
- Validates form data
- Stores messages in the database
- Returns success/error responses
- Already deployed and configured

## Deployment

### Recommended Platforms
- **Vercel** (recommended for React/Vite)
- **Netlify**
- **Cloudflare Pages**

### Deployment Steps

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform

3. Environment variables are already configured for Supabase

## Performance Optimization

- Code splitting with React lazy loading
- Optimized images (use WebP format when possible)
- Minified CSS and JavaScript in production
- Tree-shaking for unused code removal

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

1. **Keep it Personal**: Replace placeholder text with your actual story
2. **Update Projects Regularly**: Showcase your latest and best work
3. **Professional Photos**: Use high-quality images that represent you
4. **Test on Mobile**: Ensure everything works smoothly on all devices
5. **Keep Skills Current**: Update your skills as you learn new technologies

## Troubleshooting

### Build Errors
If you encounter build errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Contact Form Issues
- Verify environment variables in `.env`
- Check Supabase dashboard for function logs
- Ensure database policies are correctly set

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, feel free to reach out through the contact form on the portfolio itself.

---

**Built By YOGESWAR BEHERA with ❤️ using React, TypeScript, and Supabase**

