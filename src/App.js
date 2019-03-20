import React, { useState } from 'react';
import './App.css';
import Menu from './containers/menu/menu';
import GreatPredictor from './containers/great-predictor/great-predictor';
import {qoutesStore} from './quotesStore/quotesStore';

const App = () => {
    const [quotes, setQuotes] = useState(qoutesStore);
    return (
      <div className="App">
          <Menu/>
          <GreatPredictor
          quotes={quotes}
          setQuotes={setQuotes}
          />
      </div>
    );
};

export default App;
