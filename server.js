const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { analyzeCode, runCode } = require('./codeAnalyzer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ai-ide', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.post('/run-code', async (req, res) => {
    try {
        const { code, language } = req.body;
        const result = await runCode(code, language);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/analyze-code', async (req, res) => {
    try {
        const { code, language } = req.body;
        const analysis = await analyzeCode(code, language);
        res.json(analysis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 