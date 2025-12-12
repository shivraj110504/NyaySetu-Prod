# Vercel Deployment Guide for Nyaysetu Frontend

## Prerequisites

✅ Render backend deployed at: `https://nyaysetu-blockchain.onrender.com`  
✅ MongoDB URI available  
✅ GitHub repository connected to Vercel

---

## Step 1: Configure Environment Variables in Vercel

### Go to Vercel Dashboard

1. Open https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**

### Add Required Variables

Add these environment variables:

#### 1. Blockchain Backend URL
- **Key:** `NEXT_PUBLIC_RENDER_BACKEND_URL`
- **Value:** `https://nyaysetu-blockchain.onrender.com`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

#### 2. MongoDB Connection
- **Key:** `MONGODB_URI`
- **Value:** Your MongoDB Atlas connection string
  ```
  mongodb+srv://username:password@cluster.mongodb.net/file_storage?retryWrites=true&w=majority
  ```
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

### Save Changes

Click **"Save"** after adding each variable.

---

## Step 2: Redeploy Your Application

### Option A: Automatic (Recommended)

1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. Vercel will automatically deploy

### Option B: Manual

1. In Vercel dashboard, go to **Deployments**
2. Click **"Redeploy"** on the latest deployment
3. Check **"Use existing Build Cache"** for faster deployment

---

## Step 3: Verify Deployment

### Check Deployment Status

1. Wait for "Deployment succeeded" message in Vercel
2. Click **"Visit"** to open your deployed site

### Test Functionality

Visit your deployed site and test:

1. **Navigate to `/blockchain` page** ✅
2. **Upload a file** ✅
3. **Share a file with another user** ✅
4. **View shared files** ✅
5. **Download a file** ✅

---

## Troubleshooting

### Environment Variables Not Loading?

**Solution:** Redeploy after adding environment variables
- Go to Deployments → Redeploy latest

### Still Getting Connection Errors?

**Check Backend Status:**
```bash
curl https://nyaysetu-blockchain.onrender.com/chain
```

Should return JSON, not 500 error.

### CORS Errors?

The backend is configured to allow all origins (`"*"`), so CORS should work. If you still get errors:
- Check Render logs for errors
- Ensure Render backend is running (not sleeping)

---

## Environment Variables Summary

| Variable | Value | Required |
|----------|-------|----------|
| `NEXT_PUBLIC_RENDER_BACKEND_URL` | `https://nyaysetu-blockchain.onrender.com` | ✅ Yes |
| `MONGODB_URI` | Your MongoDB connection string | ✅ Yes |

---

## Local Development vs Production

### Local Development

Create `.env.local` file:
```env
NEXT_PUBLIC_RENDER_BACKEND_URL=https://nyaysetu-blockchain.onrender.com
MONGODB_URI=mongodb+srv://...
```

### Vercel Production

Set environment variables in Vercel dashboard (not in code).

**Important:** Never commit `.env.local` to Git!

---

## Post-Deployment Checklist

- [ ] Environment variables added in Vercel
- [ ] Code pushed to GitHub
- [ ] Vercel deployment succeeded
- [ ] `/blockchain` page loads successfully
- [ ] File upload works
- [ ] File sharing works
- [ ] No console errors
- [ ] Backend responding correctly

---

## Support

If you encounter issues:

1. **Check Vercel Logs:** Deployments → View Function Logs
2. **Check Render Logs:** Render Dashboard → Logs tab
3. **Check Browser Console:** F12 → Console tab

---

## You're Done! 🎉

Your frontend is now deployed on Vercel and connected to your Render backend!
