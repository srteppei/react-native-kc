import * as Types from './Types';

const initialState = {
    characterList: [],
}

export default function reducer (state = initialState, action = {}) {
    switch (action.type) {
        case Types.FETCHING_CHARACTER_LIST:
            return {
                ...state,
                characterList: action.value
            };
        case Types.CHARACTER_SELECTED:
            return {
                ...state,
                item: action.value
            }
            default:
                return state;
    }
}