export interface Products {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface Error {
  status: number,
  message: string,
} 
