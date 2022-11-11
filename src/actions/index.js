import { SET_BREADCRUMB, SET_SEARCH, ADD_TO_CART } from './types';

export const setBreadcrumb = (payload) => ({
  type: SET_BREADCRUMB,
  payload,
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload
})

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload
})
