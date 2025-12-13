# Quick Setup Guide

## Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

## Step 2: Set Up OpenAI API Key

Create a file named `.env` in the root directory (same folder as `app.py`) with the following content:

```
OPENAI_API_KEY=your_actual_openai_api_key_here
```

Replace `your_actual_openai_api_key_here` with your actual OpenAI API key.

**How to get an OpenAI API key:**
1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new secret key
5. Copy the key (it starts with `sk-`)

⚠️ **Important:** Never commit your `.env` file to version control!

## Step 3: Run the Application

```bash
python app.py
```

The server will start on `http://localhost:5000`

## Step 4: Open in Browser

Open your browser and go to: http://localhost:5000

## Troubleshooting

### "OpenAI API key not configured" error
- Make sure you created a `.env` file (not `.env.example`)
- Check that the file is in the same directory as `app.py`
- Verify the API key format: `OPENAI_API_KEY=sk-...`

### Port 5000 already in use
Edit `app.py` and change the port:
```python
app.run(debug=True, port=5001)  # Change to any available port
```

### Module not found errors
Make sure all dependencies are installed:
```bash
pip install flask flask-cors openai python-dotenv
```


