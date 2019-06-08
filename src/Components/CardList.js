import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
    // if (true) {
    //     throw new Error('NOOOO');
    // }
    return (
        <div>
            {
                characters.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={characters[i].id} 
                            name={characters[i].name} 
                            email={characters[i].email}
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;