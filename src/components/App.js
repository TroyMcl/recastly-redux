import React from 'react';
import SearchContainer from '../containers/SearchContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import { Provider } from 'react-redux'

var App = () => (


  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <SearchContainer/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer/>
      </div>
      <div className="col-md-5">
        <VideoListContainer/>
      </div>
    </div>
  </div>
);
export default App;