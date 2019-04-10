/** API ROOT URL **/
//export const ROOT_URL = 'https://api.gousto.co.uk/products/v2.0';
export const ROOT_URL = 'http://localhost:3000';

/** API TYPES */
export const NEW_REQUEST = '@@api/NEW_REQUEST';
export const REQUEST_START = '@@api/REQUEST_START';
export const REQUEST_END = '@@api/REQUEST_END';
export const ACCESS_DENIED = '@@api/ACCESS_DENIED';
export const REQUEST_ERROR = '@@api/REQUEST_ERROR';

/** CATEGORIES TYPES */
export const CATEGORIES_FETCH_START = '@@categories/CATEGORIES_FETCH_START';
export const CATEGORIES_FETCH_SUCCESS = '@@categories/CATEGORIES_FETCH_SUCCESS';
export const CATEGORIES_FETCH_FAILED = '@@categories/CATEGORIES_FETCH_FAILED';

/** PRODUCT TYPES */
export const PRODUCTS_FETCH_START = '@@products/PRODUCTS_FETCH_START';
export const SET_PRODUCTS = '@@products/SET_PRODUCTS';
export const PRODUCTS_FETCH_FAILED = '@@products/PRODUCTS_FETCH_FAILED';
