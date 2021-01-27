import React,{Component} from 'react';
import YouTube from 'react-youtube';
import './style.css';

var url;
var player;
class Tube extends Component{
    videoOnReady(event) {
      player = event.target;
      url = event.target.getVideoUrl();
    }
    render() {
      const opts = {
        playerVars: {
        autoplay: 1,
        },
      };
      const {videoId} = this.props;
      const {title}=this.props;
      const {language}=this.props;
      return (
        <section>
          <div className="modal">
            <YouTube 
              videoId={videoId} 
              opts={opts} 
              onReady={this.videoOnReady} 
              onPlay={this.videoOnPlay}
              onStateChange={this.videoStateChange}
              />
          </div>
          <div className="modal-foot">
            <h1>{title}</h1>
            <p>사용 언어 : {language}</p>
            <p>Go to Link : <a href={'https://www.youtube.com/watch?v=' + videoId}>https://www.youtube.com/watch?v={videoId}</a></p>
          </div>
        </section>
      )}
}

export default Tube;