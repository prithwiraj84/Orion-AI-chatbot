// DOM Elements
const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const typingIndicator = document.getElementById('typingIndicator');
const charCount = document.getElementById('charCount');
const welcomeMessage = document.querySelector('.welcome-message');

// API Configuration
const API_URL = '/chat';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    userInput.addEventListener('input', handleInput);
    userInput.addEventListener('keydown', handleKeyDown);
    sendButton.addEventListener('click', sendMessage);
    
    // Auto-resize textarea
    userInput.addEventListener('input', autoResize);
    
    // Focus input on load
    userInput.focus();
});

// Handle input changes
function handleInput() {
    const length = userInput.value.length;
    charCount.textContent = length;
    
    // Update char counter color
    if (length > 450) {
        charCount.style.color = '#ef4444';
    } else if (length > 400) {
        charCount.style.color = '#f59e0b';
    } else {
        charCount.style.color = '#cbd5e1';
    }
}

// Auto-resize textarea
function autoResize() {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
}

// Handle Enter key
function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

// Remove welcome message
function removeWelcomeMessage() {
    if (welcomeMessage) {
        welcomeMessage.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            welcomeMessage.remove();
        }, 300);
    }
}

// Add CSS for fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Send message
async function sendMessage() {
    const message = userInput.value.trim();
    
    if (!message) {
        // Add shake animation to input
        userInput.style.animation = 'shake 0.5s ease-out';
        setTimeout(() => {
            userInput.style.animation = '';
        }, 500);
        return;
    }
    
    // Remove welcome message on first message
    removeWelcomeMessage();
    
    // Disable input and button
    userInput.disabled = true;
    sendButton.disabled = true;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    userInput.style.height = 'auto';
    charCount.textContent = '0';
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Send message to backend
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message })
        });
        
        const data = await response.json();
        
        // Hide typing indicator
        hideTypingIndicator();
        
        if (!response.ok) {
            throw new Error(data.error || 'Failed to get response');
        }
        
        // Add AI response to chat
        addMessage(data.response, 'ai');
        
    } catch (error) {
        hideTypingIndicator();
        showError(error.message);
    } finally {
        // Re-enable input and button
        userInput.disabled = false;
        sendButton.disabled = false;
        userInput.focus();
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = text;
    
    const timeDiv = document.createElement('span');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getCurrentTime();
    
    contentDiv.appendChild(textDiv);
    contentDiv.appendChild(timeDiv);
    messageDiv.appendChild(contentDiv);
    
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom with smooth animation
    setTimeout(() => {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
    
    // Add typing effect for AI messages
    if (sender === 'ai') {
        typeWriterEffect(textDiv, text);
    }
}

// Typewriter effect for AI messages
function typeWriterEffect(element, text) {
    element.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            
            // Random delay between characters for more natural typing
            const delay = Math.random() * 30 + 20;
            setTimeout(type, delay);
            
            // Scroll as text is being typed
            chatContainer.scrollTo({
                top: chatContainer.scrollHeight,
                behavior: 'smooth'
            });
        }
    }
    
    type();
}

// Show typing indicator
function showTypingIndicator() {
    typingIndicator.classList.add('active');
    chatContainer.appendChild(typingIndicator);
    
    // Scroll to bottom
    setTimeout(() => {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

// Hide typing indicator
function hideTypingIndicator() {
    typingIndicator.classList.remove('active');
    setTimeout(() => {
        if (typingIndicator.parentNode) {
            typingIndicator.parentNode.removeChild(typingIndicator);
        }
    }, 300);
}

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = `Error: ${message}`;
    
    chatContainer.appendChild(errorDiv);
    
    // Scroll to error
    setTimeout(() => {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
    
    // Remove error after 5 seconds
    setTimeout(() => {
        errorDiv.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 300);
    }, 5000);
}

// Get current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Add smooth scroll behavior
chatContainer.addEventListener('scroll', () => {
    // Add any scroll-based effects here if needed
});



