import React from 'react';

//COMPONENTS
import Header from './components/header/header';
import NavBar from './components/NavBar/navbar';
import Body from './components/Body/body';
import Inicio from './paginas/Inicio/inicio'
import Detailpage from './paginas/DetailPage/DetailPage';
import ErrorPage from "./paginas/ErrorPage/ErrorPage";
import CategoryType from './paginas/Category/Category';

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header
          title='Personajes de Rick y Morty'
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Category/ :categoryType" element={<CategoryType />} />
          <Route path="/detail/ :id" element={<Detailpage />} />
        </Routes>
        <Body
        />
      </div>
    </Router>

  );
}
export default App;