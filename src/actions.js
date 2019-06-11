import { 
    CHANGE_SEARCHFIELD,
    REQUEST_CHARACTERS_PENDING,
    REQUEST_CHARACTERS_SUCCESS,
    REQUEST_CHARACTERS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const requestCharacters = () => (dispatch) => {
    dispatch({ type: REQUEST_CHARACTERS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_CHARACTERS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_CHARACTERS_FAILED, payload: error }))
}