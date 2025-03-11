# AI-integrated-IDE
It is an IDE for languages like c,c++,java,python etc..,AI will generate certain responses with each line of code and calculate time complexity and space complexity.
# AI-Powered IDE

An intelligent integrated development environment (IDE) that provides real-time code analysis, runtime metrics, and line-by-line explanations using AI capabilities.

## Features
- Real-time code editing with syntax highlighting
- Multiple programming language support (JavaScript, Python, Java)
- Live code execution and runtime analysis
- AI-powered code analysis
- Error detection and suggestions
- Line-by-line code explanations
- Performance metrics tracking
- Analysis history stored in MongoDB

## Tech Stack
- Frontend:
  - HTML5/CSS3
  - JavaScript
  - CodeMirror for code editing
  - Modern UI with dark theme

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Prerequisites
Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1.Clone the repository:
  git clone https://github.com/yourusername/ai-powered-ide.git
  cd ai-powered-ide
2.Install dependencies:
   bash
   npm init -y
   npm install express mongoose cors
3.Start MongoDB
   bash
   mongod
4.Start the server:
   bash
   node server.js
5.Open `index.html` in your browser or serve it using a local server.
## Usage

1. Select your programming language from the dropdown menu
2. Write or paste your code in the editor
3. Click "Run Code" to execute and see runtime metrics
4. Click "Analyze" to get AI-powered insights:
   - Error detection
   - Code explanations
   - Performance suggestions

## Features in Detail

### Code Editor
- Syntax highlighting
- Line numbers
- Auto-bracket completion
- Code folding
- Multiple language support

### Runtime Analysis
- Execution time measurement
- Memory usage tracking
- Time complexity estimation

### AI Analysis
- Error detection
- Code quality suggestions
- Line-by-line explanations
- Best practices recommendations

### Database Integration
- Stores analysis history
- Tracks code changes
- Maintains performance metrics

## API Endpoints

- POST `/run-code`: Execute code and get runtime metrics
- POST `/analyze-code`: Get AI-powered code analysis

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
   
