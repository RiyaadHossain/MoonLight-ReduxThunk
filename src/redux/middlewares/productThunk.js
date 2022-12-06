import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_LOADED, UPDATE_PRODUCT } from "../actionTypes/actionTypes"

export const getProduct = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/products')
        const { data } = await res.json()
        dispatch({ type: PRODUCT_LOADED, payload: data })
    }
}

export const addProductThunk = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        dispatch({ type: ADD_PRODUCT, payload: data })
    }
}

export const updateProductThunk = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch({ type: UPDATE_PRODUCT, payload: data })
    }
}

export const removeProductThunk = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, { method: "DELETE" })
        console.log(res)
        dispatch({ type: DELETE_PRODUCT, payload: id })
    }
}