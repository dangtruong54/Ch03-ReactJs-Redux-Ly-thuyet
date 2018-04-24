import { CHANGE_SEARCH } from './../constants/index'

const  strSearch = '';

const search = (state = strSearch, action) => {
    switch (action.type) {
        case CHANGE_SEARCH:            
            return action.search; 
        default:
            return state;
    }    
  }

export default search;