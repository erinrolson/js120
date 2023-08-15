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
    
    
  }
}

let foo = Student('Foo', '1st');
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