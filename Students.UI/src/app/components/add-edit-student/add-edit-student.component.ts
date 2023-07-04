import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  // get data from form and save it in student variable
  @Input() student?: Student;

  @Output() studentsUpdated = new EventEmitter<Student[]>();

  constructor(private service: StudentService) {}

  ngOnInit(): void {
    
  }

  updateStudent(student: Student) {
    this.service.updateStudent(student).subscribe((students: Student[]) => this.studentsUpdated.emit(students));
  }

  deleteStudent(student: Student) {
    this.service.deleteStudent(student).subscribe((students: Student[]) => this.studentsUpdated.emit(students));
  }

  createStudent(student: Student) {
    this.service.createStudent(student).subscribe((students: Student[]) => this.studentsUpdated.emit(students));
  }
}
