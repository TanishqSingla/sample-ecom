import { createContext, Dispatch, useContext } from "react";

export interface CartState {
  product: Product,
  count: number 
}

interface CartActions {
  type: "ADD" | "REMOVE",
  payload: Product,
}


export const CartContext = createContext<[CartState[], Dispatch<CartActions>]>([[], () => {}]);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if(!context) {
    throw new Error("useUserContext must be withing a User Provider");
  }
  return context;
}


export const cartReducer = (state: CartState[], action: CartActions) => {
  if(action.type === "ADD") {
    const exists = state.findIndex(cart => action.payload.id === cart.product.id)
    if(exists > -1) {
      return [...state, {product: action.payload, count: state[exists].count + 1}];
    }
    return [...state, {product: action.payload, count: 1}]
  }
  if(action.type === 'REMOVE') {
    return state.filter(cart => cart.product.id !== action.payload.id);
  }
  return state;
}