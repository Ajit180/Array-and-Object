
const student = { id: 1, name: 'Alice', age: 22, major:"Computer Science",GPA:3.8,isEnrolled:true };

function displayStudentInfo(student) {
  for (const key in student) {
    console.log(`${key}: ${student[key]}`);
  }
}

displayStudentInfo(student);
