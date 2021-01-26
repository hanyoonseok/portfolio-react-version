import React,{Component} from 'react';
import './style.css';

class Mywork extends Component{
    state={
        active:false,
        cat:''
    }
    render(){
        return(
            <div className="mywork">
                <div className="title">My work</div>
                <div className = "subtitle"> Projects</div>
                <div className="btns">
                    <button className="one" onClick={()=>{this.setState({active:true, cat:'all'});}}>All</button>
                    <button className="two" onClick={()=>{this.setState({active:true, cat:'two'});}}>Front-end</button>
                    <button className="thr" onClick={()=>{this.setState({active:true, cat:'thr'});}}>Back-end</button>
                    <button className="fou" onClick={()=>{this.setState({active:true, cat:'fou'});}}>Game</button>
                </div>
                <span className="displays">
                    {this.state.active && this.state.cat==='two' || this.state.cat==='all' ? <button id="on" className="two">b</button>:null}
                    {this.state.active && this.state.cat==='thr' || this.state.cat==='all'? <button id="on" className="two">c</button>:null}
                    {this.state.active && this.state.cat==='fou' || this.state.cat==='all' ? <button id="on" className="two">d</button>:null}
                    {this.state.active && this.state.cat==='two' || this.state.cat==='all' ? <button id="on" className="two">b</button>:null}
                    {this.state.active && this.state.cat==='two' || this.state.cat==='all' ? <button id="on" className="two">b</button>:null}
                    {this.state.active && this.state.cat==='thr' || this.state.cat==='all' ? <button id="on" className="two">c</button>:null}
                    {this.state.active && this.state.cat==='fou' || this.state.cat==='all' ? <button id="on" className="two">d</button>:null}
                    {this.state.active && this.state.cat==='two' || this.state.cat==='all' ? <button id="on" className="two">b</button>:null}
                    {this.state.active && this.state.cat==='thr' || this.state.cat==='all' ? <button id="on" className="two">c</button>:null}
                    {this.state.active && this.state.cat==='two' || this.state.cat==='all' ? <button id="on" className="two">b</button>:null}
                </span>
            </div>
        )
    }
}

export default Mywork;