import * as actions from './actions';
import { 
    CHANGE_SEARCHFIELD,
    REQUEST_CHARACTERS_PENDING,
    REQUEST_CHARACTERS_SUCCESS,
    REQUEST_CHARACTERS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search characters', () => {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    };
    
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting characters API', () => {
    const store = mockStore();
    store.dispatch(actions.requestCharacters());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_CHARACTERS_PENDING
    };

    expect(action[0]).toEqual(expectedAction);

})