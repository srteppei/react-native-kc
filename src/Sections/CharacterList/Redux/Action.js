import * as Types from './Types';
import * as CharacterInteractor from '../../Commons/Interactors/Characters/GetCharactersInteractors';

function updateCharacterList (value) {
    return {
        type: Types.FETCHING_CHARACTER_LIST,
        value: value
    }
}

export function updateCharacterSelected (value){
    return {
        type: Types.CHARACTER_SELECTED,
        value: value
    }
}

export function fetchCharacterList() {
    return async (dispatch, getState) => {
        try {
            const characterList = await CharacterInteractor.getCharacters();
            dispatch(updateCharacterList(characterList));
        } catch (error) {
            console.log('fetching character list error:',error);
        }
    }
}