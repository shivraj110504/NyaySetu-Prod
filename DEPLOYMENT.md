# Quick Deployment Reference

## 📋 Files Created/Modified

### Created:
- ✅ `Blockchain/render.yaml` - Render deployment config
- ✅ `Blockchain/.env.example` - Environment variable template
- ✅ Updated `Blockchain/requirements.txt` - Production dependencies
- ✅ Updated `Blockchain/app/views.py` - CORS configuration

### Environment Variables Needed:

#### For Render (Blockchain Server):
```
PORT=10000
MONGODB_URI=mongodb+srv://...
BLOCKCHAIN_NODE_ADDR=https://your-render-app.onrender.com
FLASK_ENV=production
```

#### For Vercel (Frontend):
```
MONGODB_URI=mongodb+srv://...
NEXT_PUBLIC_BLOCKCHAIN_API=https://your-render-app.onrender.com
BETTER_AUTH_SECRET=<generate-random>
BETTER_AUTH_URL=https://your-vercel-app.vercel.app
NEXTAUTH_URL=https://your-vercel-app.vercel.app
NEXTAUTH_SECRET=<generate-random>
```

## 🚀 Quick Deployment Steps

### 1. Deploy Blockchain Server (Render)
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repo
4. Set root directory to `Blockchain`
5. Add environment variables
6. Deploy!

### 2. Deploy Frontend (Vercel)
1. Import project from GitHub on Vercel
2. Framework auto-detected as Next.js
3. Add environment variables
4. Deploy!

### 3. Post-Deployment
1. Update `BLOCKCHAIN_NODE_ADDR` in Render with actual URL
2. Update auth URLs in Vercel with actual URL
3. Redeploy both services
4. Test the integration!

## 📚 Full Guide
See [DEPLOYMENT_GUIDE.md](file:///C:/Users/Shivraj%20S.Taware/.gemini/antigravity/brain/a4c8e515-31ca-44a3-ba87-63aadd568582/DEPLOYMENT_GUIDE.md) for detailed instructions.
