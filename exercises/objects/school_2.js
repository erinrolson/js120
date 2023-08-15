function Student(name, year) {
  return {
    name : name,
    year : year,
    courses : [],
    
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    addCourse(course) {
      this.courses.push(course);
    },
    
    listCourses() {
      console.log(this.courses);
    },
    
    addNote(code, note) {
      let updateCourse;
      // find a course with a matching code 
      this.courses.forEach(course => {
        if (course.code === code) {
          updateCourse = course;
        }
      });
      
      if (updateCourse.hasOwnProperty('note')) {
        updateCourse.note.push(note);
      } else {
        updateCourse.note = [note];
      }
    },
    
    updateNote(code, note) {
      let updateCourse;
      // find a course with a matching code 
      this.courses.forEach(course => {
        if (course.code === code) {
          updateCourse = course;
        }
      });
      
      updateCourse.note = [note];
    },
    
    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty('note')) {
          console.log(`${course.name}: ${course.note.join('; ')}`);
        }
      });
    }
  };
}

function School() {
  
  return {
    students : [],
    
    addStudent(name, year) {
      if (!School.VALID_YEARS.includes(year)) {
        console.log('Must enter valid year value');
        return undefined;
      }
      
      let newStudent = Student(name, year);
      this.students.push(newStudent);
      
      return newStudent;
    },
    
    enrollStudent(student, courseName, courseCode) {
      student.addCourse({ name: courseName, code : courseCode });
    },
    
    addGrade(student, courseName, grade) {
      let updateCourse = student.courses.filter(course => {
        course.name === courseName;
      });
      
      updateCourse.grade = grade;
    },
    
    getReportCard(student) {
      student.courses.forEach(course => {
        if (course.hasOwnProperty('grade')) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      });
    },
    
    courseReport(courseName) {
      console.log(`=${courseName}=`);
      this.students.forEach(student => {
        student.courses.forEach(course => {
          if ((course.name === courseName) && (course.hasOwnProperty('name'))) {
            console.log(`${student.name}: ${course.grade}`);
          }
        });
      });
    },
  };
}

School.VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

