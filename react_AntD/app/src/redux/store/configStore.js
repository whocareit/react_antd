//数据整合
import { createStore } from 'redux';
import reducer from '../reducer';

export default () => createStore(reducer);