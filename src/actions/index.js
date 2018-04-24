import * as type from './../constants/index'

export const actCloseForm = () => {
    return { type: type.CLOSE_FORM}
}

export const actOpenForm = () => {
    return { type: type.OPEN_FORM}
}

export const actToggleForm = () => {
    return { type: type.TOGGLE_FORM}
}

export const actSearch = (search) => {
    return { 
             type: type.CHANGE_SEARCH,
             search: search
           }
}

export const actSort = (orderBy, orderDir) => {
    return { 
        type: type.SORT_ITEM,
        orderBy,
        orderDir
    }
}

export const actDeleteItem = (id) => {
    return { 
             type: type.DELETE_ITEM,
             id: id
           }
}

export const actAddItem = (item) => {
    return { 
             type: type.ADD_ITEM,
             item: item
           }
}

export const actEditItem = (item) => {
    return { 
             type: type.ITEM_SELECTED,
             item: item
           }
}

export const actUnSelecItem = () => {
    return { 
             type: type.ITEM_UN_SELECT
           }
}