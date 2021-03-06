import {
    FETCH_CHARACTERS_STARTED,
    FETCH_CHARACTERS_FAILURE,
    FETCH_CHARACTERS_SUCCESS
} from "./types";

import CharactersApiService from  "../services/characters";

const loadCharactersSuccess = (characters) => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: {
        ...characters,
    },
});

const loadCharactersStarted = () => ({
    type:  FETCH_CHARACTERS_STARTED,
});

const loadCharactersFailure = () => ({
    type: FETCH_CHARACTERS_FAILURE,
});

export const loadCharacters = (page = 2) => async (dispatch) => {
    dispatch(loadCharactersStarted());

    try {
        const characters = await CharactersApiService
            .getCharacters(page)
            .then((res) => res.json());

        dispatch(loadCharactersSuccess(characters));
    } catch {
        dispatch(loadCharactersFailure());
    }
};