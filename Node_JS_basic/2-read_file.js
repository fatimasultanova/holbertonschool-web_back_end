const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data
    .split('\n')
    .filter((line) => line.trim() !== '');

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const studentLines = lines.slice(1);
  console.log(`Number of students: ${studentLines.length}`);

  const fields = {};

  for (const line of studentLines) {
    const record = line.split(',');
    const firstname = record[0];
    const field = record[3];

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  }

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
