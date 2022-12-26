import { createContext, Dispatch, useContext } from "react";

export interface CartState {
  product: Product,
  count: number 
}

interface CartActions {
  type: "ADD" | "REMOVE",
  payload: Product,
}


export const initialCartState = {
  state: [] as CartState[],
  dispatch: null as any
}

export const CartContext = createContext<typeof initialCartState>(initialCartState);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if(!context) {
    throw new Error("useUserContext must be withing a User Provider");
  }
}


export const cartReducer = (state: CartState[], action: CartActions) => {
  if(action.type === "ADD") {

  }
  if(action.type === 'REMOVE') {

  }
  return state
}