# Orion-AI-chatbot
# AI Chatbot with Interactive Web Interface

A beautiful, modern AI chatbot built with Python (Flask), HTML, CSS, and JavaScript, integrated with the OpenAI API. Features smooth animations, a responsive design, and an intuitive user interface.

## Features

- 🤖 **AI-Powered Conversations** - Powered by OpenAI's GPT-3.5-turbo model
- 🎨 **Modern UI Design** - Beautiful gradient backgrounds and smooth animations
- 💬 **Real-time Chat** - Interactive chat interface with typing indicators
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✨ **Cool Animations** - Smooth transitions, typewriter effects, and animated backgrounds
- 🎯 **User-Friendly** - Character counter, auto-resize input, and keyboard shortcuts

## Prerequisites

- Python 3.8 or higher
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Installation

1. **Clone or download this repository**

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up your OpenAI API key:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and replace `your_openai_api_key_here` with your actual OpenAI API key:
     ```
     OPENAI_API_KEY=sk-your-actual-api-key-here
     ```

## Usage

1. **Start the Flask server:**
   ```bash
   python app.py
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:5000
   ```

3. **Start chatting!** Type your message and press Enter or click the send button.

## Project Structure

```
.
├── app.py                 # Flask backend server
├── templates/
│   └── index.html        # Main HTML file
├── static/
│   ├── styles.css        # CSS styles and animations
│   └── script.js         # JavaScript for interactivity
├── requirements.txt      # Python dependencies
├── .env.example         # Example environment variables
└── README.md            # This file
```

## Features in Detail

### Backend (Python/Flask)
- RESTful API endpoint for chat interactions
- OpenAI API integration with error handling
- CORS enabled for cross-origin requests
- Environment variable management for API keys

### Frontend (HTML/CSS/JS)
- **Animated Background** - Floating gradient circles
- **Message Bubbles** - Different styles for user and AI messages
- **Typing Indicator** - Shows when AI is thinking
- **Typewriter Effect** - AI responses appear with typing animation
- **Smooth Scrolling** - Auto-scrolls to latest messages
- **Character Counter** - Real-time character count with color coding
- **Auto-resize Input** - Textarea expands as you type
- **Keyboard Shortcuts** - Enter to send, Shift+Enter for new line

## Customization

### Changing the AI Model
In `app.py`, you can change the model:
```python
model="gpt-3.5-turbo"  # Change to "gpt-4" for better responses
```

### Adjusting Colors
Edit CSS variables in `static/styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... more colors ... */
}
```

### Modifying System Prompt
In `app.py`, edit the system message:
```python
{"role": "system", "content": "Your custom system prompt here"}
```

## Troubleshooting

### API Key Issues
- Ensure your `.env` file exists and contains a valid API key
- Check that the API key starts with `sk-`
- Verify your OpenAI account has credits available

### Port Already in Use
If port 5000 is already in use, change it in `app.py`:
```python
app.run(debug=True, port=5001)  # Use different port
```

### CORS Errors
If you encounter CORS issues, ensure `flask-cors` is installed and Flask-CORS is properly configured in `app.py`.

## Deployment

This chatbot can be deployed to various platforms. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy Options:**
- **Render** (Recommended - Free tier): https://render.com
- **Railway**: https://railway.app
- **PythonAnywhere**: https://www.pythonanywhere.com
- **Fly.io**: https://fly.io

**For Portfolio:**
1. Deploy to Render or Railway (free tiers available)
2. Add the live URL to your portfolio
3. Include screenshots and description
4. Link to GitHub repository

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

## License

This project is open source and available for personal and commercial use.

## Contributing

Feel free to fork, modify, and enhance this chatbot! Some ideas:
- Add conversation history persistence
- Implement user authentication
- Add multiple chat themes
- Integrate with other AI models
- Add file upload capabilities

## Support

For issues or questions, please check:
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)

Enjoy your AI chatbot! 🚀

