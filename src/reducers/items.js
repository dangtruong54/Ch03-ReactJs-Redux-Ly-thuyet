import { DELETE_ITEM, ADD_ITEM } from './../constants/index';
import { config } from './../constants/config';
import { remove, reject } from 'lodash';
const uuidv4 = require('uuid/v4');

let defautlState = [];

let tasks = JSON.parse(localStorage.getItem(config.GET_ITEM_FROM_LOCALSTORAGE));

defautlState = (tasks !== null && tasks.length > 0) ? tasks : defautlState;

const items = (state = defautlState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      let id = action.id;
      remove(state, (item) => {
        return item.id === id;
      });
      localStorage.setItem(config.GET_ITEM_FROM_LOCALSTORAGE, JSON.stringify(state));
      return [...state];

    case ADD_ITEM:
      id = null;
      let { item } = action;
      if (item.id !== '') { //edit
        state = reject(state, { id: item.id });
        id = item.id;
      } else { // add
        id = uuidv4();
      }

      state.push({
        id: id,
        name: item.name,
        level: +item.level
      })
      localStorage.setItem(config.GET_ITEM_FROM_LOCALSTORAGE, JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default items;