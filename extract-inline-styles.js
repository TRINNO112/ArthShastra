const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\Amit Pathak\\Documents\\ArthShastra\\src\\pages\\Lessons\\Lesson3\\components\\ConsumerEquilibrium.jsx';
const content = fs.readFileSync(filePath, 'utf8');

// Find all style={{}} patterns with their line numbers
const lines = content.split('\n');
const styleLines = [];

lines.forEach((line, index) => {
  if (line.includes('style={{')) {
    styleLines.push({
      line: index + 1,
      content: line.trim()
    });
  }
});

console.log(`Found ${styleLines.length} inline style blocks:\n`);
styleLines.forEach(item => {
  console.log(`Line ${item.line}: ${item.content}`);
});

// Group common style patterns
console.log('\n\nCommon style patterns:');
const styleCounts = {};
styleLines.forEach(item => {
  const styleContent = item.content.match(/style={{\s*([^}]+)\s*}}/)?.[1] || '';
  if (styleContent) {
    const keyPatterns = styleContent.split(',').map(s => s.split(':')[0].trim());
    keyPatterns.forEach(key => {
      if (key) {
        styleCounts[key] = (styleCounts[key] || 0) + 1;
      }
    });
  }
});

const sortedStyles = Object.entries(styleCounts).sort((a, b) => b[1] - a[1]);
sortedStyles.forEach(([key, count]) => {
  console.log(`${key}: ${count} occurrences`);
});
