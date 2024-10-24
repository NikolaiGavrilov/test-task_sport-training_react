import { createStore } from 'redux';
import discountsReducer from './discountsReducer';

const store = createStore(discountsReducer);

export default store;