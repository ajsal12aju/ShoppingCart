import { ADD_TO_CART } from "./constant";


export const cartDta = (data = [], action) => {
 
    // handle actions and update the state accordingly
    if(action.type === ADD_TO_CART){
        console.warn('hello', action);
        return data;

    }else{
        return "no actions hvgjhgh called"
    }
  };
  