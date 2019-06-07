import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { characters } from './characters';


ReactDOM.render(
                <div>
                    <Card id={characters[0].id} name={characters[0].name} email={characters[0].email}/>
                    <Card id={characters[1].id} name={characters[1].name} email={characters[1].email}/>
                    <Card id={characters[2].id} name={characters[2].name} email={characters[2].email}/>
                </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
