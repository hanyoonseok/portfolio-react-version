import React,{Component} from 'react';
import './style.css';

function Aboutme(){
    return(
        <div class="aboutme" id="aboutme">
            <div class="title">
                About me
            </div>
            <div class="metadata">
                <h2>"Nothing Happens If You Do Nothing"<br/></h2>
                I'm 25 years college student in KwangWoon Univ. I was discharged upon completing military service as a sergent.
                I enjoy collaborating project with others. I have collaborated project during every semester, even my graduate project.
                I participated in a game develope club and photo club so that I gain various experience.
                Here is my Github and youtube link. Please enjoy my portfolio.
                <p style={{opacity:0}}>.</p>
                <p>Github link : https://github.com/hanyoonseok</p>
            </div>
            <div class="skill">
                <div class="two">
                    <div>
                        <div class="logo">
                            <img src="https://placeimg.com/40/40/2" alt=""/>
                        </div>
                        <div class="title">Front-end</div>
                        <div class="detail">HTML, CSS, Javascript, React</div>
                    </div>
                    <div>
                        <div class="logo">
                            <img src="https://placeimg.com/40/40/3" alt=""/>
                        </div>
                        <div class="title">Back-end</div>
                        <div class="detail">Java, Javascript, Nodejs</div>
                    </div>
                </div>
                <div class="two">
                    <div>
                        <div class="logo">
                            <img src="https://placeimg.com/40/40/4" alt=""/>
                        </div>
                        <div class="title">Game</div>
                        <div class="detail">Unity, C#, C++</div>
                    </div>
                    <div>
                        <div class="logo">
                            <img src="https://placeimg.com/40/40/5" alt=""/>
                        </div>
                        <div class="title">Database</div>
                        <div class="detail">MySQL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;