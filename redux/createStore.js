import { createStore as _createStore } from 'redux';
import reducer from './modules/reducer';

export default createStore = (data) => {
  return _createStore(reducer, data || {});
}