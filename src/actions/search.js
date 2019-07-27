import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  //add options
  //dispatch?
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  }

  return (dispatch) => {
    searchYouTube(options, (result) => {
      dispatch(changeVideo(result[0]));
      dispatch(changeVideoList(result[0]));
    });
  };

};

export default handleVideoSearch;

//When a search querry is entered
  //it should send out an api request with new querry
  //update state of current video and the video list
