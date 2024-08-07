let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 21, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' }
  ];
  
  // a. Add a Student
  function addStudent(student) {
    students.push(student);
  }
  
  // b. Update Student Information
  function updateStudent(id, newInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
      Object.assign(student, newInfo);
    }
  }
  
  // c. Delete a Student
  function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
  }
  
  // d. List All Students
  function listAllStudents() {
    console.log(students);
  }
  
  // e. Find Students by Grade
  function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
  }
  
  // f. Calculate Average Age
  function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }

  