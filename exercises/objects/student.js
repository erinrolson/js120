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

let foo = CreateStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"