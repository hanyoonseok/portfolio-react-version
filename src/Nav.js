import React,{Component, useState} from 'react';
import "./style.css"

class Nav extends React.Component{
    state={
        active:false
    }
    render(){
        return (
            <nav className="header">
                <div className="name">HANYS</div>
                <div className={this.state.active ? 'menus active' : ' menus'}>
                    <i><a href="#fscreen">Home</a></i>
                    <i><a href="#aboutme">About me</a></i>
                    <i><a href="#skills">Skills</a></i>
                    <i><a href="#mywork">My work</a></i>
                </div>
                <a href="#" className="toggle" onClick={()=>this.setState({active:!this.state.active})}>
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
                </a>
            </nav>
        )
    }   
}

export default Nav;