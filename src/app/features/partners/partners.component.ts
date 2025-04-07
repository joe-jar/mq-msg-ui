import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Partner } from '../../core/models/partner.model';
import { PartnerService } from '../../core/services/partners/partners.service';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  private readonly partnerService = inject(PartnerService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);

  partners: Partner[] = [];
  displayedColumns = [
    'alias',
    'type',
    'direction',
    'application',
    'processedFlowType',
    'description',
    'actions'
  ];

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners(): void {
    this.partnerService.getAll().subscribe({
      next: (data) => (this.partners = data),
      error: () => this.snackBar.open('Failed to load partners.', 'Close', { duration: 4000 })
    });
  }

  async addPartner(): Promise<void> {
    const { PartnerFormDialogComponent } = await import('./partner-form-dialog/partner-form-dialog.component');

    const dialogRef = this.dialog.open(PartnerFormDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: Partner | undefined) => {
      if (result) {
        this.partnerService.create(result).subscribe({
          next: (created) => {
            this.partners = [...this.partners, created];
            this.snackBar.open('Partner added successfully!', 'Close', { duration: 3000 });
          },
          error: () => this.snackBar.open('Failed to add partner.', 'Close', { duration: 3000 })
        });
      }
    });
  }

  async confirmDelete(partner: Partner): Promise<void> {
    const { PartnerConfirmDeleteDialogComponent } = await import('./partner-confirm-delete-dialog/partner-confirm-delete-dialog.component');

    const dialogRef = this.dialog.open(PartnerConfirmDeleteDialogComponent, {
      width: '350px',
      data: { name: partner.alias }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deletePartner(partner);
      }
    });
  }

  deletePartner(partner: Partner): void {
    if (!partner.id) {
      this.snackBar.open('⚠️ Missing partner ID', 'Close', { duration: 3000 });
      return;
    }

    this.partnerService.delete(partner.id).subscribe({
      next: () => {
        this.partners = this.partners.filter(p => p.id !== partner.id);
        this.snackBar.open('Partner deleted', 'Close', { duration: 3000 });
      },
      error: () => {
        this.snackBar.open('Error deleting partner', 'Close', { duration: 3000 });
      }
    });
  }

  getFlowIcon(type: string): string {
    switch (type) {
      case 'MESSAGE': return 'mail';
      case 'ALERTING': return 'warning';
      case 'NOTIFICATION': return 'notifications';
      default: return 'help_outline';
    }
  }

  getFlowIconColor(type: string): string {
    switch (type) {
      case 'MESSAGE': return 'flow-message';
      case 'ALERTING': return 'flow-alert';
      case 'NOTIFICATION': return 'flow-notify';
      default: return '';
    }
  }

  trackById(index: number, item: Partner): number | undefined {
    return item.id;
  }
}
