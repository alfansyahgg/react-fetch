import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Home from './components/homepage/HomePage';
import Upload from './components/formupload/Form';
import 'bootstrap/dist/css/bootstrap.css';

class Aplikasi extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/about" component={About} ></Route>
          <Route path="/formupload" component={Upload}></Route>
        </Switch>

      </div>
    );
  }
}

export default Aplikasi;
