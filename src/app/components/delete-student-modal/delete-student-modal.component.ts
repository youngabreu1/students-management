import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../../services/student.service';

@Component({
  standalone: true,
  selector: 'app-delete-modal',
  templateUrl: './delete-student-modal.component.html',
  styleUrls: ['./delete-student-modal.component.css'],
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
    // Aqui você pode implementar a lógica de deleção
    // Por exemplo, chamar um método no serviço para deletar o aluno
    this.studentService.deleteStudent(this.data.student.id).subscribe(() => {
      // Lógica de sucesso
      this.dialogRef.close();
    }, error => {
      // Lógica de tratamento de erro
    });
  }

}
