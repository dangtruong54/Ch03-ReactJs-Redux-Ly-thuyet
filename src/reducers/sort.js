import { SORT_ITEM } from './../constants/index'

const  Sort = {
        orderBy     : 'name', 
        orderDir    : 'asc',   
    };

const sort = (state = Sort, action) => {
    switch (action.type) {
        case SORT_ITEM:
            let {orderBy, orderDir} = action;
            return {orderBy, orderDir}; 
        default:
            return state;
    }    
  }

export default sort;