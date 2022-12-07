import {
  ADD_PRODUCT,
  ADD_TO_CART,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  DELETE_PRODUCT,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../actionTypes/actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const addToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const removeFromWishlist = (product) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
