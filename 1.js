document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const msgBox = document.getElementById('formMessage');
    msgBox.style.color = 'green';
    msgBox.textContent = 'Thank you ' + name + '! Your message has been received. We will get back to you soon.';

    console.log({ name, email, message }); 
});

// ---- Chat Bot ----
const chatIcon = document.getElementById('chatIcon');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendChatBtn');

chatIcon.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
});

closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

function getBotReply(userMessage) {
    const msg = userMessage.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
        return 'Hello! 🌸 How can I help you today?';
    } else if (msg.includes('services') || msg.includes('offer')) {
        return 'We offer web development, mobile apps, and cloud solutions. Would you like to know more about a specific service?';
    } else if (msg.includes('job') || msg.includes('work') ||  msg.includes('career')) {
        return 'We welcome creative talents! 🚀 You can apply via the "Apply Now" button in the contact section.';
    } else if (msg.includes('thank')) {
        return 'You\'re welcome! ❤️ Happy to help. Anything else?';
    } else if (msg.includes('price') || msg.includes('cost') || msg.includes('budget')) {
        return 'Pricing depends on the project. Contact us via the form for a custom quote! 💰';
    } else if (msg.includes('contact') || msg.includes('phone')) {
        return 'You can reach us through the contact form, and we\'ll get back to you soon 📞';
    } else {
        return 'Thanks for your question! 😊 Please use the contact form for more details, and we\'ll reply within 24 hours.';
    }
}

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = sender === 'user' ? 'user-msg' : 'bot-msg';
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    setTimeout(() => {
        const reply = getBotReply(text);
        addMessage(reply, 'bot');
    }, 400);
}

sendBtn.addEventListener('click', handleSend);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});