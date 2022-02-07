import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from "react-helmet";


render((
  <React.StrictMode>
    <App />
    <Helmet>
      <title> Spacetime- Backoffice</title>
    </Helmet>
  </React.StrictMode>
), document.getElementById('root'));

