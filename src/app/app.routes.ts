import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'messages',
        loadComponent: () =>
          import('./features/messages/messages/messages.component').then(m => m.MessagesComponent)
      },
      {
        path: 'partners',
        loadComponent: () =>
          import('./features/partners/partners.component').then(m => m.PartnersComponent)
      },
      { path: '', redirectTo: 'messages', pathMatch: 'full' }
    ]
  }
];
