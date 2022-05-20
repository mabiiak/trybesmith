export interface Products {
  id: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface Users {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Error {
  status: number,
  message: string,
}

export interface Order {
  id: number,
  userId: number,
  productsIds?: [number],
}
