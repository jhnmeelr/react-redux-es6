import * as types from '../actions/actionTypes';

export default function entryReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_ENTRY:
            return [...state, Object.assign({}, action.payload.entry)];
        default:
            return state;
    }
}