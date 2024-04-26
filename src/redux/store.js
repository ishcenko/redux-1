import { combineReducers, createStore } from 'redux';
import { postDetailsReducer } from './postDetailsReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
const rootReducer = combineReducers({
  postDetails: postDetailsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
