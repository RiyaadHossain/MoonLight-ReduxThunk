import {
  ADD_PRODUCT,
  ADD_TO_CART,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  DELETE_PRODUCT,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  products: [],
  wishlist: []
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload?._id
  );

  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };

    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    case ADD_TO_WISHLIST:
      const exist = state.wishlist.find(product => product._id === action.payload._id)
      if (JSON.stringify(exist)) {
        return { ...state }
      }
      return { ...state, wishlist: [...state.wishlist, action.payload] }
      
      case REMOVE_FROM_WISHLIST:
      return { ...state, wishlist: [...state.wishlist.filter(product => product._id !== action.payload._id)] }

    case PRODUCT_LOADED:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
