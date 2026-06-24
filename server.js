const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log('New message received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    res.json({ success: true, message: `Thank you ${name}! We will contact you soon.` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});