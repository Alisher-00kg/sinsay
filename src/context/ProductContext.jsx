import React, { createContext, useReducer } from "react";
const ProductContext = createContext({});
const initialState = {
  mainMassive: data,
  basketMassive: [],
  favorArray: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addToBasketFromMain":
      const findedObj = state.basketMassive.find(
        (item) => item.id === action.id
      );
      if (!findedObj) {
        const findedObjOfMain = state.mainMassive
          .find((item) => item.products.find((item) => item.id === action.id))
          .products.find((item) => item.id === action.id);
        return {
          ...state,
          basketMassive: [
            ...state.basketMassive,
            {
              ...findedObjOfMain,
              totalPrice: findedObjOfMain.price,
              amount: 1,
            },
          ],
        };
      } else {
        const findedObjOfMain = state.mainMassive
          .find((item) => item.products.find((item) => item.id === action.id))
          .products.find((item) => item.id === action.id);
        return {
          ...state,
          basketMassive: state.basketMassive.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  amount: item.amount + 1,
                  totalPrice: item.totalPrice + findedObjOfMain.price,
                }
              : item
          ),
        };
      }
    case "deleteFromBasket":
      return {
        ...state,
        basketMassive: state.basketMassive.filter(
          (item) => item.id !== action.id
        ),
      };
    case "increment":
      return {
        ...state,
        basketMassive: state.basketMassive.map((item) =>
          item.id === action.id
            ? {
                ...item,
                amount: item.amount + 1,
                totalPrice: item.totalPrice + item.price,
              }
            : item
        ),
      };
    case "decrement":
      return {
        ...state,
        basketMassive: state.basketMassive
          .map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  totalPrice: item.totalPrice - item.price,
                  amount: item.amount - 1,
                }
              : item
          )
          .filter((item) => item.amount > 0),
      };
    case "addTofavor":
      const findedFavor = state.favorArray.find(
        (item) => item.id === action.id
      );

      if (!findedFavor) {
        const findedObjOfMain = state.mainMassive
          .find((item) => item.products.find((item) => item.id === action.id))
          .products.find((item) => item.id === action.id);

        return {
          ...state,
          favorArray: [...state.favorArray, findedObjOfMain],
          mainMassive: state.mainMassive.map((item) => ({
            ...item,
            products: item.products.map((product) =>
              product.id === action.id
                ? { ...product, isFavorite: true }
                : product
            ),
          })),
        };
      } else {
        return {
          ...state,
          mainMassive: state.mainMassive.map((item) => ({
            ...item,
            products: item.products.map((product) =>
              product.id === action.id
                ? { ...product, isFavorite: false }
                : product
            ),
          })),
          favorArray: state.favorArray.filter((item) => item.id !== action.id),
        };
      }
    case "addCardFromFavor":
      const findedobj = state.basketMassive.find(
        (item) => item.id === action.id
      );

      if (!findedobj) {
        const findOfFavorCard = state.favorArray.find(
          (item) => item.id === action.id
        );
        return {
          ...state,
          basketMassive: [
            ...state.basketMassive,
            {
              ...findOfFavorCard,
              totalPrice: findOfFavorCard.price,
              amount: 1,
            },
          ],
        };
      } else {
        const findOfFavorCard = state.favorArray.find(
          (item) => item.id === action.id
        );
        return {
          ...state,
          basketMassive: state.basketMassive.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  totalPrice: item.totalPrice + findOfFavorCard.price,
                  amount: item.amount + 1,
                }
              : item
          ),
        };
      }
    case "deleteFromFavor":
      return {
        ...state,
        favorArray: state.favorArray.filter((item) => item.id !== action.id),
        mainMassive: state.mainMassive.map((item) => ({
          ...item,
          products: item.products.map((item) =>
            item.id === action.id ? { ...item, isFavorite: false } : item
          ),
        })),
      };
    default:
      return state;
  }
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [bool, setBool] = useState("MainPage");
  const addTofavor = (id) => {
    dispatch({ type: "addTofavor", id: id });
  };
  const deleteFromFavor = (id) => {
    dispatch({ type: "deleteFromFavor", id: id });
  };
  const addCardFromFavor = (id) => {
    dispatch({ type: "addCardFromFavor", id: id });
  };
  const increament = (id) => {
    dispatch({ type: "increament", id: id });
  };
  const decrement = (id) => {
    dispatch({ type: "decrement", id: id });
  };
  const deleteFromBasket = (id) => {
    dispatch({ type: "deleteFromBasket", id: id });
  };
  const addToBasketFromMain = (id) => {
    dispatch({ type: "addToBasketFromMain", id: id });
  };
  return (
    <ProductContext.Provider
      value={{
        dispatch,
        state,
        bool,
        setBool,
        addTofavor,
        deleteFromFavor,
        addCardFromFavor,
        increament,
        decrement,
        deleteFromBasket,
        addToBasketFromMain,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
