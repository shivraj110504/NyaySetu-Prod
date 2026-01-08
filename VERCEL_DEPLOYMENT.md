# 🚀 Vercel Deployment Guide - NyaySetu

This guide will help you deploy your NyaySetu application to Vercel with full chatbot functionality.

## 📋 Prerequisites

- [x] Vercel account (sign up at https://vercel.com)
- [x] GitHub repository with your code
- [x] MongoDB Atlas database
- [x] Render server running (chatbot API at https://vois-nyaysetu-chatbot.onrender.com)
- [x] OAuth credentials (GitHub & Google)
- [x] Resend API key for emails

---

## 🔧 Step 1: Prepare Your Environment Variables

You need to set up the following environment variables in Vercel. Copy values from your local `.env` file.

### Required Variables

#### Database
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=nyaysetu
```

#### Authentication
```
BETTER_AUTH_URL=https://your-app.vercel.app
BETTER_AUTH_SECRET=your-super-secret-key-minimum-32-characters-long
```

#### OAuth Providers
```
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

#### Email Service
```
RESEND_API_KEY=re_your_resend_api_key
```

#### External APIs
```
NEXT_PUBLIC_RENDER_BACKEND_URL=https://your-blockchain-backend.onrender.com
NEXT_PUBLIC_IPC_API_URL=https://ipc-section.onrender.com
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
RTI_API_URL=https://your-rti-api.onrender.com
AFFIDAVIT_API_URL=https://your-affidavit-api.onrender.com
NEWSLETTER_SHEET_WEBHOOK_URL=https://your-google-apps-script-url
NODE_ENV=production
```

---

## 📱 Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Choose the `nyaysetu-ai-gitLab` folder as the root directory

2. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (or your project folder)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Add Environment Variables**
   - Click "Environment Variables"
   - Add all variables from the list above
   - Make sure to use your actual values
   - **IMPORTANT**: For `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL`, use your Vercel deployment URL (you'll get this after first deployment, you can update it later)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)
   - You'll get a URL like: `https://nyaysetu-xyz123.vercel.app`

5. **Update Auth URLs**
   - After deployment, go to your project settings
   - Update `BETTER_AUTH_URL` to your actual Vercel URL
   - Update `NEXT_PUBLIC_APP_URL` to your actual Vercel URL
   - Redeploy (Vercel will auto-redeploy when you update env vars)

### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd "d:\Code Vault\Projects\Hackathon\Nyaysetu\nyaysetu-project\nyaysetu-ai-gitLab"
   vercel
   ```

4. **Follow Prompts**
   - Set up and deploy: Yes
   - Scope: Your account
   - Link to existing project: No
   - Project name: nyaysetu
   - Directory: ./ (current)
   - Override settings: No

5. **Add Environment Variables via CLI**
   ```bash
   vercel env add MONGODB_URI production
   vercel env add DB_NAME production
   vercel env add BETTER_AUTH_URL production
   # ... repeat for all environment variables
   ```

6. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## ✅ Step 3: Update OAuth Redirect URIs

After deploying, update your OAuth providers with the new URLs:

### GitHub OAuth
1. Go to https://github.com/settings/developers
2. Select your OAuth App
3. Update "Authorization callback URL" to:
   ```
   https://your-app.vercel.app/api/auth/callback/github
   ```

### Google OAuth
1. Go to https://console.cloud.google.com/apis/credentials
2. Select your OAuth 2.0 Client ID
3. Add to "Authorized redirect URIs":
   ```
   https://your-app.vercel.app/api/auth/callback/google
   ```

---

## 🤖 Step 4: Verify Chatbot Functionality

Your chatbot is already configured to work on Vercel! It uses client-side requests directly to your Render server.

**No additional setup needed** ✅

The chatbot will:
- Connect directly to `https://vois-nyaysetu-chatbot.onrender.com/chat`
- Work seamlessly on Vercel (client-side requests)
- Handle cold starts gracefully (shows helpful messages)
- Have a 60-second timeout for reliability

### Test the Chatbot
1. Visit `https://your-app.vercel.app/chatbot`
2. Send a test message
3. Verify response appears correctly

**Note:** First request might take 2-3 minutes if Render server is in cold start.

---

## 🔍 Step 5: Verify Deployment

### Check These Pages Work:
- ✅ Homepage: `https://your-app.vercel.app`
- ✅ Chatbot: `https://your-app.vercel.app/chatbot`
- ✅ Blockchain: `https://your-app.vercel.app/blockchain`
- ✅ Profile: `https://your-app.vercel.app/profile`
- ✅ Login/Signup flows

### Monitor Logs
- Go to Vercel Dashboard → Your Project → Logs
- Check for any runtime errors
- Monitor API requests

---

## 🐛 Troubleshooting

### Issue: Chatbot not responding
**Solution:**
- Check Render server is running: Visit `https://vois-nyaysetu-chatbot.onrender.com/health`
- Should see: `{"service":"AI Legal Chatbot API","version":"1.0.0","status":"operational"}`
- Wait 2-3 minutes for cold start if needed

### Issue: Authentication not working
**Solutions:**
- Verify `BETTER_AUTH_URL` matches your Vercel URL
- Check OAuth redirect URIs are updated
- Verify `BETTER_AUTH_SECRET` is set correctly (minimum 32 characters)

### Issue: Database connection failed
**Solutions:**
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Ensure database user has correct permissions

### Issue: Build fails
**Solutions:**
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure no TypeScript errors: `npm run build` locally first

### Issue: Environment variables not working
**Solutions:**
- Redeploy after adding env vars
- Make sure public env vars start with `NEXT_PUBLIC_`
- Check variable names match exactly (case-sensitive)

---

## 🎯 Important Notes

### 1. **No Auto-Scrolling** ✅
The chatbot page will NOT auto-scroll on Vercel (we removed this feature).

### 2. **Client-Side Chatbot** ✅
The chatbot makes client-side requests, so:
- No serverless function timeouts
- Works seamlessly on Vercel
- No additional configuration needed

### 3. **Environment Variables**
- Public vars (starting with `NEXT_PUBLIC_`) are embedded at build time
- Update these vars → Redeploy to apply changes
- Secret vars (without `NEXT_PUBLIC_`) are only available server-side

### 4. **Custom Domain** (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Update `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` to custom domain
- Update OAuth redirect URIs to custom domain

---

## 🎉 Success Checklist

- [ ] Application deployed to Vercel
- [ ] All environment variables set
- [ ] OAuth redirect URIs updated
- [ ] Chatbot responding correctly
- [ ] Authentication working (login/signup)
- [ ] Blockchain features working
- [ ] Database connections successful
- [ ] No console errors in browser

---

## 📞 Quick Reference

**Vercel Dashboard:** https://vercel.com/dashboard
**Project Settings:** https://vercel.com/[your-username]/[project-name]/settings
**Environment Variables:** https://vercel.com/[your-username]/[project-name]/settings/environment-variables
**Deployment Logs:** https://vercel.com/[your-username]/[project-name]/deployments

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to your repository:
- **Push to `main` branch** → Production deployment
- **Push to other branches** → Preview deployment
- Each pull request gets its own preview URL

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Your chatbot is ready for production! 🚀**
