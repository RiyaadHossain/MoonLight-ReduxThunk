import { addProduct, loaded, removeProduct } from "../actions/productAction"

export const getProduct = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://moon-light-server.vercel.app/products')
        const { data } = await res.json()
        dispatch(loaded(data))
    }
}

export const addProductThunk = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://moon-light-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        dispatch(addProduct(data))
    }
}

export const updateProductThunk = (id, updatedData) => {
    return async (dispatch, getState) => {
        console.log(id, updatedData);
        const res = await fetch(`https://moon-light-server.vercel.app/product/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        })
        if (res.modifiedCount) {
            dispatch(getProduct())
        }
    }
}

export const removeProductThunk = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://moon-light-server.vercel.app/product/${id}`, { method: "DELETE" })
        console.log(res)
        dispatch(removeProduct(id))
    }
}