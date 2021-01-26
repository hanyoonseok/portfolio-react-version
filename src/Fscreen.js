import React,{Component} from 'react';
import "./style.css"

function Fscreen(){
    return(
        <div class="fscreen">
            <div class="profile">
                <img src="https://placeimg.com/40/40/1" alt=""/>
            </div>
            <div class="introduce">
                <p>Hello,</p>
                <p>I'm YoonSeok Han</p>
            </div>

            <div class="metadata">
                <p>97. 01. 30.</p>
                <p>Majored in Computer Software in KwangWoon Univ.</p>
            </div>
            <div class="contact">
                <button> contact me</button>
            </div>
        </div>
    )
}

export default Fscreen;