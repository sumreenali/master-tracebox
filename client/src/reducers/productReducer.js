import uuid from 'uuid';
import {GET_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from '../actions/types';

const initialState = {
    product: [
        {
            id:uuid(),
            productCount:1,
            image:'abcd image',
            name:'Nevea Honey Lotion',
            description:'Honey Lotion 500 ml bottle',
            price:'500',
            quantity:'20',
            date:Date.now(),
            status:'active'
        },
        {
           id:uuid(),
           productCount:1,
           image:'abcd image',
           name:'Loreal Red Lipstick',
           description:'Red Lipstick',
           price:'500',
           quantity:'20',
           date:Date.now(),
           status:'active'
       },
    ]
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state
            };
        default:
            return state;
    }
}