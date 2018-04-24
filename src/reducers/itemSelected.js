import { ITEM_SELECTED, ITEM_UN_SELECT } from './../constants/index';

const item_default = {
    id: '',
    name: '',
    level: 0
}

const actEditItem = (state = item_default, action) => {
    switch(action.type) {
        case ITEM_SELECTED :        
            return action.item;
        case ITEM_UN_SELECT :
            return {id: '', name: '', level: 0};
        default:
            return state;
    }
}

export default actEditItem;