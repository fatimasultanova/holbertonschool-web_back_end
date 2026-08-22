import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.trim().split('\n');
      const students = {};

      const validLines = lines.filter((line) => line.trim() !== '');

      for (let i = 1; i < validLines.length; i += 1) {
        const parts = validLines[i].split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }
      }
      resolve(students);
    });
  });
}
