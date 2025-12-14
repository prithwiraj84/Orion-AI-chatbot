# Deployment Guide - AI Chatbot with Groq

This guide covers multiple deployment options for your AI chatbot powered by Groq's ultra-fast inference API. Choose the platform that best fits your needs.

## 🚀 Quick Deploy Options

### Option 1: Render (Recommended - Free Tier Available)
**Best for:** Beginners, free hosting, easy setup

1. **Create a Render Account**
   - Go to https://render.com
   - Sign up with GitHub (recommended) or email

2. **Prepare Your Repository**
   - Push your code to GitHub
   - Make sure `.env` is in `.gitignore` (never commit API keys!)

3. **Deploy on Render**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Render will auto-detect it's a Python app
   - Configure:
     - **Name:** `ai-chatbot` (or your choice)
     - **Environment:** `Python 3`
     - **Build Command:** `pip install -r requirements.txt`
     - **Start Command:** `gunicorn app:app`
   
4. **Add Environment Variables**
   - Go to "Environment" tab
   - Add: `GROQ_API_KEY` = `your-groq-api-key-here`
   - Add: `FLASK_ENV` = `production` (optional)

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Your app will be live at `https://your-app-name.onrender.com`

**Render Free Tier:**
- ✅ Free tier available
- ✅ Auto-deploys on git push
- ⚠️ Spins down after 15 min of inactivity (wakes up on next request)

---

### Option 2: Railway (Great Free Tier)
**Best for:** No cold starts, simple deployment

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway auto-detects Python

3. **Configure Environment Variables**
   - Go to "Variables" tab
   - Add: `GROQ_API_KEY` = `your-groq-api-key-here`

4. **Get Your URL**
   - Railway provides a URL like `https://your-app.up.railway.app`
   - You can add a custom domain later

**Railway Free Tier:**
- ✅ $5 free credit monthly
- ✅ No cold starts
- ✅ Easy to scale

---

### Option 3: PythonAnywhere (Free Tier)
**Best for:** Python-focused hosting

1. **Create Account**
   - Go to https://www.pythonanywhere.com
   - Sign up for free "Beginner" account

2. **Upload Files**
   - Go to "Files" tab
   - Upload all your project files
   - Create folders: `templates/` and `static/`

3. **Install Dependencies**
   - Go to "Consoles" → "Bash"
   - Run: `pip3.10 install --user flask flask-cors groq python-dotenv gunicorn`

4. **Set Environment Variables**
   - Create `.env` file in Files tab
   - Add: `GROQ_API_KEY=your-groq-api-key`

5. **Configure Web App**
   - Go to "Web" tab
   - Click "Add a new web app"
   - Choose "Flask"
   - Select Python 3.10
   - Edit WSGI file:
     ```python
     import sys
     path = '/home/yourusername/path/to/your/app'
     if path not in sys.path:
         sys.path.append(path)
     
     from app import app as application
     ```

6. **Reload**
   - Click green "Reload" button
   - Your app is live!

**PythonAnywhere Free Tier:**
- ✅ Free tier available
- ✅ Always on
- ⚠️ Limited to 1 web app, 512MB disk space

---

### Option 4: Fly.io (Good Free Tier)
**Best for:** Global deployment, Docker support

1. **Install Fly CLI**
   ```bash
   # Windows (PowerShell)
   powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
   ```

2. **Create Fly App**
   ```bash
   fly launch
   ```
   - Follow prompts
   - Choose region closest to you

3. **Set Secrets**
   ```bash
   fly secrets set GROQ_API_KEY=your-groq-api-key-here
   ```

4. **Deploy**
   ```bash
   fly deploy
   ```

5. **Get URL**
   ```bash
   fly open
   ```

---

### Option 5: Heroku (Paid, but Easy)
**Best for:** Mature platform, good documentation

**Note:** Heroku removed free tier, but offers $5/month hobby plan

1. **Install Heroku CLI**
   - Download from https://devcenter.heroku.com/articles/heroku-cli

2. **Login**
   ```bash
   heroku login
   ```

3. **Create App**
   ```bash
   heroku create your-app-name
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set GROQ_API_KEY=your-groq-api-key-here
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] `.env` is in `.gitignore` (never commit API keys!)
- [ ] `app.py` uses `0.0.0.0` as host (for external access)
- [ ] Debug mode is disabled in production
- [ ] All dependencies are in `requirements.txt` (including `groq`)
- [ ] `Procfile` exists (for Heroku/Render)
- [ ] Tested locally with production settings
- [ ] Groq API key is ready ([Get one here](https://console.groq.com/keys))

---

## 🔒 Security Best Practices

1. **Never commit API keys**
   - Always use environment variables
   - Add `.env` to `.gitignore`

2. **Use HTTPS**
   - Most platforms provide SSL automatically

3. **Rate Limiting** (Optional)
   - Consider adding rate limiting for production
   - Libraries: `flask-limiter`

4. **Error Handling**
   - Don't expose sensitive error messages to users

---

## 🌐 Custom Domain Setup

### Render
1. Go to your service → Settings
2. Add custom domain
3. Update DNS records as instructed

### Railway
1. Go to Settings → Domains
2. Add custom domain
3. Update DNS records

---

## 📊 Monitoring & Logs

### Render
- View logs in dashboard
- Set up alerts in Settings

### Railway
- View logs in real-time
- Set up metrics dashboard

---

## 🔧 Troubleshooting

### App crashes on deploy
- Check logs for error messages
- Verify all dependencies in `requirements.txt`
- Ensure environment variables are set correctly
- Make sure `groq` package is in requirements.txt

### API key not working
- Verify key is set correctly in environment variables
- Check key format (Groq keys don't start with "sk-")
- Ensure no extra spaces in environment variable
- Get a new key from [Groq Console](https://console.groq.com/keys)

### Static files not loading
- Verify `templates/` and `static/` folders exist
- Check file paths use `url_for()` in HTML
- Ensure static files are in repository

### Port errors
- Most platforms set `PORT` environment variable
- App should use: `port = int(os.environ.get('PORT', 5000))`

### Groq API errors
- Check your Groq account has credits/quota
- Verify the API key is active
- Check Groq status page for outages
- Review Groq API documentation

---

## 💡 Tips for Portfolio

1. **Add to GitHub**
   - Clean commit history
   - Good README with screenshots
   - Live demo link

2. **Customize**
   - Add your branding
   - Include project description
   - Add features showcase

3. **Documentation**
   - Update README with live URL
   - Add deployment badge
   - Include tech stack (mention Groq!)

---

## 📝 Example .gitignore

Make sure your `.gitignore` includes:
```
.env
__pycache__/
*.pyc
*.pyo
*.pyd
.Python
venv/
env/
.venv
.DS_Store
*.log
```

---

## 🎯 Recommended for Portfolio

For portfolio projects, I recommend **Render** because:
- ✅ Free tier available
- ✅ Easy setup
- ✅ Automatic HTTPS
- ✅ GitHub integration
- ✅ Good performance

**Quick Render Deploy:**
1. Push code to GitHub
2. Connect to Render
3. Add `GROQ_API_KEY` environment variable
4. Deploy - done! ✨

---

## 🔗 Useful Links

- [Groq Console](https://console.groq.com/) - Get your API key
- [Groq Documentation](https://console.groq.com/docs) - API documentation
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app)

---

Need help? Check platform documentation or create an issue!
