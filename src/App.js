import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            characters: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ characters: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(event.target.value);
        // console.log(filteredCharacters);
    }
    render() {
        const filteredCharacters = this.state.characters.filter(characters => {
            return characters.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.characters.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>WildCard</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList characters={filteredCharacters}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;