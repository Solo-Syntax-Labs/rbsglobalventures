# Quick Start Guide

Get your RBS Global Ventures website running in minutes.

## 🚀 One-Click Setup

### Option 1: Vercel Deploy (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Solo-Syntax-Labs/rbsglobalventures.git)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Wait for deployment (~2 minutes)
4. Your site is live! 🎉

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/Solo-Syntax-Labs/rbsglobalventures.git
cd rbsglobalventures

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5174
```

## ⚡ Fast Deployment Commands

### Deploy to Vercel (Production)
```bash
npm run deploy
```

### Deploy to Vercel (Preview)
```bash
npm run deploy:preview
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Customization

### Update Company Information

Edit these files to customize your site:

1. **Contact Details** - Update in:
   - `src/app/components/ContactForm.tsx`
   - `src/app/components/Footer.tsx`
   - `index.html` (meta tags)

2. **Company Information** - Update in:
   - `src/app/components/About.tsx`
   - Policy pages (`PrivacyPolicy.tsx`, `TermsOfService.tsx`, `CookiePolicy.tsx`)

3. **Colors & Branding** - Update in:
   - `tailwind.config.js` (colors)
   - Component files for specific styling

### Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Update the values as needed.

## 📱 What's Included

- ✅ Complete website with all sections
- ✅ Privacy Policy, Terms of Service, Cookie Policy
- ✅ Contact form with service selection
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ Ready for deployment

## 🌐 Next Steps

1. **Customize Content** - Update company information and services
2. **Add Real Logos** - Replace placeholder logos in `partners/` directory
3. **Set Up Domain** - Configure custom domain in Vercel dashboard
4. **Add Analytics** - Set up Google Analytics if needed
5. **Test Everything** - Check all forms and links

## 🆘 Need Help?

- **Documentation**: See `README.md` for detailed info
- **Deployment Guide**: See `DEPLOYMENT.md` for all platforms
- **Issues**: Create an issue on GitHub
- **Contact**: info@rbsglobalventures.com

---

**Ready to go! Your steel trading website is set up and ready to customize.** 🚀
