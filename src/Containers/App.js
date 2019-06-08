import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
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
        const { characters, searchfield } = this.state;
        const filteredCharacters = characters.filter(character => {
            return character.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!characters.length) {
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