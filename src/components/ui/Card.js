import React from 'react';

import card1 from '../../resources/images/card1.png';

const Card = () => {
    return (
        <div className="card">
            <img src={card1} alt=""/>
            <div className="card-details">
                <h3>2016 Specialized JYNX SPORT</h3>
                <p>Description: Stolen from Garage</p>
                <p>Stolen Yesterday 11:00pm AST at Calgary, T3B 3M9, CA</p>
            </div>
        </div>
    );
}

export default Card;