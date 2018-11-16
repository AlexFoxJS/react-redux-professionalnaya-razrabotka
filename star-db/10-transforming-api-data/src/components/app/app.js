import React from 'react';

import Header from '../header/index';
import RandomPlanet from '../random-planet/index';
import ItemList from '../item-list/index';
import PersonDetails from '../person-details/index';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;