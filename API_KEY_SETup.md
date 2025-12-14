# 🔑 Groq API Key Setup Guide

## ⚠️ IMPORTANT SECURITY NOTES
- ❌ **NEVER** commit your API key to GitHub
- ❌ **NEVER** share your API key publicly
- ✅ Always use environment variables
- ✅ The `.env` file is already in `.gitignore` (safe!)

---

## 📍 Where to Place Your Groq API Key

### 🏠 For Local Development (Testing on Your Computer)

**Location:** Create a file named `.env` in the root directory (same folder as `app.py`)

**Steps:**
1. In your project folder, create a new file called `.env`
2. Open the `.env` file in a text editor
3. Add this line (replace with your actual key):
   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```
4. Save the file

**File Structure:**
```
your-project/
├── app.py
├── .env          ← Create this file here
├── requirements.txt
├── templates/
└── static/
```

**Example `.env` file content:**
```
GROQ_API_KEY=gsk_abc123xyz789def456ghi012jkl345mno678pqr901stu234vwx567
```

⚠️ **Note:** 
- Make sure the file is named exactly `.env` (with the dot at the beginning)
- Groq API keys typically start with `gsk_` (not `sk-` like OpenAI)

---

### 🌐 For Deployment (Render, Railway, etc.)

**Do NOT create a `.env` file on the platform!** Instead, use the platform's environment variables.

#### **Option 1: Render**

1. Go to your Render dashboard
2. Click on your web service
3. Go to the **"Environment"** tab
4. Click **"Add Environment Variable"**
5. Add:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `your-groq-api-key-here`
6. Click **"Save Changes"**
7. The app will automatically redeploy

#### **Option 2: Railway**

1. Go to your Railway project dashboard
2. Click on your service
3. Go to the **"Variables"** tab
4. Click **"New Variable"**
5. Add:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `your-groq-api-key-here`
6. Click **"Add"**

#### **Option 3: PythonAnywhere**

1. Go to the **"Files"** tab
2. Create a file named `.env` in your project folder
3. Add: `GROQ_API_KEY=your-groq-api-key-here`
4. Save the file

---

## 🔑 Getting Your Groq API Key

### Step-by-Step Guide

1. **Visit Groq Console**
   - Go to https://console.groq.com
   - Sign up for a free account (if needed)

2. **Navigate to API Keys**
   - Log in to your account
   - Go to "API Keys" section in the dashboard

3. **Create New Key**
   - Click "Create API Key" or "Generate API Key"
   - Give it a name (optional, for organization)
   - Click "Create" or "Generate"

4. **Copy Your Key**
   - **IMPORTANT:** Copy the key immediately!
   - You won't be able to see it again after closing the dialog
   - Store it securely (password manager recommended)

5. **Use Your Key**
   - Add it to your `.env` file for local development
   - Add it as environment variable for deployment

---

## 🧪 How to Verify It's Working

### Local Testing:
1. Make sure `.env` file exists with your Groq API key
2. Run: `python app.py`
3. Open http://localhost:5000
4. Try sending a message
5. If you get an AI response, it's working! ✅

### Deployment Testing:
1. Make sure environment variable is set on your platform
2. Visit your deployed URL
3. Try sending a message
4. If you get an AI response, it's working! ✅

---

## 🔍 Troubleshooting

### "Groq API key not configured" Error

**Local:**
- ✅ Check that `.env` file exists in the root directory
- ✅ Check the file name is exactly `.env` (not `env.txt` or `.env.txt`)
- ✅ Verify the content format: `GROQ_API_KEY=your-key-here`
- ✅ Make sure there are no spaces: `GROQ_API_KEY=key` ✅ (not `GROQ_API_KEY = key` ❌)
- ✅ Verify the variable name is `GROQ_API_KEY` (not `OPENAI_API_KEY`)
- ✅ Restart your Flask server after creating `.env`

**Deployed:**
- ✅ Check environment variable is set in platform dashboard
- ✅ Verify variable name is exactly `GROQ_API_KEY`
- ✅ Make sure the value doesn't have quotes (just the key itself)
- ✅ Redeploy after adding the variable

### "Invalid API key" Error

- ✅ Verify your key is correct (copy-paste again)
- ✅ Check your Groq account is active
- ✅ Ensure you have credits/quota in your Groq account
- ✅ Try generating a new API key from [Groq Console](https://console.groq.com/keys)
- ✅ Make sure you're using the correct key format

### File Not Found Error

**If you can't create `.env` file:**

**Windows:**
1. Open Notepad
2. Type: `GROQ_API_KEY=your-key-here`
3. Save the file
4. In "Save As" dialog:
   - File name: `.env` (include the dot!)
   - File type: "All Files" (not .txt)
   - Save in your project root folder

**Mac/Linux:**
```bash
# In terminal, navigate to project folder
cd /path/to/your/project
# Create .env file
echo "GROQ_API_KEY=your-key-here" > .env
```

### API Rate Limit Errors

- ✅ Check your Groq account quota/limits
- ✅ Verify you're on the correct plan
- ✅ Wait a moment and try again
- ✅ Check Groq status page for any issues

---

## 📝 Quick Checklist

### Local Development:
- [ ] Created `.env` file in root directory
- [ ] Added `GROQ_API_KEY=your-key-here` to `.env`
- [ ] Verified `.env` is in `.gitignore` (it should be automatically)
- [ ] Tested the app locally - works! ✅

### Deployment:
- [ ] Set `GROQ_API_KEY` as environment variable on platform
- [ ] Verified the value is correct (no extra spaces)
- [ ] Redeployed the app
- [ ] Tested the deployed app - works! ✅

---

## 🎯 Example `.env` File

```
GROQ_API_KEY=gsk_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567
```

**Important:**
- No quotes around the key
- No spaces before or after the `=`
- The key typically starts with `gsk_`
- One variable per line
- Variable name is `GROQ_API_KEY` (not `OPENAI_API_KEY`)

---

## 🔒 Security Reminders

1. ✅ `.env` is already in `.gitignore` - safe from Git
2. ✅ Never post your API key in:
   - GitHub issues/comments
   - Stack Overflow
   - Discord/Slack channels
   - Code snippets online
   - Social media
3. ✅ If you accidentally commit your key:
   - Rotate it immediately on Groq Console
   - Delete the old key
   - Create a new key
   - Remove it from Git history (or just create a new key)
4. ✅ Use environment variables on all platforms
5. ✅ Never hardcode the key in `app.py` or any code file
6. ✅ Don't share screenshots that show your API key

---

## 💡 Quick Reference

| Location | Where to Put Key | How |
|----------|-----------------|-----|
| **Local** | `.env` file | Create file: `GROQ_API_KEY=your-key-here` |
| **Render** | Environment Variables | Dashboard → Environment tab |
| **Railway** | Environment Variables | Dashboard → Variables tab |
| **PythonAnywhere** | `.env` file | Files tab → Create `.env` |
| **Heroku** | Config Vars | Dashboard → Settings → Config Vars |
| **Fly.io** | Secrets | `fly secrets set GROQ_API_KEY=key` |

---

## 🔗 Useful Links

- [Groq Console](https://console.groq.com/) - Get your API key
- [Groq Documentation](https://console.groq.com/docs) - API documentation
- [Groq Status](https://status.groq.com/) - Check service status

---

## ❓ FAQ

**Q: Where do I get a Groq API key?**  
A: Visit https://console.groq.com/keys and create one (free account available)

**Q: Is Groq API free?**  
A: Groq offers a generous free tier. Check their pricing for details.

**Q: What's the difference between Groq and OpenAI keys?**  
A: Groq keys typically start with `gsk_` and are used with Groq's ultra-fast inference API.

**Q: Can I use the same key for local and deployment?**  
A: Yes, but use different methods: `.env` file locally, environment variables for deployment.

**Q: My key isn't working, what should I do?**  
A: Verify the key format, check your account status, try generating a new key, and ensure no extra spaces.

---

**Need help? Check the error message in your terminal or deployment logs!**
