from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize OpenAI client
openai.api_key = os.getenv('OPENAI_API_KEY')

# Initialize OpenAI client (for newer versions)
try:
    client = openai.OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
except:
    client = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        if not openai.api_key:
            return jsonify({'error': 'OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file'}), 500
        
        # Use the new OpenAI client if available, otherwise fall back to old API
        if client:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful, friendly, and conversational AI assistant. Provide clear and concise responses."},
                    {"role": "user", "content": user_message}
                ],
                max_tokens=500,
                temperature=0.7
            )
            ai_response = response.choices[0].message.content
        else:
            # Fallback to older API format
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful, friendly, and conversational AI assistant. Provide clear and concise responses."},
                    {"role": "user", "content": user_message}
                ],
                max_tokens=500,
                temperature=0.7
            )
            ai_response = response.choices[0].message.content
        
        return jsonify({'response': ai_response})
    
    except (openai.error.AuthenticationError, openai.AuthenticationError) as e:
        return jsonify({'error': 'Invalid OpenAI API key'}), 401
    except (openai.error.RateLimitError, openai.RateLimitError) as e:
        return jsonify({'error': 'Rate limit exceeded. Please try again later.'}), 429
    except (openai.error.APIError, openai.APIError) as e:
        return jsonify({'error': f'OpenAI API error: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_ENV') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)

