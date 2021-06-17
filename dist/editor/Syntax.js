"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
exports.default = new class Syntax {
    constructor() {
        // Common Regexes
        this.__DOUBLE_QUOTES = (line) => line.replace(/"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"/sg, "$&".gray);
        this.__SINGLE_QUOTES = (line) => line.replace(/'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'/sg, "$&".gray);
        this.__BACKTICK_QUOTES = (line) => line.replace(/`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`/sg, "$&".gray);
        this.__SLASH_STAR_BLOCK_COMMENT = (line) => line.replace(/\/\*.*\*\//g, "$&".green);
        this.__DOUBLE_SLASH_LINE_COMMENT = (line) => line.replace(/\/\/.*/g, "$&".green);
        this.__POUNDSIGN_LINE_COMMENT = (line) => line.replace(/#.*/g, "$&".green);
        this.__FUNCTIONS = (line) => line.replace(/[^\.\s]+(?=\()/g, "$&".red);
        this.__OOP_KEYWORDS = (line) => line.replace(/(\b|^|\s+)(else|if|import|from|export|default|this|class|delete|public|private|protected|function|return|for|in|of|switch|case|break|continue|interface|type|as)\b/g, "$&".cyan);
        this.__DYNAMIC_KEYWORDS = (line) => line.replace(/(\b|^|\s+)(var|let|const)\b/g, "$&".cyan);
        this.__STATIC_KEYWORDS = (line) => line.replace(/(\b|^|\s+)(int|string|bool|boolean|char)\b/g, "$&".cyan);
        this.__PRIMITIVE_VALUES = (line) => line.replace(/(\b|^|\s+)(\d+(?:\.\d+)?|true|false|null|undefined|void)\b/g, "$&".blue);
        this.__DASH_PARAMETER = (line) => line.replace(/(\b|^|\s+)(-[\S]*)\b/g, "$&".gray);
    }
    // Languages
    /**
     * JavaScript Objection Notation
     */
    json(line) {
        [
            this.__DOUBLE_SLASH_LINE_COMMENT,
            this.__DOUBLE_QUOTES,
            this.__PRIMITIVE_VALUES,
        ].forEach(func => line = func(line));
        return line;
    }
    /**
     * JavaScript
     */
    js(line) {
        return this.ts(line);
    }
    /**
     * TypeScript
     */
    ts(line) {
        [
            this.__DOUBLE_SLASH_LINE_COMMENT,
            this.__SLASH_STAR_BLOCK_COMMENT,
            this.__DOUBLE_QUOTES,
            this.__SINGLE_QUOTES,
            this.__BACKTICK_QUOTES,
            this.__OOP_KEYWORDS,
            this.__DYNAMIC_KEYWORDS,
            this.__STATIC_KEYWORDS,
            this.__PRIMITIVE_VALUES,
            this.__FUNCTIONS,
        ].forEach(func => line = func(line));
        return line;
    }
    sh(line) {
        [
            this.__POUNDSIGN_LINE_COMMENT,
            this.__PRIMITIVE_VALUES,
            this.__DASH_PARAMETER,
        ].forEach(func => line = func(line));
        return line;
    }
};
//# sourceMappingURL=Syntax.js.map