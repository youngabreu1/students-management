import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
// existing imports
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-student-modal/delete-student-modal.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {
  students: Student[] = new Array<Student>();
  constructor(private studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    });
  }

  openDeleteModal(student: Student): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '400px',
      data: { student }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aqui você pode adicionar lógica após o fechamento do modal
      this.studentService.getStudents().subscribe((students: Student[]) => {
        this.students = students;
      });
    });
  }
}
