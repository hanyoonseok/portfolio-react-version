import React,{Component} from 'react';
import './style.css';
import Tube from './Tube';

class Mywork extends Component{
    state={
        cat:'all',
        show:false
    }

    _onMouseEnter=(e)=>{
        this.setState({show:true});
        <Tube videoId='a9zj9XuzKF8' />
    }
    _onMouseLeave=(e)=>{
        this.setState({show:false});
    }

    render(){
        return(
            <div className="mywork">
                <div className="title">My work</div>
                <div className = "subtitle"> Projects</div>
                <div className="btns">
                    <button className="one" onClick={()=>{this.setState({cat:'all'});}}>All</button>
                    <button className="two" onClick={()=>{this.setState({cat:'two'});}}>Front-end</button>
                    <button className="thr" onClick={()=>{this.setState({cat:'thr'});}}>Back-end</button>
                    <button className="fou" onClick={()=>{this.setState({cat:'fou'});}}>Game</button>
                </div>
                <span className="displays">
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>c</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                    {this.state.cat==='fou' || this.state.cat==='all' ? 
                    <button>d</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button>c</button>:null}
                    {this.state.cat==='fou' || this.state.cat==='all' ? 
                    <button>d</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button>c</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button>b</button>:null}
                </span>
            </div>
        )
    }
}

export default Mywork;