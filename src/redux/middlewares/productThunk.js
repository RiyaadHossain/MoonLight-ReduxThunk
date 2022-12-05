import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_LOADED, UPDATE_PRODUCT } from "../actionTypes/actionTypes"

export const getProduct = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch({type: PRODUCT_LOADED, payload: data})
    }
}

export const addProduct = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch({type: ADD_PRODUCT, payload: data})
    }
}

export const updateProduct = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch({type: UPDATE_PRODUCT, payload: data})
    }
}

export const deleteProduct = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch({type: DELETE_PRODUCT, payload: data})
    }
}