import { createStore } from 'redux';
import  mainReducer './reducers'

const store = createStore(
    mainReducer
);

export default store;
