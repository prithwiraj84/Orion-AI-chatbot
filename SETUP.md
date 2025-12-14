# Quick Setup Guide - Groq API

## Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

This will install:
- Flask (web framework)
- Flask-CORS (cross-origin support)
- Groq (Groq API client)
- python-dotenv (environment variables)
- gunicorn (production server)

---

## Step 2: Set Up Groq API Key

### Get Your Groq API Key

1. **Visit Groq Console**
   - Go to https://console.groq.com
   - Sign up for a free account (if you don't have one)

2. **Create API Key**
   - Navigate to "API Keys" section
   - Click "Create API Key" or "Generate API Key"
   - Copy the key immediately (you won't see it again!)

3. **Save Your Key Securely**
   - Store it in a password manager or secure location
   - You'll need it for the next step

### Create .env File

Create a file named `.env` in the root directory (same folder as `app.py`) with the following content:

```
GROQ_API_KEY=your_groq_api_key_here
```

Replace `your_groq_api_key_here` with your actual Groq API key.

**File Structure:**
```
your-project/
├── app.py
├── .env          ← Create this file here
├── requirements.txt
├── templates/
└── static/
```

⚠️ **Important:** 
- Never commit your `.env` file to version control!
- The `.env` file is already in `.gitignore` (safe!)
- File name must be exactly `.env` (with the dot at the beginning)

---

## Step 3: Run the Application

```bash
python app.py
```

The server will start on `http://localhost:5000`

You should see output like:
```
 * Running on http://0.0.0.0:5000
 * Debug mode: off
```

---

## Step 4: Open in Browser

Open your browser and go to: **http://localhost:5000**

🎉 **You're all set! Start chatting with your AI assistant!**

---

## Troubleshooting

### "Groq API key not configured" error
- ✅ Make sure you created a `.env` file (not `.env.example`)
- ✅ Check that the file is in the same directory as `app.py`
- ✅ Verify the API key format: `GROQ_API_KEY=your-key-here`
- ✅ Make sure there are no spaces: `GROQ_API_KEY=key` ✅ (not `GROQ_API_KEY = key` ❌)
- ✅ Restart your Flask server after creating `.env`

### Port 5000 already in use
Edit `app.py` and change the port:
```python
port = int(os.environ.get('PORT', 5001))  # Change to any available port
```

### Module not found errors
Make sure all dependencies are installed:
```bash
pip install flask flask-cors groq python-dotenv gunicorn
```

Or reinstall from requirements:
```bash
pip install --upgrade -r requirements.txt
```

### Groq API errors
- ✅ Verify your API key is correct
- ✅ Check your Groq account has credits/quota
- ✅ Ensure the key is active in [Groq Console](https://console.groq.com/keys)
- ✅ Check Groq status for any outages

### Can't create .env file

**Windows:**
1. Open Notepad
2. Type: `GROQ_API_KEY=your-key-here`
3. Save As → File name: `.env` (include the dot!)
4. File type: "All Files" (not .txt)
5. Save in your project root folder

**Mac/Linux:**
```bash
cd /path/to/your/project
echo "GROQ_API_KEY=your-key-here" > .env
```

---

## 🎯 Quick Checklist

- [ ] Dependencies installed (`pip install -r requirements.txt`)
- [ ] Groq API key obtained from [console.groq.com](https://console.groq.com/keys)
- [ ] `.env` file created in root directory
- [ ] `GROQ_API_KEY=your-key` added to `.env`
- [ ] Flask server running (`python app.py`)
- [ ] Browser opened to http://localhost:5000
- [ ] Test message sent successfully ✅

---

## 🔗 Useful Links

- [Groq Console](https://console.groq.com/) - Get your API key
- [Groq Documentation](https://console.groq.com/docs) - API docs
- [Flask Documentation](https://flask.palletsprojects.com/)

---

**Need more help?** Check [API_KEY_SETUP.md](API_KEY_SETUP.md) for detailed API key setup instructions!
