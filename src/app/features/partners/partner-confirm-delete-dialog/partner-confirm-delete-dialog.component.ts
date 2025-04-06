import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-partner-confirm-delete-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './partner-confirm-delete-dialog.component.html',
  styleUrls: ['./partner-confirm-delete-dialog.component.scss']
})
export class PartnerConfirmDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PartnerConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}
}
