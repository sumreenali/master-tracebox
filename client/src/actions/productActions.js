import axios from 'axios'
import { GET_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, LOADING_PRODUCT } from './types'

export const getProducts = () => dispatch => {
    dispatch(setLoadingProduct());
    axios.get('/api/product')
    .then( res =>
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        ); 
};

export const addProduct = product => dispatch =>{
    axios.post('/api/product', product)
    .then( res => dispatch({
        type: ADD_PRODUCT,
        payload: res.data
    }))
    
};

export const deleteProduct = id => dispatch =>{
    axios.delete(`/api/product/:${id}`)
    .then(res => dispatch({
        type: DELETE_PRODUCT,
        payload: res.id
    }))
};



export const setLoadingProduct = () =>{
    return{
        type: LOADING_PRODUCT,
        
    };
};
