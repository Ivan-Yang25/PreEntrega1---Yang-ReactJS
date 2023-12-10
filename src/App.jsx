import React from 'react';

//COMPONENTS
import Header from './components/header/header';
import NavBar from './components/NavBar/navbar';
import Body from './components/Body/body';

const App = () => {

  return(
    <div className="App">
      <Header 
        title='Tienda de cursos de programacion' 
      />
      <NavBar />
      <Body
      />
    </div>
  );
}
export default App;