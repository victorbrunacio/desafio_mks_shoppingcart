import { create } from "zustand";
import { CartContextType } from "@/app/types/Product";



const useCartContext = create((set) => ({
  cart: [],
  total: 0,
  numberOfItemsChoosed:0,
  addProduct: (product: CartContextType) => set((state: any) => {
    let updatedCart = [...state.cart];
    const existingProduct = updatedCart.find(item => item.id === product.id);

    if (existingProduct) {
      // product exists, increment quantity and adjust total
      existingProduct.quantity += product.quantity;
      const updatedTotal = state.total + (parseFloat(product.price) * product.quantity);
      return { cart: updatedCart, total: updatedTotal } 
    } else {
      // product not in cart, add it
      updatedCart = [...updatedCart, product];
      const updatedTotal = state.total + parseFloat(product.price);
      return { cart: updatedCart, total: updatedTotal };
    }
  }),
  removeProduct: (productId: any) => set((state: any) => {
    const newCart = state.cart.filter((item: any) => item.id !== productId);
    const newCartTotal = newCart.reduce((total: number, item: any) => total + parseFloat(item.price), 0);
    return { cart: newCart, total: newCartTotal };
  }),
  updateCartItemQuantity: (productId: any, quantity: number) => set((state: any) => {
  const newCart = state.cart.map((item: any) => {
    if (item.id === productId) {
      console.log(state)
      return { ...item, quantity };
    }
    return item;
  });
  const newCartTotal = newCart.reduce((total: number, item: any) => total + (parseFloat(item.price) * item.quantity), 0);
  return { cart: newCart, total: newCartTotal };
}),
}))

export default useCartContext;
