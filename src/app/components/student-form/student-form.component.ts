import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {provideNgxMask, NgxMaskDirective} from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
  providers: [provideNgxMask(),ReactiveFormsModule]
})
export class StudentFormComponent implements OnInit{
  studentForm: FormGroup;
  isEdit: boolean = false;
  studentId: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      course: ['', Validators.required],
      campus: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.studentId = id;
        this.studentService.getStudent(id).subscribe(student => {
          this.studentForm.patchValue(student);
        });
      }
    });
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      if(this.isEdit){
      const newStudent: Student = this.studentForm.value;
      newStudent.registration = Math.floor(1000 + Math.random() * 9000000);
        this.studentService.updateStudent(this.studentId, newStudent).subscribe(() => {
          this.toastr.success('Aluno atualizado com sucesso!');
          this.router.navigate(['/students']);
        });
      }
      else {
      const newStudent: Student = this.studentForm.value;
      newStudent.registration = Math.floor(1000 + Math.random() * 9000000);
      this.studentService.createStudent(newStudent).subscribe(() => {
        this.toastr.success('Aluno criado com sucesso!');
        this.router.navigate(['/students'])});
      };
    }
  }
}

