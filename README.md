# Cerebrando - Neurophysiology Specialist Website

A modern, accessible single-page website for Dr. Ángela De Abreu, a Neurophysiology specialist, built with Next.js and featuring a scientific-inspired design.

## 🧠 About

Cerebrando is a platform where science and consciousness unite to help people sleep better, reduce stress, and enhance neuroplasticity. The website showcases Dr. Ángela De Abreu's expertise in Clinical Neurophysiology and her transformational programs.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: Framer Motion with accessibility considerations
- **Components**: shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Outfit (sans-serif) + Playfair Display (serif)
- **Package Manager**: pnpm
- **Analytics**: Vercel Analytics
- **SEO**: next-seo + JSON-LD structured data

## 🎨 Design System

### Color Palette
- **Primary Brand**: `#C7D6D9` (cool, natural blue-grey)
- **Accent**: `#BC782E` (warm amber)
- **Neutral Light**: `#F1D7DB` (soft blush)
- **Neutral Dark**: `#E0C5B4` (sandy beige)

### Typography
- **Headings**: Playfair Display (serif)
- **Body/UI**: Outfit (sans-serif)

### Features
- Dark/Light mode with system preference detection
- Fully responsive design
- WCAG AA accessibility compliance
- Smooth scroll navigation with active section highlighting
- Auto-hide/reveal navbar on scroll
- Reduced motion support

## 📦 Installation

\`\`\`bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
\`\`\`

## 🔧 Customization

### Updating Colors
Modify the CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --brand-primary: 199 214 217; /* Your primary color */
  --brand-accent: 188 120 46;   /* Your accent color */
  /* ... other colors */
}
\`\`\`

### Replacing Placeholder Images
Replace files in `/public/placeholders/` with your actual images:
- `doctor-portrait.jpg` - Professional photo of Dr. Ángela
- `neural-pattern.jpg` - Hero background pattern
- `brain-waves.jpg` - Section background
- `testimonial-*.jpg` - Client testimonial photos
- `*-logo.png` - Hospital/organization logos

### Content Updates
- **Site configuration**: Edit `config/site.ts`
- **Navigation**: Update `navigation` array in `config/site.ts`
- **Content**: Modify section components in `components/sections/`

## 📱 Sections

1. **Hero** - Main headline with neural pulse animation
2. **Problem** - Issues the doctor solves
3. **Solution** - Three-pillar approach (Clinical, Transformational, Community)
4. **About** - Dr. Ángela's background and credentials
5. **Programs** - Product offerings with status badges
6. **Credibility** - Hospital affiliations and testimonials
7. **Contact** - Contact form modal and social links
8. **Footer** - Brand tagline and links

## 🎯 SEO Features

- Semantic HTML5 structure
- JSON-LD structured data for medical organization
- OpenGraph and Twitter Card meta tags
- Optimized images with proper alt text
- Spanish language optimization (`lang="es"`)

## ♿ Accessibility

- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader optimizations
- Focus management
- Reduced motion preferences respected
- Semantic HTML structure

## 📊 Analytics

Vercel Analytics is integrated for performance and user behavior tracking.

## 🚀 Deployment

The site is optimized for deployment on Vercel:

\`\`\`bash
# Deploy to Vercel
vercel --prod
\`\`\`

## 📄 License

© 2024 Cerebrando. All rights reserved.

---

**Cerebremos el cambio, cerebremos la vida.** ✨
\`\`\`

```json file="" isHidden
