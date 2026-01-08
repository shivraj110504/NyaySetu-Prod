# Quick Environment Variables Setup for Vercel

## Copy-Paste Template

Use this template to quickly add all environment variables to Vercel Dashboard.

### Method 1: Vercel Dashboard (Bulk Add)

Go to: Project Settings → Environment Variables → Click "Add Variable"

Paste these one by one:

```
MONGODB_URI
DB_NAME
BETTER_AUTH_URL
BETTER_AUTH_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
RESEND_API_KEY
NEXT_PUBLIC_RENDER_BACKEND_URL
NEXT_PUBLIC_IPC_API_URL
NEXT_PUBLIC_APP_URL
RTI_API_URL
AFFIDAVIT_API_URL
NEWSLETTER_SHEET_WEBHOOK_URL
NODE_ENV
```

### Method 2: Vercel CLI (Bulk Import)

If you have a `.env` file locally, you can pull values from it:

```bash
# For each variable, run:
vercel env add MONGODB_URI production
# Paste value when prompted

# Or use vercel env pull to sync from Vercel
vercel env pull .env.local
```

---

## Environment Variables Checklist

### ✅ Core Required (Must Have)
- [ ] `MONGODB_URI` - Your MongoDB connection string
- [ ] `DB_NAME` - Database name (nyaysetu)
- [ ] `BETTER_AUTH_URL` - Your Vercel app URL
- [ ] `BETTER_AUTH_SECRET` - Random 32+ character string

### ✅ Authentication (For Login/Signup)
- [ ] `GITHUB_CLIENT_ID` - From GitHub OAuth App
- [ ] `GITHUB_CLIENT_SECRET` - From GitHub OAuth App
- [ ] `GOOGLE_CLIENT_ID` - From Google Cloud Console
- [ ] `GOOGLE_CLIENT_SECRET` - From Google Cloud Console
- [ ] `RESEND_API_KEY` - For sending emails (OTP, etc.)

### ✅ External Services (For Features)
- [ ] `NEXT_PUBLIC_RENDER_BACKEND_URL` - Blockchain backend
- [ ] `NEXT_PUBLIC_IPC_API_URL` - IPC prediction service
- [ ] `NEXT_PUBLIC_APP_URL` - Same as BETTER_AUTH_URL

### ⚠️ Optional (Feature-Specific)
- [ ] `RTI_API_URL` - RTI document generator
- [ ] `AFFIDAVIT_API_URL` - Affidavit generator
- [ ] `NEWSLETTER_SHEET_WEBHOOK_URL` - Google Sheets webhook

### ℹ️ System
- [ ] `NODE_ENV` - Set to "production"

---

## Important Notes

### After First Deployment:
1. Get your Vercel URL (e.g., `https://nyaysetu-abc123.vercel.app`)
2. Update these variables:
   - `BETTER_AUTH_URL` = your Vercel URL
   - `NEXT_PUBLIC_APP_URL` = your Vercel URL
3. Click "Redeploy" in Vercel Dashboard

### Public vs Private Variables:
- **Public** (starts with `NEXT_PUBLIC_`):
  - Accessible in browser
  - Built into client-side code
  - Safe for non-sensitive URLs
  
- **Private** (no prefix):
  - Only accessible on server
  - Use for secrets (API keys, passwords)
  - Never exposed to browser

---

## Sample Values (DO NOT USE IN PRODUCTION)

For reference only - use your actual values:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/
DB_NAME=nyaysetu
BETTER_AUTH_URL=https://your-app.vercel.app
BETTER_AUTH_SECRET=super-secret-random-string-32-chars-min-abcd1234567890
GITHUB_CLIENT_ID=Iv1.a1b2c3d4e5f6g7h8
GITHUB_CLIENT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
GOOGLE_CLIENT_ID=123456789-abc123def456.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-AbCdEfGhIjKlMnOpQrStUvWx
RESEND_API_KEY=re_AbCdEfGh_1234567890
NEXT_PUBLIC_RENDER_BACKEND_URL=https://your-backend.onrender.com
NEXT_PUBLIC_IPC_API_URL=https://ipc-section.onrender.com
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NODE_ENV=production
```

---

## Verification Commands

After deployment, verify variables are set:

```bash
# Show all environment variables
vercel env ls

# Pull environment variables to local file
vercel env pull .env.local

# Remove a variable
vercel env rm VARIABLE_NAME production
```

---

## Troubleshooting

**Variables not working?**
- Redeploy after adding variables
- Check spelling (case-sensitive)
- Verify values don't have extra spaces
- For public vars, make sure they start with `NEXT_PUBLIC_`

**Need to update a variable?**
1. Go to Project Settings → Environment Variables
2. Click the three dots next to the variable
3. Click "Edit"
4. Update value
5. Save
6. Redeploy (important!)

---

## Quick Deploy Checklist

1. [ ] Add all required environment variables
2. [ ] Update `BETTER_AUTH_URL` after first deployment
3. [ ] Update OAuth redirect URIs (GitHub & Google)
4. [ ] Test authentication (login/signup)
5. [ ] Test chatbot functionality
6. [ ] Check all pages load correctly
7. [ ] Monitor Vercel logs for errors

---

**Ready to Deploy!** 🚀

See `VERCEL_DEPLOYMENT.md` for detailed step-by-step instructions.
