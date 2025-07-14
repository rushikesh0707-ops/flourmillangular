import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-orders',
  imports: [MatCardModule,MatFormFieldModule,CommonModule,FormsModule,HttpClientModule,MatInputModule,MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  // orders: Order[] = [];
  // deliveryBoyId = '';

  // constructor(private orderService: OrderService) {}

  // ngOnInit(): void {
  //   this.loadOrders();
  // }

  // loadOrders() {
  //   this.orderService.getAll().subscribe(res => this.orders = res);
  // }

  // markAsPaid(orderId: number) {
  //   this.orderService.updatePaymentStatus(orderId, true).subscribe(() => {
  //     this.loadOrders();
  //   });
  // }

  // assignDelivery(orderId: number) {
  //   if (!this.deliveryBoyId) return;
  //   this.orderService.assignDeliveryBoy(orderId, +this.deliveryBoyId).subscribe(() => {
  //     this.deliveryBoyId = '';
  //     this.loadOrders();
  //   });
  // }
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe(res => this.orders = res);
   
  
  }

  markAsPaid(order: Order) {
    this.orderService.updatePaymentStatus(order.orderId, true).subscribe(() => {
      this.loadOrders();
    });
  }

  assignDelivery(order: Order) {
    const deliveryBoyId = prompt("Enter Delivery Boy ID to assign:");
    if (deliveryBoyId) {
      this.orderService.assignDeliveryBoy(order.orderId, parseInt(deliveryBoyId)).subscribe(() => {
        this.loadOrders();
      });
    }
  }

  // assignDelivery(order: Order) {
  //   const deliveryBoyId = prompt("Enter Delivery Boy ID to assign:");
  //   if (deliveryBoyId) {
  //     this.orderService.assignDeliveryBoy(order.orderId, parseInt(deliveryBoyId)).subscribe(() => {
  //       this.loadOrders();
  //     });
  //   }
  // }
  
  
}
