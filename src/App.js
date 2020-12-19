import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {CurrentBalance} from './components/CurrentBalance';
import {IncomeAndExpenses} from './components/IncomeAndExpenses';
import {Transactions} from './components/TransactionRecords';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import About from './components/pages/About';
import './App.css';

//Functional component with calls to individual components
function App() {
  return (
    <Router>
      <GlobalProvider>
        <Header/>
        <Route exact path="/" render={props => (
          <div className = "container">
            <CurrentBalance/>
            <IncomeAndExpenses/>
            <Transactions/>
            <AddTransaction/>
          </div>  
        )} />
        <Route path="/about" component={About}/>
      </GlobalProvider>
    </Router>   
  );
}

export default App;
