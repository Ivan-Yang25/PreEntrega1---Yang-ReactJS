import React from 'react';
import './App.css';

//COMPONENTS
import Header from './components/header/header';
import NavBar from './components/NavBar/navbar';
import Body from './components/Body/body';


class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Header 
          title='Mi primera entrega en ReactJS' 
        />
        <NavBar />
        <Body />
      </div>
    );
  };
};

export default App;