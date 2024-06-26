import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
  providers: [ReactiveFormsModule]
})
export class StudentFormComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      course: ['', Validators.required],
      campus: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      newStudent.registration = Math.floor(1000 + Math.random() * 9000000);
      this.studentService.createStudent(newStudent).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }
}

