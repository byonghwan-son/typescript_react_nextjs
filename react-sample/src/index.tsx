import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from "./components/Name";
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Parent />
    <Page />
  </React.StrictMode>
);

reportWebVitals();
