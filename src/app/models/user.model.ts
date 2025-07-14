export interface User {
    id: number;
    fullName: string;
    email: string;
    passwordHash: string;
    role: Role;
  }
  
  export enum Role {
    User = 0,
    Admin = 1,
    DeliveryBoy = 2
  }
  