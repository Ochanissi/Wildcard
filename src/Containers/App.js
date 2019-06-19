import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCharacters } from '../actions';
import MainPage from '../Components/MainPage';

import './App.css';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchCharacters.searchField,
        characters: state.requestCharacters.characters,
        isPending: state.requestCharacters.isPending,
        error: state.requestCharacters.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestCharacters: () => dispatch(requestCharacters())
    }
}

class App extends Component {
    render() {
        return (
            <MainPage { ...this.props } />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);