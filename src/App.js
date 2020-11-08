import React from 'react';
import './App.css';
import CollegeList from './components/collegelist/CollegeList';

export default function App() {
  return (
    <div id='app'>
      <div id='title'>Colleges in North India</div>
      <CollegeList />
    </div>
  );
}
