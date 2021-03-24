import React from 'react'
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    //use lowercase letters for class name. BEM class naming convention
    <div className="app">
      <Router>
        <Header />
        <Switch>

          <Route path="/search/:searchTerm">
            <h1>Search Page🔎</h1>
          </Route>

          <Route path="/">
              <div className="app__page">
                {/* sidebar component */}
                <Sidebar />
                {/* recommended videos */}
                <RecommendedVideos /> 
              </div>
          </Route>

        </Switch>

      </Router>

     

    </div>
  );
}

export default App;

