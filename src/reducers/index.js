import { ADD_TO_CART, SET_BREADCRUMB, SET_SEARCH } from "../actions/types";


const initialState = {
    search: "",
    breadcrumb: false,
    cart: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BREADCRUMB:
            return { ...state, breadcrumb: action.payload };
        case SET_SEARCH:
            return {...state, search: action.payload}
        case ADD_TO_CART:
            return {...state, cart: action.payload}
        default:
            return state;
    }
    
}