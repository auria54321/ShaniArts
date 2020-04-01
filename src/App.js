import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import Pencil from './pages/pencil/pencil.component';
import Watercolor from './pages/watercolor/watercolor.component';
import Acrylic from './pages/acrylic/acrylic.component';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/pencil' component={Pencil}/>
          <Route exact path='/Acrylic' component={Acrylic}/>
          <Route exact path='/Watercolor' component={Watercolor}/>          
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
