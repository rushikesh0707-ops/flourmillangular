export interface Order {
    orderId: number;
    userName: string;
    phone: string;
    address: string;
    totalAmount: number;
    isPaid: boolean;
    deliveryBoyName?: string;
    status: string;
    deliveryBoyId : number;
  }
  