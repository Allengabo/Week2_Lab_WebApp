const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Change if needed

// Serve static files from the 'frontend' folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
