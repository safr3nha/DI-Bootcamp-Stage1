const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve files from 'public' folder

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' }
];

let scores = [];

// API to get a new challenge
app.get('/api/challenge', (req, res) => {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [correct.name];
    
    // Add 2 random distractors
    while(options.length < 3) {
        let rand = emojis[Math.floor(Math.random() * emojis.length)].name;
        if(!options.includes(rand)) options.push(rand);
    }
    res.json({ emoji: correct.emoji, options: options.sort(() => Math.random() - 0.5), answer: correct.name });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));