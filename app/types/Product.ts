interface Product {
    photo: string;
    name: string;
    description: string;
    id: number;
    price: string;
    quantity: number;
  }
  interface CartContextType {
    addFunction: (product: { id: number, name: string, price: string, photo: string, quantity: number; }) => void,
    cart: Product[],
    price: string
    id: number,
    name: string,
    photo: string;
    quantity: number;
}
  export type {
    Product,
    CartContextType
  }