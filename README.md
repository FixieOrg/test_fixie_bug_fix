# Buggy Calculator

A simple calculator application with intentionally introduced bugs for testing and debugging practice.

## Project Structure

```
buggy-calculator/
├── server.js          # Backend API with bugs
├── index.html         # Frontend HTML with bugs
├── style.css          # CSS with styling bugs
├── script.js          # Frontend JavaScript with logic bugs
├── package.json       # Dependencies
└── README.md          # This file
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open `index.html` in your browser

## Known Bugs

### Backend Bugs (server.js)

1. **Missing Body Parser**: `express.json()` middleware is commented out, causing `req.body` to be undefined
2. **No Input Validation**: Server crashes when non-numeric values are sent
3. **Division by Zero**: No handling for division by zero, returns `Infinity`
4. **String Concatenation**: Addition operation concatenates strings instead of adding numbers
5. **Missing Return Statement**: Invalid operation case doesn't return, causing code to continue
6. **Wrong Port in Log**: Console shows port 3001 but server runs on 3000
7. **No Error Handling**: Missing error handling middleware and uncaught exception handling

### Frontend HTML Bugs (index.html)

1. **Editable Display**: Input field should be readonly for display purposes
2. **Wrong Function Name**: Clear button calls `clearDisplay()` but function is named `clear()`
3. **Invalid HTML**: `rowspan` attribute used on button element (not supported)

### Frontend CSS Bugs (style.css)

1. **Missing Focus Outline**: No `outline: none` on input field causes ugly focus border
2. **Text Selection**: Buttons allow text selection (missing `user-select: none`)
3. **Grid Spanning**: Equal button and zero button don't properly span grid cells
4. **Missing Border**: Result div has no border for better visibility
5. **No Responsive Design**: No mobile-friendly styles

### Frontend JavaScript Bugs (script.js)

1. **Multiple Decimals**: Logic to prevent multiple decimal points is flawed
2. **No Input Length Limit**: Can cause display overflow
3. **Function Name Mismatch**: `clearDisplay()` vs `clear()`
4. **No Empty Check**: `deleteLast()` doesn't check if display is empty
5. **Dangerous eval()**: Using `eval()` which can execute arbitrary code
6. **No NaN/Infinity Check**: Doesn't handle invalid calculation results
7. **Floating Point Precision**: No rounding for precision issues
8. **No Keyboard Support**: Missing keyboard event listeners
9. **Memory Leaks**: No cleanup of global variables and event listeners
10. **Poor Error Handling**: Generic error messages don't help users

## Testing the Bugs

Try these operations to trigger the bugs:

1. **Backend API**: Send POST request to `/calculate` without proper JSON body
2. **Division by Zero**: Try dividing any number by 0
3. **String Addition**: Send string values for addition
4. **Frontend**: Try entering multiple decimal points
5. **Long Input**: Enter very long numbers
6. **Invalid Expressions**: Try entering invalid mathematical expressions

## Learning Objectives

This project is designed to help you practice:
- Identifying different types of bugs
- Understanding error handling
- Learning debugging techniques
- Improving code quality
- Understanding security vulnerabilities

## Fixing the Bugs

Try to fix these bugs one by one:
1. Start with the most critical bugs (security and crashes)
2. Move to functional bugs (incorrect calculations)
3. Finish with UI/UX improvements

Happy debugging! 🐛
