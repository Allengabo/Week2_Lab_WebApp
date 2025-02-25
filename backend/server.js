const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Change if needed

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// API route to send cake list
app.get('/api/cakes', (req, res) => {
    const cakes = [
        "Chocolate Cake",
        "Vanilla Cake",
        "Strawberry Shortcake",
        "Red Velvet Cake",
        "Cheesecake",
        "Black Forest Cake",
        "Carrot Cake"
    ];
    res.json(cakes);
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
