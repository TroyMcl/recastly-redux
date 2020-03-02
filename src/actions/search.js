import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';

var handleVideoSearch = (q) => {
  return _.debounce((dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };

    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos))
    });
  }, 500)
};

export default handleVideoSearch;
  // var options = {
  //   key: YOUTUBE_API_KEY,
  //   query: q
  // }

  // return (dispatch) => {
  //   searchYouTube(options, (result) => {
  //     dispatch(changeVideo(result[0]));
  //     dispatch(changeVideoList(result[0]));
  //   });
  // };

//When a search querry is entered
  //it should send out an api request with new querry
  //update state of current video and the video list
