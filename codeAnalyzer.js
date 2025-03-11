const { performance } = require('perf_hooks');
const Analysis = require('./models/Analysis');

async function runCode(code, language) {
    const startTime = performance.now();
    let result;

    try {
        // Execute code based on language
        switch (language) {
            case 'javascript':
                result = eval(code);
                break;
            // Add support for other languages
        }

        const endTime = performance.now();
        const executionTime = endTime - startTime;
        const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;

        return {
            runtime: {
                executionTime,
                memoryUsage: memoryUsage.toFixed(2),
                timeComplexity: analyzeTimeComplexity(code)
            }
        };
    } catch (error) {
        throw new Error(`Execution error: ${error.message}`);
    }
}

async function analyzeCode(code, language) {
    try {
        const lines = code.split('\n');
        const errors = [];
        const explanations = [];

        // Analyze each line
        lines.forEach((line, index) => {
            const lineNumber = index + 1;
            
            // Check for potential errors
            const lineErrors = findErrors(line, language);
            if (lineErrors.length > 0) {
                errors.push(...lineErrors.map(err => ({
                    line: lineNumber,
                    message: err
                })));
            }

            // Generate explanation
            const explanation = explainCode(line, language);
            if (explanation) {
                explanations.push({
                    line: lineNumber,
                    explanation
                });
            }
        });

        // Save analysis to MongoDB
        const analysis = new Analysis({
            code,
            language,
            errors,
            explanations,
            timestamp: new Date()
        });
        await analysis.save();

        return { errors, explanations };
    } catch (error) {
        throw new Error(`Analysis error: ${error.message}`);
    }
}

function findErrors(line, language) {
    const errors = [];
    
    // Add error detection logic based on language
    if (language === 'javascript') {
        if (line.includes('console.log') && !line.endsWith(';')) {
            errors.push('Missing semicolon');
        }
        // Add more error checks
    }

    return errors;
}

function explainCode(line, language) {
    // Add code explanation logic based on language
    if (language === 'javascript') {
        if (line.includes('function')) {
            return 'Function declaration';
        }
        if (line.includes('const')) {
            return 'Constant variable declaration';
        }
        // Add more explanations
    }
    return null;
}

function analyzeTimeComplexity(code) {
    // Add time complexity analysis logic
    // This is a simplified example
    if (code.includes('for') && code.includes('for')) {
        return 'O(n²)';
    }
    if (code.includes('for')) {
        return 'O(n)';
    }
    return 'O(1)';
}

module.exports = { runCode, analyzeCode }; 