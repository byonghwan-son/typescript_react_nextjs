import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UseImperativeHandleSample from './components/UseImperativeHandleSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/*<React.StrictMode> useEffect 를 사용하는 환경이라면 가급적 사용하지 말자.*/}
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
    {/*<UseMemoSample/> */}
    {/*<Clock/>*/}
    {/*<UseContextSample/>*/}
    {/*<ImageUploader/>*/}
    {/*</React.StrictMode>  useEffect 를 사용하는 환경이라면 가급적 사용하지 말자.*/}
    <UseImperativeHandleSample />
    <UseImperativeHandleSample />
  </>
);

reportWebVitals();
