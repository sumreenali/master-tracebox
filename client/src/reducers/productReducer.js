import uuid from 'uuid';
import {GET_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, LOADING_PRODUCT} from '../actions/types';

const initialState = {
    product: [],
    loading: false
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                product: action.payload,
                loading: false
            };
        
        case DELETE_PRODUCT:
            return{
                ...state,
                product: state.product.filter(product =>product._id !== action.payload)
            }
        
        case ADD_PRODUCT:
            return{
                ...state,
                product:[action.payload,...state.product]
            } 
        
        case LOADING_PRODUCT:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
