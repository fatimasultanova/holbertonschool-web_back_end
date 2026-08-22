import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((students) => {
        const output = ['This is the list of our students'];
        const fields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        for (const field of fields) {
          const list = students[field].join(', ');
          output.push(`Number of students in ${field}: ${students[field].length}. List: ${list}`);
        }

        return response.status(200).send(output.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    const dbPath = process.argv[2];

    return readDatabase(dbPath)
      .then((students) => {
        const list = students[major] ? students[major].join(', ') : '';
        return response.status(200).send(`List: ${list}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}
