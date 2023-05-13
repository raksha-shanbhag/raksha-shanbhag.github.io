import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/sidebar';
import Content from './components/Content/content'

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <Content />
    </div>
  );
}

export default App;
