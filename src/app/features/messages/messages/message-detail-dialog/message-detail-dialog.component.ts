import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-message-detail-dialog',
  standalone: true,
  templateUrl: './message-detail-dialog.component.html',
  styleUrls: ['./message-detail-dialog.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MessageDetailDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MessageDetailDialogComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
