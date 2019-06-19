import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage  from '../Components/MainPage';
import { jsxEmptyExpression, exportAllDeclaration } from '@babel/types';


let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestCharacters: jest.fn(),
        characters: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage { ...mockProps } />);
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('renders characters correctly', () => {
    const mockProps2 = {
        onRequestCharacters: jest.fn(),
        characters: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'John',
        isPending: false
    }
    wrapper2 = shallow(<MainPage { ...mockProps } />);
    expect(wrapper2.instance().filterCharacters([])).toEqual([]);
    expect(wrapper2.instance().filterCharacters([])).toEqual([]);
})