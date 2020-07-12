import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return(
    <div>
      <NavBar />
      <div style={{fontSize: '3em', margin: '25px'}}>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/experience/" component={Experience}></Route>
          <Route path="/experience/:name" component={User}></Route>
          <Route path="/" component={PageNotFound}></Route>
        </Switch>
      </div>
    </div>
  );  
}

function Intro() {
  return(
    <h2>Welcome to this page</h2>
  )
}

function Education() {
  return(
    <h2>Education</h2>
  );
}

function Experience() {
  return(
    <h2>Experience</h2>
  );
}

function User({match}) {
  return(
    <div>
      <h2>Experience</h2>
      <div>Hello, {match.params.name}</div>
    </div>
  );
}

function PageNotFound() {
  return(
    <h2>404 Page Not Found</h2>
  )
}

export default App;
