import React from 'react';
import './App.css';

//COMPONENTS
import Header from './components/header/header';


class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Header 
          title='Mi primer titulo en RectJS' 
          subtitle='Madre mia, soy un span'
        />
      </div>
    );
  };
};

export default App;