import React,{Component} from 'react';
import YouTube from 'react-youtube';
import './style.css';

var url;
class Tube extends Component{
    videoOnReady(event) {
      url = event.target.getVideoUrl();
    }
    render() {
      const opts = {
        playerVars: {
        autoplay: 1,
        },
      };
      const {videoId} = this.props;
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
            <h1>키보드와 마우스로 반응하는 블록 계산기</h1>
            <p>사용 언어 : HTML, CSS, Javascript</p>
            <p>Go to Link : <a href={'https://www.youtube.com/watch?v=' + videoId}>https://www.youtube.com/watch?v={videoId}</a></p>
          </div>
        </section>
      )}
}

export default Tube;