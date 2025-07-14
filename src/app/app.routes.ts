import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: LayoutComponent,
        children: [
          { path: 'products', loadComponent: () => import('./admin/products/products.component').then(m => m.ProductsComponent) },
          { path: 'orders', loadComponent: () => import('./admin/orders/orders.component').then(m => m.OrdersComponent) },
          { path: 'payments', loadComponent: () => import('./admin/payments/payments.component').then(m => m.PaymentsComponent) },
          { path: '', redirectTo: 'products', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
];
