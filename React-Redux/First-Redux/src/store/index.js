import { createStore } from 'redux';
import rootReduceers from './rootReduceer';

const Store = createStore(rootReduceers);

export default Store;
