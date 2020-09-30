import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'

import Login from './components/Login/Login';
import Home from './components/Home';
import Signup from './components/Signup/Signup';
import EmployerList from './components/EmployerList/EmployerList';
import Navbar from './components/Navbar/Navbar';
import JobList from './components/JobList/JobList';
import CandidatesList from './components/CandidatesList/CandidatesList';
import EmployerDetail from './components/EmployerDetail/EmployerDetail';
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/employerlist"> 
        <EmployerList/>
      </Route>
      <Route path="/joblist">
        <JobList/>
      </Route>
      <Route path="/candidateslist">
        <CandidatesList/>
      </Route>
      <Route path="/employerlist-detail">
        <EmployerDetail/>
      </Route>
    </Switch>
  )
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
    
    );
}

export default App;
