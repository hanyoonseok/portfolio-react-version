import React,{Component} from 'react';
import './style.css';
import Tube from './Tube';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor:'rgba(138,121,173)',
      color:'white'
    }
};

class Mywork extends Component{
    state={
        cat:'all',
        modalIsOpen:false,
        vid:'',
        title:'',
        language:''
    }

    openModal=()=> {
        this.setState({modalIsOpen:true});
    }
    afterOpenModal=()=>{
    }
    
    closeModal=()=>{
        this.setState({modalIsOpen:false});
    }

    render(){
        return(
            <div className="mywork" id="mywork">
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
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'a9zj9XuzKF8', title:'키보드와 마우스로 반응하는 블록 계산기', language:'HTML, CSS, JAVASCRIPT'})}}>c</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'vZ7TW-E5Xi4', title:'3D 로그라이크 게임', language:'Unity3D, C#'})}}>b</button>:null}
                    {this.state.cat==='fou' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>d</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>b</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>b</button>:null}
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>c</button>:null}
                    {this.state.cat==='fou' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>d</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>b</button>:null}
                    {this.state.cat==='thr' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>c</button>:null}
                    {this.state.cat==='two' || this.state.cat==='all' ? 
                    <button onClick={()=>{this.openModal(); 
                    this.setState({vid:'', title:'', language:''})}}>b</button>:null}
                </span>
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}>
                <Tube videoId={this.state.vid} title={this.state.title} language={this.state.language}/>
            </Modal>
            </div>
        )
    }
}

export default Mywork;