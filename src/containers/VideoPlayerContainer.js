import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

var mapStateToProps = (state) => {
  return {
  video: state.currentVideo
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
  handleVideoListEntryTitleClick: () => {
  dispatch(changeVideo())
  }
}
}
var VideoPlayerContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)

export default VideoPlayerContainer;
