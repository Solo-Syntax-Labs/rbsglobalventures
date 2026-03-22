# Deployment Guide

This guide covers deploying the RBS Global Ventures website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the recommended platform for deploying this React application.

### Prerequisites
- Vercel account (free)
- GitHub repository connected to Vercel

### Automatic Deployment (Recommended)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   ```json
   // vercel.json (already included)
   {
     "version": 2,
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

3. **Environment Variables** (Optional)
   ```
   VITE_APP_NAME=RBS Global Ventures
   VITE_APP_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build completion
   - Your site will be live at `https://your-project-name.vercel.app`

### Manual Deployment via CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 🌐 Netlify

### Prerequisites
- Netlify account (free)
- Built project files

### Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

3. **Configure Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add redirects for SPA routing:

   ```toml
   # netlify.toml
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

## 🔧 Traditional Hosting

### Prerequisites
- Web server (Apache, Nginx, etc.)
- FTP/SFTP access or SSH

### Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload contents of `dist` folder to your web server
   - Ensure server supports SPA routing

3. **Server Configuration**

   **Apache (.htaccess)**
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

   **Nginx**
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf
```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

### Build and Run
```bash
# Build image
docker build -t rbsglobalventures .

# Run container
docker run -p 80:80 rbsglobalventures
```

## 🔍 SEO & Performance Optimization

### Before Deployment

1. **Update Meta Tags**
   - Check `index.html` for proper meta tags
   - Update Open Graph and Twitter Card metadata

2. **Test Build**
   ```bash
   npm run build
   npm run preview
   ```

3. **Performance Check**
   - Test with Lighthouse
   - Check Core Web Vitals
   - Optimize images if needed

### After Deployment

1. **SSL Certificate**
   - Ensure HTTPS is enabled
   - Set up proper redirects

2. **Domain Configuration**
   - Update DNS records
   - Set up custom domain

3. **Analytics**
   - Set up Google Analytics
   - Configure search console

## 📱 Mobile Optimization

### Testing
- Test on various devices
- Check responsive design
- Verify touch interactions

### Performance
- Optimize images for mobile
- Minimize JavaScript bundle
- Enable compression

## 🔐 Security Headers

The `vercel.json` includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 🚨 Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - Ensure SPA routing is configured
   - Check server redirects

2. **Build Failures**
   - Check Node.js version (18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

3. **Performance Issues**
   - Optimize images
   - Enable caching
   - Minimize bundle size

4. **Environment Variables**
   - Check variable names (VITE_ prefix)
   - Verify values in deployment dashboard

### Debug Commands

```bash
# Check build
npm run build

# Preview locally
npm run preview

# Check types
npm run type-check

# Lint code
npm run lint
```

## 📞 Support

For deployment issues:
- **Vercel**: support@vercel.com
- **Netlify**: support@netlify.com
- **Technical**: Create an issue in the repository

---

**Note**: Always test deployments in a staging environment before going to production.
