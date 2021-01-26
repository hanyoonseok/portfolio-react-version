import React,{Component} from 'react';
import YouTube from 'react-youtube';

class Tube extends Component{
    videoOnReady(event) {
        const player = event.target;
        player.seekTo(53)
    }

    videoOnPlay(event){
        const player = event.target;
    }

    videoStateChange(event){
        
    }

    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
        autoplay: 1,
        },
      };
      const {videoId} = this.props;
      return (
      <YouTube 
      videoId={videoId} 
      opts={opts} 
      onReady={this.videoOnReady} 
      onPlay={this.videoOnPlay}
      onStateChange={this.videoStateChange}
      />
      )}
}

export default Tube;