import { TOGGLE_STOCK, TOGGLE_BRAND } from "../actionTypes/actionTypes"

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
                    ...state, filter: {...allFilters, brands: allFilters.brands.filter(brand => brand !== action.payload)}
                }
            }
        case TOGGLE_STOCK:
            return { ...state, filter: { ...allFilters, stock: !allFilters.stock } }
        default:
            return state
    }
}