import React, { useState, useEffect, useRef } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/index';
import { history, store } from './store/index';
import { Navbar } from './components/index';
import { LocalStorage } from './helpers';
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div
        >
          <Navbar/>
          <Router history={ history } />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
