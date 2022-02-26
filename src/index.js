import React from 'react';
import { render } from "react-dom";

import App from './App';

// styles
import './styles/App.scss';

import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

const rootElement = document.getElementById("root");
render(
  <App/>,
  rootElement
);