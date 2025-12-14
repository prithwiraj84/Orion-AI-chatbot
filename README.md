<div align="center">

# 🤖 AI Chatbot with Interactive Web Interface

### A stunning, modern AI chatbot powered by Groq's lightning-fast inference API

[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Groq](https://img.shields.io/badge/Groq-API-FF6B6B?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

---

## ✨ Features

<div align="center">

### 🚀 Powered by Groq's Ultra-Fast Inference

Experience **lightning-fast AI responses** with Groq's cutting-edge inference technology!

</div>

| Feature | Description |
|---------|-------------|
| ⚡ **Ultra-Fast AI** | Powered by Groq's high-performance inference API for instant responses |
| 🎨 **Modern UI Design** | Beautiful gradient backgrounds with smooth, eye-catching animations |
| 💬 **Real-time Chat** | Interactive chat interface with live typing indicators |
| 📱 **Fully Responsive** | Seamlessly works on desktop, tablet, and mobile devices |
| ✨ **Cool Animations** | Smooth transitions, typewriter effects, and animated backgrounds |
| 🎯 **User-Friendly** | Character counter, auto-resize input, and intuitive keyboard shortcuts |
| 🔒 **Secure** | Environment-based API key management for maximum security |
| 🌈 **Beautiful Design** | Modern dark theme with gradient accents and glassmorphism effects |

---

## 🎯 Why Groq?

- ⚡ **Lightning Fast**: Get responses in milliseconds, not seconds
- 💰 **Cost-Effective**: More affordable than traditional APIs
- 🔥 **High Performance**: Optimized for speed and efficiency
- 🚀 **Easy Integration**: Simple API with excellent documentation
- 📈 **Scalable**: Handles high traffic with ease

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ **Python 3.8+** installed on your system
- ✅ **Groq API Key** ([Get one here](https://console.groq.com/keys))
- ✅ **pip** package manager
- ✅ A modern web browser

---

## 🚀 Quick Start

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/ai-chatbot.git
cd ai-chatbot
```

### Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 3: Configure API Key

Create a `.env` file in the root directory:

```bash
# Create .env file
touch .env  # On Windows: create .env file manually
```

Add your Groq API key to `.env`:

```env
GROQ_API_KEY=your_groq_api_key_here
```

> 💡 **Get your API key**: Visit [Groq Console](https://console.groq.com/keys) to generate your API key

### Step 4: Run the Application

```bash
python app.py
```

### Step 5: Open in Browser

Navigate to: **[Orion AI chatbot](https://orion-ai-chatbot.onrender.com)**

🎉 **You're all set! Start chatting with your AI assistant!**

---

## 📁 Project Structure

```
ai-chatbot/
│
├── 📄 app.py                 # Flask backend server with Groq API integration
├── 📁 templates/
│   └── 📄 index.html         # Main HTML interface
├── 📁 static/
│   ├── 🎨 styles.css         # Beautiful CSS with animations
│   └── ⚡ script.js          # Interactive JavaScript functionality
├── 📦 requirements.txt       # Python dependencies
├── 🔧 Procfile              # Deployment configuration
├── 📝 README.md             # This file
├── 📚 DEPLOYMENT.md         # Deployment guide
└── 🔑 .env                  # Environment variables (create this)
```

---

## 🎨 Features in Detail

### Backend (Python/Flask)
- ⚡ **Groq API Integration** - Ultra-fast AI inference
- 🔄 **RESTful API** - Clean endpoint for chat interactions
- 🛡️ **Error Handling** - Comprehensive error management
- 🌐 **CORS Enabled** - Cross-origin request support
- 🔐 **Secure Configuration** - Environment variable management

### Frontend (HTML/CSS/JS)
- 🎭 **Animated Background** - Floating gradient circles with smooth motion
- 💬 **Message Bubbles** - Distinct styles for user and AI messages
- ⌨️ **Typing Indicator** - Visual feedback when AI is processing
- ✍️ **Typewriter Effect** - AI responses appear with realistic typing animation
- 📜 **Smooth Scrolling** - Auto-scrolls to latest messages
- 🔢 **Character Counter** - Real-time count with color-coded warnings
- 📏 **Auto-resize Input** - Textarea expands dynamically as you type
- ⌨️ **Keyboard Shortcuts** - Enter to send, Shift+Enter for new line

---

## 🎛️ Customization

### Changing the AI Model

In `app.py`, you can switch between different Groq models:

```python
model="llama-3.1-70b-versatile"  # Default - fast and versatile
# Other options:
# model="mixtral-8x7b-32768"      # For longer context
# model="gemma-7b-it"             # Google's Gemma model
```

### Adjusting Colors & Theme

Edit CSS variables in `static/styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Change primary color */
    --secondary-color: #8b5cf6;    /* Change secondary color */
    --bg-dark: #0f172a;            /* Change background */
    /* ... customize more colors ... */
}
```

### Modifying System Prompt

Customize the AI's personality in `app.py`:

```python
{"role": "system", "content": "You are a helpful, friendly, and conversational AI assistant. Provide clear and concise responses."}
```

---

## 🐛 Troubleshooting

### API Key Issues

| Problem | Solution |
|---------|----------|
| "API key not configured" | Ensure `.env` file exists with `GROQ_API_KEY=your-key` |
| "Invalid API key" | Verify your key at [Groq Console](https://console.groq.com/keys) |
| Key not working | Check for extra spaces or quotes in `.env` file |

### Port Already in Use

If port 5000 is busy, change it in `app.py`:

```python
port = int(os.environ.get('PORT', 5001))  # Use port 5001 instead
```

### Dependencies Issues

Reinstall dependencies:

```bash
pip install --upgrade -r requirements.txt
```

### CORS Errors

Ensure `flask-cors` is installed:

```bash
pip install flask-cors
```

---

## 🌐 Deployment

Deploy your chatbot to the cloud and share it with the world!

### 🚀 Quick Deploy Options

| Platform | Free Tier | Difficulty | Best For |
|----------|-----------|------------|----------|
| [Render](https://render.com) | ✅ Yes | ⭐ Easy | Beginners |
| [Railway](https://railway.app) | ✅ Yes | ⭐ Easy | Quick deployment |
| [PythonAnywhere](https://www.pythonanywhere.com) | ✅ Yes | ⭐⭐ Medium | Python-focused |
| [Fly.io](https://fly.io) | ✅ Yes | ⭐⭐ Medium | Global deployment |

📖 **Detailed deployment guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)

### 🎯 For Your Portfolio

1. ✅ Deploy to Render or Railway (free tiers available)
2. ✅ Add the live URL to your portfolio
3. ✅ Include screenshots and project description
4. ✅ Link to GitHub repository

---

## 📸 Screenshots

<div align="center">

### Desktop View
<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/5c4864ff-d795-459b-acdd-8c5a69d74ca7" />

### Mobile View
<img width="357" height="802" alt="image" src="https://github.com/user-attachments/assets/f2b256ba-2a92-40ef-bbd6-0c01d800f747" />

</div>

> 💡 Add your own screenshots to showcase the beautiful UI!

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology |
|----------|-----------|
| **Backend** | Python 3.8+, Flask 3.0 |
| **AI Engine** | Groq API (Ultra-fast inference) |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | Custom CSS with animations |
| **Deployment** | Render, Railway, or any Python host |

</div>

---

## 📚 Documentation

- 📖 [Setup Guide](SETUP.md) - Detailed setup instructions
- 🔑 [API Key Setup](API_KEY_SETUP.md) - How to configure your Groq API key
- 🚀 [Deployment Guide](DEPLOYMENT.md) - Deploy to various platforms
- ⚡ [Quick Deploy](QUICK_DEPLOY.md) - 5-minute deployment guide
- 💼 [Portfolio Tips](PORTFOLIO_TIPS.md) - Showcase your project

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📝 Improve documentation

### Ideas for Enhancement

- 💾 Conversation history persistence
- 🔐 User authentication
- 🎨 Multiple chat themes
- 📎 File upload capabilities
- 🌍 Multi-language support
- 📊 Usage analytics

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Groq](https://groq.com/) - For the amazing ultra-fast inference API
- [Flask](https://flask.palletsprojects.com/) - For the lightweight web framework
- [Poppins Font](https://fonts.google.com/specimen/Poppins) - For the beautiful typography

---

## 📞 Support & Resources

<div align="center">

### Need Help?

- 📖 [Groq Documentation](https://console.groq.com/docs)
- 📖 [Flask Documentation](https://flask.palletsprojects.com/)
- 💬 [Open an Issue](https://github.com/yourusername/ai-chatbot/issues)

</div>

---

<div align="center">

### ⭐ If you like this project, give it a star! ⭐

**Built with ❤️ using Groq's lightning-fast AI inference**

🚀 **Happy Chatting!** 🚀

</div>
