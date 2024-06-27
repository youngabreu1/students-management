import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { StudentService } from '../../services/student.service';

@Component({
  standalone: true,
  selector: 'app-delete-modal',
  templateUrl: './delete-student-modal.component.html',
  styleUrls: ['./delete-student-modal.component.css'],
  imports: [MatDialogModule]
})
export class DeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public studentService: StudentService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.studentService.getStudent(this.data.student.id))
  }

  onYesClick(): void {
    this.studentService.deleteStudent(this.data.student.id).subscribe(() => {

      this.dialogRef.close();
    },
    error => {

    });
  }

}
