import {combineReducers} from 'redux';
import isShowForm from './isShowForm';
import sort from './sort';
import search from './search';
import items from './items';
import itemSelected from './itemSelected';

export const todoApp = combineReducers({
    isShowForm,
    sort,
    items,
    search,
    itemSelected
})

//export const todoApp;