import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Students.UI';
  students: Student[] = [];
  studentToEdit?: Student;

  // inject
  constructor(private service: StudentService) {}

  //get students list from server when component is creating
  ngOnInit(): void {
    this.service.getStudents().subscribe((result: Student[]) => this.students = result);
  }

  updateTable(students: Student[]) {
    this.students = students;
  }

  initNewStudent() {
    this.studentToEdit = new Student();
  }

  editStudent(student: Student) {
    this.studentToEdit = student;
  }

  deleteStudent(student: Student) {
    this.service.deleteStudent(student).subscribe((result: Student[]) => this.students = result);
  }
}
