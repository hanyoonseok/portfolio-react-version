import React,{Component} from 'react';
import './style.css';

function Aboutme(){
    return(
        <div class="aboutme">
            <div class="title">
                About me
            </div>
            <div class="metadata">
                <p>I'm 25 years old and i'm interested in Front-end, Game-develop.</p>
                <p>Army sergent, honorable discharge.asdgni sdnfa insad insaid nisn isn isandi nsain idsn isdn isadn iasn isn isnd isan ia sdafkn sadfn ksad fknsdf knsad fknsadf knsda knsda knsadk nasdk nskadn ksa knsad knsad nasd nksad snd iasn isdn isdan iasn idsn isdna isn ian iads i</p>
                <p>Github link : https://github.com/hanyoonseok</p>
                <p>나중에 아래 그림 바꾸자</p>
            </div>
            <div class="skill">
                <div class="front">
                <div class="logo">
                    <img src="image/html.png" alt=""/>
                </div>
                <div class="title">Front-end</div>
                <div class="detail">HTML, CSS, Javascript, React</div>
                </div>
                <div class="back">
                <div class="logo">
                    <img src="image/backend.jpg" alt=""/>
                </div>
                <div class="title">Back-end</div>
                <div class="detail">Java, Javascript, Nodejs</div>
                </div>
                <div class="game">
                <div class="logo">
                    <img src="image/unity.jpg" alt=""/>
                </div>
                <div class="title">Game</div>
                <div class="detail">Unity</div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;