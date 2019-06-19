import React, { Component } from 'react';

import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import Header from '../Components/Header';
import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestCharacters();
    }

    filterCharacters = () => {
        return this.props.characters.filter(character => {
            return character.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const { onSearchChange, isPending } = this.props;

        if (isPending) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        { isPending ? <h1>Loading</h1> :
                        <ErrorBoundry>
                            <CardList characters={this.filterCharacters()}/>
                        </ErrorBoundry>
                        }
                    </Scroll>
                </div>
            );
        }
    }
}

export default MainPage;