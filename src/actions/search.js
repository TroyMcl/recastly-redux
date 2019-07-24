import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  //add options
  //dispatch?
  return (dispatch) => {
    searchYouTube({q}, (result) => {
      dispatch(changeVideo(result[0]));
      dispatch(changeVideoList(result[0]));
    });
  };

};

export default handleVideoSearch;
