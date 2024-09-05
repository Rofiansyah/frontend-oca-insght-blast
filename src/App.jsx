import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import '@fontsource/inter'; // Import default Inter font styles

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
