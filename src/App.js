import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path ='/' exact component = {Home} />
        <Route path ='/services' component = {services} />
        <Route path ='/products' component = {Products} />
        <Route path ='/sign-up' component = {SignUp} />
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
