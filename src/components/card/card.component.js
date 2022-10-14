import React from 'react';
import './card.component.css';

export const Card = (props) => (
    <div className="card">
        <img alt='monstor' src={`https://robohash.org/${props.monster.id}?set=set2`} />
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
    </div>
);