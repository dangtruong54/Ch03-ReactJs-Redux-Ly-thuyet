import { createStore } from 'redux';
import { todoApp } from './reducers/index';
// import { actCloseForm, actOpenForm, actToggleForm, actSort } from './actions/index';

const store = createStore(
    todoApp, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
// console.log('INIT', store.getState());

// // subscribe
store.subscribe(() =>{
    
})

// // Close Form
// store.dispatch(actCloseForm());
// console.log('CLOSE_FORM', store.getState());

// // Open Form
// store.dispatch(actOpenForm());
// console.log('OPENFORM', store.getState());

// // Toggle Form
// store.dispatch(actToggleForm());
// console.log('TOGGLEFORM', store.getState());

// // Sort
// store.dispatch(actSort('level', 'desc'));
// console.log('SORTITEM', store.getState());

export default store;