import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://flourmillapp-production.up.railway.app/api/admin/orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}`);
  }

//   assignDeliveryBoy(orderId: number, deliveryBoyId: number): Observable<any> {
//     return this.http.put<void>(`${this.apiUrl}/${orderId}/assign-delivery-boy?deliveryBoyId=${deliveryBoyId}`, {});
//   }

assignDeliveryBoy(orderId: number, deliveryBoyId: number): Observable<any> {
    // ✅ Fix: set responseType to 'text' to avoid parse error
    return this.http.put(`${this.apiUrl}/${orderId}/assign-delivery-boy?deliveryBoyId=${deliveryBoyId}`, {}, {
      responseType: 'text' as 'json'
    });
  }

  updatePaymentStatus(orderId: number, isPaid: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/${orderId}/payment-status?isPaid=${isPaid}`, {});
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:5133/api/users/${id}`);
  }
}
