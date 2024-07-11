import React, { createContext, useReducer, useContext } from 'react';

// Create a context
const BagContext = createContext();

// Define initial state
const initialState = {
  items: []
};

// Define reducer
const bagReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BAG': {
      const product = action.payload;
      const existingProductIndex = state.items.findIndex(
        item => item.name === product.name && item.size === product.size
      );

      let newItems;

      if (existingProductIndex >= 0) {
        // Product exists in bag, increase quantity
        newItems = state.items.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to bag
        newItems = [...state.items, { ...product, quantity: 1 }];
      }

      return { ...state, items: newItems };
    }
    case 'DELETE_FROM_BAG': {
      const { name, size } = action.payload;

      return {
        ...state,
        items: state.items.filter(item => !(item.name === name && item.size === size)),
      };
    }
    case 'UPDATE_QUANTITY': {
      const { name, size, quantity } = action.payload;
      const productIndex = state.items.findIndex(
        item => item.name === name && item.size === size
      );

      if (productIndex >= 0) {
        const newItems = state.items.map((item, index) =>
          index === productIndex
            ? { ...item, quantity }
            : item
        );
        return { ...state, items: newItems };
      }

      return state;
    }
    default:
      return state;
  }
};

// Create a provider component
export const BagProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bagReducer, initialState);

  return (
    <BagContext.Provider value={{ state, dispatch }}>
      {children}
    </BagContext.Provider>
  );
};

// Custom hook to use the BagContext
export const useBag = () => {
  return useContext(BagContext);
};
