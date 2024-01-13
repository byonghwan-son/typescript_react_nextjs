import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from "./components/Clock";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<Hello/>*/}
    {/*<Name/>*/}
    {/*<Parent/>*/}
    {/*<Page/>*/}
    {/*<Message/>*/}
    {/*<Counter1 initialValue={0}/>*/}
    {/*<Counter2 initialCount={0}/>*/}
    {/*<Parent1 initialCount={0}/>*/}
    {/*<Parent2 initialCount={0}/>*/}
    {/*<Parent3/>*/}
    {/*<UseMemoSample/>*/}
    <Clock/>
  </React.StrictMode>
);

reportWebVitals();
