import { createContext, useContext, useReducer } from "react";
import { Pluser } from "../helper/titleName";
const CartContext = createContext();

const initialstate = {
  selectedItem: [],
  counterItem: 0,
  total: 0,
  chekOut: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...Pluser(state.selectedItem),
        chekOut: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...Pluser(newSelectedItem),
      };
    case "INCREASE":
      const index = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[index].quantity++;
      return {
        ...state,
        ...Pluser(state.selectedItem),
      };
    case "DECREASE":
      const indexkam = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexkam].quantity--;
      return {
        ...state,
        ...Pluser(state.selectedItem),
      };
    case "CHECK_OUT":
      return {
        selectedItem: [],
        counterItem: 0,
        total: 0,
        chekOut: true,
      };

    default:
    // console.log(error);
  }
};
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialstate);
  // console.log(state);
  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

const useCard = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCard };
