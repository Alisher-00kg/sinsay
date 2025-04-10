import { createContext, useReducer, useState } from "react";
import { data } from "../utils/constants/CardItem";
import { findProductById } from "../utils/helpers/helpers";

export const ProductsContext = createContext();
const initialState = {
  productsCatalog: data,
  basket: [],
  favorites: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addToBasketFromMain": {
      const existing = state.basket.find((item) => item.id === action.id);
      const product = findProductById(state.productsCatalog, action.id);
      if (!product) return state;
      if (!existing) {
        return {
          ...state,
          basket: [
            ...state.basket,
            { ...product, totalPrice: product.price, amount: 1 },
          ],
        };
      }
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? {
                ...item,
                amount: item.amount + 1,
                totalPrice: item.totalPrice + product.price,
              }
            : item
        ),
      };
    }
    case "deleteFromBasket":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    case "decrement":
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id && item.amount > 1) {
            return {
              ...item,
              amount: item.amount - 1,
              totalPrice: item.totalPrice - item.price,
            };
          }
          return item;
        }),
      };
    case "increament":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? {
                ...item,
                amount: item.amount + 1,
                totalPrice: item.totalPrice + item.price,
              }
            : item
        ),
      };
    case "addTofavor": {
      const isFavorite = state.favorites.find((item) => item.id === action.id);
      const product = findProductById(state.productsCatalog, action.id);
      if (!product) return state;
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((item) => item.id !== action.id)
          : [...state.favorites, product],
        productsCatalog: state.productsCatalog.map((section) => ({
          ...section,
          products: section.products.map((item) =>
            item.id === action.id ? { ...item, isFavorite: !isFavorite } : item
          ),
        })),
      };
    }
    case "addCardFromFavor": {
      const existing = state.basket.find((item) => item.id === action.id);
      const product = state.favorites.find((item) => item.id === action.id);
      if (!product) return state;
      if (!existing) {
        return {
          ...state,
          basket: [
            ...state.basket,
            { ...product, totalPrice: product.price, amount: 1 },
          ],
        };
      }
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? {
                ...item,
                totalPrice: item.totalPrice + product.price,
                amount: item.amount + 1,
              }
            : item
        ),
      };
    }
    case "deleteFromFavor":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.id),
        productsCatalog: state.productsCatalog.map((section) => ({
          ...section,
          products: section.products.map((product) =>
            product.id === action.id
              ? { ...product, isFavorite: false }
              : product
          ),
        })),
      };
    default:
      return state;
  }
};

export const ProductsProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [path, setPath] = useState("sign-in");

  const addToFavor = (id) => dispatch({ type: "addTofavor", id });
  const deleteFromFavor = (id) => dispatch({ type: "deleteFromFavor", id });
  const addCardFromFavor = (id) => dispatch({ type: "addCardFromFavor", id });
  const increment = (id) => dispatch({ type: "increament", id });
  const decrement = (id) => dispatch({ type: "decrement", id });
  const deleteFromBasket = (id) => dispatch({ type: "deleteFromBasket", id });
  const addToBasketFromMain = (id) =>
    dispatch({ type: "addToBasketFromMain", id });

  const [valueInput, setInputValue] = useState("");
  const [inputVisible, setInputvisible] = useState(false);
  const findedMassiveItem = state.productsCatalog.map((item) => ({
    id: item.id,
    products: item.products.filter((item) =>
      item.title.toLowerCase().includes(valueInput)
    ),
  }));

  const blurs = (visible) => {
    setInputvisible(visible), setInputValue("");
  };
  const searchMassive = valueInput ? findedMassiveItem : state.productsCatalog;
  const legthMassive = searchMassive.find((i) => i.products.length > 0);

  return (
    <ProductsContext.Provider
      value={{
        dispatch,
        state,
        path,
        setPath,
        addToFavor,
        deleteFromFavor,
        addCardFromFavor,
        increment,
        decrement,
        deleteFromBasket,
        addToBasketFromMain,
        searchMassive,
        inputVisible,
        setInputvisible,
        setInputValue,
        valueInput,
        blurs,
        legthMassive,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
