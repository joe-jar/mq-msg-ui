import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Message } from '../../../core/models/message.model';
import { PaginatedResponse } from '../../../core/models/paginatedResponse.model';
import { MessageService } from '../../../core/services/messages/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  private readonly messageService = inject(MessageService);
  private readonly dialog = inject(MatDialog);

  displayedColumns = ['id', 'sourceQueue', 'receivedAt', 'actions'];
  dataSource = new MatTableDataSource<Message>();

  totalElements = 0;
  pageSize = 10;
  currentPage = 0;

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages(): void {
    this.messageService.getMessages(this.currentPage, this.pageSize)
      .subscribe((res: PaginatedResponse<Message>) => {
        this.dataSource = new MatTableDataSource<Message>(res.content);
        this.totalElements = res.totalElements;
      });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.fetchMessages();
  }

  async showDetails(message: Message): Promise<void> {
    const { MessageDetailDialogComponent } = await import('./message-detail-dialog/message-detail-dialog.component');

    this.dialog.open(MessageDetailDialogComponent, {
      data: message,
      width: '500px',
      autoFocus: false
    });
  }
}
