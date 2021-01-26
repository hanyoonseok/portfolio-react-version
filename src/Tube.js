import React,{Component} from 'react';
import YouTube from 'react-youtube';
import './style.css';

class Tube extends Component{
    videoOnReady(event) {
        const player = event.target;
        player.seekTo(53)
    }

    videoOnPlay(event){
        const player = event.target;
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
            <p>Go to Link : <a href="https://www.youtube.com/watch?v=a9zj9XuzKF8">https://www.youtube.com/watch?v=a9zj9XuzKF8</a></p>
          </div>
        </section>
      
      )}
}

export default Tube;