import React from 'react'
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";


function App() {
  return (
    //use lowercase letters for class name. BEM class naming convention
    
        <div className="app">
            <Header />       
          <div className="app__page">
            {/* sidebar component */}
            <Sidebar />
            {/* recommended videos */}
            <RecommendedVideos /> 
          </div>
        </div>
    
  );
}

export default App;

