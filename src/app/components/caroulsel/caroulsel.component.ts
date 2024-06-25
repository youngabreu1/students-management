import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-caroulsel',
  standalone: true,
  imports: [],
  templateUrl: './caroulsel.component.html',
  styleUrl: './caroulsel.component.css'
})
export class CaroulselComponent{
  public students: Student[] = new Array<Student>();
  
  constructor (private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    });
  }
}
