const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Set '.wasm' file to MIME type
app.get('*.wasm', (req, res, next) => {
    res.set('Content-Type', 'application/wasm');
    next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use morgan for logging
app.use(morgan('combined'));

// Serve JavaScript files from src/js directory
app.use('/js', express.static(path.join(__dirname, 'public/src/js')));

// Serve node_modules directory
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
