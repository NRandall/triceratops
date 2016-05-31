import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import api from '../middleware/api'
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}; 