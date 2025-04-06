import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { Partner } from '../../../core/models/partner.model';

@Component({
  selector: 'app-partner-form-dialog',
  standalone: true,
  templateUrl: './partner-form-dialog.component.html',
  styleUrls: ['./partner-form-dialog.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class PartnerFormDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PartnerFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Partner
  ) {
    this.form = this.fb.group({
      alias: [data?.alias ?? '', Validators.required],
      type: [data?.type ?? '', Validators.required],
      direction: [data?.direction ?? '', Validators.required],
      application: [data?.application ?? ''],
      processedFlowType: [data?.processedFlowType ?? '', Validators.required],
      description: [data?.description ?? '', Validators.required]
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value as Partner); //  returns data to parent
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
