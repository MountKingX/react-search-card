import React from 'react';

import Card from './Card';
import './style.css';

const CardList = (props) => (
  <div className='card-list'>
    { props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
