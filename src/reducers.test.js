import { 
    CHANGE_SEARCHFIELD,
    REQUEST_CHARACTERS_PENDING,
    REQUEST_CHARACTERS_SUCCESS,
    REQUEST_CHARACTERS_FAILED
} from './constants';

import * as reducers from './reducers';
import { exportAllDeclaration } from '@babel/types';

describe('searchCharacters', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('should return the intial state', () => {
        expect(reducers.searchCharacters(undefined, {})).toEqual({ searchField: ''});
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchCharacters(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ 
            searchField: 'abc'
        });
    })
})

describe('requestCharacters', () => {
    const initialStateCharacters = {
        characters: [],
        isPending: false
    }

    it('should return the initial state', () => {
        expect(reducers.requestCharacters(undefined, {})).toEqual(initialStateCharacters);
    })

    it('should handle REQUEST_CHARACTERS_PENDING action', () => {
        expect(reducers.requestCharacters(initialStateCharacters, {
            type:  REQUEST_CHARACTERS_PENDING
        })).toEqual({
            characters: [],
            isPending: true
        });
    })

    it('should handle REQUEST_CHARACTERS_SUCCESS action', () => {
        expect(reducers.requestCharacters(initialStateCharacters, {
            type:  REQUEST_CHARACTERS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            characters: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false
        });
    })

    it('should handle REQUEST_CHARACTERS_FAILED action', () => {
        expect(reducers.requestCharacters(initialStateCharacters, {
            type:  REQUEST_CHARACTERS_FAILED,
            payload: 'Error'
        })).toEqual({
            error: 'Error',
            characters: [],
            isPending: false
        });
    })
})