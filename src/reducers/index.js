import { combineReducers } from 'redux';
import entries from './entryReducer';

const rootReducer = combineReducers({
    entries
});

export default rootReducer;