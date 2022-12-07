import { CLEAR_FILTER, KEYWORD, TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const toggleBrand = (brand) => {
    return { type: TOGGLE_BRAND, payload: brand }
}

export const toggleStock = () => {
    return { type: TOGGLE_STOCK}
}

export const clearFilter = () => {
    return { type: CLEAR_FILTER}
}

export const search = (keyword) => {
    return { type: KEYWORD, payload: keyword}
}