import { TOGGLE_STOCK, TOGGLE_BRAND, CLEAR_FILTER, KEYWORD } from "../actionTypes/actionTypes"

const initialState = {
    filter: {
        brands: [],
        stock: false
    },
    keyword: ''
}

export const filterReducer = (state = initialState, action) => {

    const allFilters = state.filter

    switch (action.type) {
        case TOGGLE_BRAND:
            if (!allFilters.brands.includes(action.payload)) {
                return {
                    ...state, filter: { ...allFilters, brands: [...allFilters.brands, action.payload] }
                }
            } else {
                return {
                    ...state, filter: { ...allFilters, brands: allFilters.brands.filter(brand => brand !== action.payload) }
                }
            }
        case TOGGLE_STOCK:
            return { ...state, filter: { ...allFilters, stock: !allFilters.stock } }
        case CLEAR_FILTER:
            return { ...state, filter: { brands: [], stock: false } }
        case KEYWORD:
            return { ...state, keyword: action.payload }
        default:
            return state
    }
}