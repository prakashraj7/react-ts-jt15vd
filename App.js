import * as React from 'react';
import HOC from './components/HOC';
import Countz from './components/Countz';
import Hov from './components/Hov';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <HOC />
      <Hov />
      <Countz />
    </div>
  );
}
