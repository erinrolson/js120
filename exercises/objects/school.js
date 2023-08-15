function CreateSchool() {
  return {
    GRADE_YEARS : ['1st', '2nd', '3rd', '4th', '5th'],
    
    students : [],
    
    addStudent : function(name, year) {
      if ( this.validGradeYear(year) ) {
        let newStudent = new CreateStudent(name, year);
        this.students.push( newStudent );
        return newStudent;
      } 
      console.log('Invalid Year.'); // <-- should this be standalone or another function?
    },
    
    enrollStudent: function(student, courseObj) {
      student.addCourse(courseObj);
    },
    
    addGrade : function(student, courseCode, grade) {
      //find the course using code 
      let course = student.courses.filter( course => course.code === courseCode).pop();
      
      // give grade property and assign value
      course.grade = grade;
    },
    
    getReportCard : function(student) {
      student.courses.forEach( course => {
        console.log(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
      });
    },
    
    courseReport : function(courseName) {
      let courseGrades = [];
      let studentCourseRecords = [];
      
      this.students.forEach( student => {
        let courseMatch = student.courses
                          .filter( course => (course.name === courseName && course.grade != undefined)).pop();
        if ( courseMatch ) {
          courseMatch.studentName = student.name;
          studentCourseRecords.push(courseMatch);
        }
      });
      
      if (!studentCourseRecords.length) {
        console.log('undefined');
        return;
      };
      
      console.log(`=${courseName} Grades=`);
      
      studentCourseRecords.forEach( course => courseGrades.push(course.grade));
      
      let average = (courseGrades.reduce( (sum, grade) => sum + grade) / courseGrades.length);
      
      studentCourseRecords.forEach( record => console.log(`${record.studentName}: ${record.grade}`));
      console.log(`---`);
      console.log(`Course Average: ${average}`);
    },
    
    validGradeYear : function(year) {
      return this.GRADE_YEARS.includes(year);
    },
  }
}

function CreateStudent(name, year) {
  return {
    
    'name' : name,
    'year' : year,
    'courses' : [],
    
    info : function () {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    
    addCourse : function (courseObj) {
      this.courses.push(courseObj);
    },
    
    listCourses : function () {
      console.log(this.courses);
    },
    
    addNote : function (code, note) {
      for (let course of this.courses) {
        if (course.code === code) {
          course.note = (course.note) ? `${course.note}; ${note}` : note;
          break;
        }
      }
    },
    
    updateNote : function (code, note) {
      for (let course of this.courses) {
        if (course.code === code) {
          course.note = note;
          break;
        }
      }
    },
    
    viewNotes : function () {
      this.courses.forEach( course => {
        if (course.hasOwnProperty('note')) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  }
}

let school = CreateSchool();

let foo = school.addStudent('Foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);


let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101});
school.addGrade(bar, 101, 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101});
school.enrollStudent(qux, { name: 'Advanced Math', code: 102});
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

//school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics'); // not working right



