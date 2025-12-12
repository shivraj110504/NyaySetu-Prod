# Blockchain Backend Configuration Guide

## Overview

This Next.js application connects to a blockchain backend for secure file storage. The backend can run locally or be deployed on Render.

## Environment Setup

### Production (Render Deployment)

Create a `.env.local` file in the root of the `nyaysetu-ai-gitLab` directory:

```bash
# Blockchain Backend Configuration
NEXT_PUBLIC_RENDER_BACKEND_URL=https://nyaysetu-blockchain.onrender.com
```

### Local Development

If you're running the blockchain backend locally on port 9000:

```bash
# Blockchain Backend Configuration (Local)
NEXT_PUBLIC_RENDER_BACKEND_URL=http://127.0.0.1:9000
```

Or simply don't create a `.env.local` file - the application will automatically use `http://127.0.0.1:9000` as the default.

## Steps to Configure

1. **Create the environment file:**
   ```bash
   cd d:\Code Vault\Projects\Hackathon\Nyaysetu\nyaysetu-project\nyaysetu-ai-gitLab
   # Create .env.local file with the URL above
   ```

2. **Restart the Next.js development server:**
   ```bash
   npm run dev
   ```

3. **Verify the connection:**
   - Open the browser console (F12)
   - Navigate to the `/blockchain` page
   - Check the Network tab to see requests going to your configured backend URL

## API Endpoints Used

The frontend connects to the following blockchain backend endpoints:

- `POST /submit` - Upload files
- `POST /share` - Share files with other users
- `POST /view_shared` - View files shared with you
- `GET /chain` - Get blockchain transaction history
- `GET /download/:fileKey` - Download files

## Troubleshooting

### Files not uploading
- Verify the backend URL is correct in `.env.local`
- Check that the Render backend is running (may take 30-60 seconds to wake up on free tier)
- Check browser console for CORS errors

### "My Files" section is empty after upload
- Ensure MongoDB is properly connected to the backend
- Verify file metadata is being written to the `file_storage` database
- Check the `files` collection in MongoDB

### Downloads not working
- File downloads go directly to the backend URL
- Ensure the `/download/:fileKey` endpoint is accessible on your backend
- Check for CORS configuration if downloading from a different domain

## CORS Configuration

If you encounter CORS errors when the frontend tries to access the Render backend, you may need to update the Flask backend to allow requests from your Next.js domain.

In your Flask `app/__init__.py` or wherever CORS is configured, ensure it allows your frontend domain:

```python
from flask_cors import CORS

CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:3000", "https://your-nextjs-domain.com"]
    }
})
```

## Notes

- The `.env.local` file is gitignored and should not be committed to version control
- Changes to environment variables require a server restart
- The `NEXT_PUBLIC_` prefix makes this variable available to the browser
