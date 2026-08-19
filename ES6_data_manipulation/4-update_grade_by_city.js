export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = Array.isArray(newGrades)
        ? newGrades.find((gradeObj) => gradeObj.studentId === student.id)
        : null;

      return {
        ...student,
        grade: matchingGrade ? matchingGrade.grade : 'N/A',
      };
    });
}
