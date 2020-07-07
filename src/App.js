import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';
import HomeButton from './HomeButton.js'

const s = {color: 'grey', textDecoration: 'none', cursor: 'default'}

function App() {
  return(
    <div>
      <NavLink exact to="/" style={{margin: '5px'}} activeStyle={s}>HOME</NavLink>
      <NavLink to="/about" style={{margin: '5px'}} activeStyle={s}>ABOUT</NavLink>
      <NavLink to="/user" style={{margin: '5px'}} activeStyle={s}>USERS</NavLink>
      <div style={{fontSize: '3em', margin: '25px'}}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/user/" component={Users}></Route>
          <Route path="/user/:name" component={User}></Route>
          <Route path="/" component={PageNotFound}></Route>
        </Switch>
      </div>
      <HomeButton/>
    </div>
  );  
}

function Home() {
  return(
    <h2>Welcome to this page</h2>
  )
}

function About() {
  return(
    <h2>About</h2>
  );
}

function Users() {
  return(
    <h2>Users</h2>
  );
}

function User({match}) {
  return(
    <div>
      <h2>Users</h2>
      <div>Hello, {match.params.name}</div>
    </div>
  );
}

function PageNotFound() {
  return(
    <h2>404 Page Not Found :)</h2>
  )
}

export default App;
