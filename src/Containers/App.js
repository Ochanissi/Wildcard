import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

import { setSearchField, requestCharacters } from '../actions';

const mapStateToProps = state => {
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
    // constructor() {
    //     super()
    //     this.state = {
    //         characters: []
    //         // searchfield: ''
    //     }
    // }

    componentDidMount() {
        this.props.onRequestCharacters();
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ characters: users }));
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    //     // console.log(event.target.value);
    //     // console.log(filteredCharacters);
    // }

    render() {
        // const { characters } = this.state;
        const { searchField, onSearchChange, characters, isPending } = this.props;
        const filteredCharacters = characters.filter(character => {
            return character.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!isPending) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>WildCard</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList characters={filteredCharacters}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);