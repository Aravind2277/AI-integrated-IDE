document.addEventListener('DOMContentLoaded', () => {
    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
        mode: 'javascript',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: {
            'Ctrl-Space': 'autocomplete'
        }
    });

    // Language selection handling
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', () => {
        editor.setOption('mode', languageSelect.value);
    });

    // Run button click handler
    document.getElementById('runBtn').addEventListener('click', async () => {
        const code = editor.getValue();
        try {
            const response = await fetch('http://localhost:3000/run-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code,
                    language: languageSelect.value
                })
            });
            const result = await response.json();
            updateRuntimeMetrics(result.runtime);
        } catch (error) {
            console.error('Error running code:', error);
        }
    });

    // Analyze button click handler
    document.getElementById('analyzeBtn').addEventListener('click', async () => {
        const code = editor.getValue();
        try {
            const response = await fetch('http://localhost:3000/analyze-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code,
                    language: languageSelect.value
                })
            });
            const analysis = await response.json();
            updateAnalysis(analysis);
        } catch (error) {
            console.error('Error analyzing code:', error);
        }
    });

    // Update runtime metrics
    function updateRuntimeMetrics(runtime) {
        const metricsDiv = document.getElementById('runtimeMetrics');
        metricsDiv.innerHTML = `
            <p>Execution Time: ${runtime.executionTime}ms</p>
            <p>Memory Usage: ${runtime.memoryUsage}MB</p>
            <p>Time Complexity: ${runtime.timeComplexity}</p>
        `;
    }

    // Update analysis results
    function updateAnalysis(analysis) {
        // Update error list
        const errorList = document.getElementById('errorList');
        errorList.innerHTML = analysis.errors.map(error => `
            <div class="error-item">
                <strong>Line ${error.line}:</strong> ${error.message}
            </div>
        `).join('');

        // Update line explanations
        const explanations = document.getElementById('lineExplanations');
        explanations.innerHTML = analysis.explanations.map(exp => `
            <div class="explanation-item">
                <strong>Line ${exp.line}:</strong> ${exp.explanation}
            </div>
        `).join('');
    }
});