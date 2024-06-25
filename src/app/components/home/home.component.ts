import { Component, OnInit } from '@angular/core';
import { CaroulselComponent } from '../caroulsel/caroulsel.component';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CaroulselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent{
  students: Student[] = new Array<Student>();

  constructor(private studentService: StudentService) { }
  
}
