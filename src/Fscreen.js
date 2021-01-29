import React,{Component, useState} from 'react';
import "./style.css";
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

function Fscreen(){
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    const imgsrc={
        width:'50px',
        height:'50px',
        backgroundImage:"url(image/mail.png)",
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    }

    return(
        <div class="fscreen" id="fscreen">
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
                <button onClick={openModal}> contact me</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}>
                <button onClick={closeModal}>X</button>
                <div>
                    <h2>Hello</h2> 
                </div>
                <span>
                    <p><button style={imgsrc}></button> : 01042554045</p>
                    <p><img src="image/instagram.png"/> : yoon_sok</p>
                    <p><img src="image/mail.png"/> : hys6078@naver.com</p>
                    <p><img src="image/github.png"/> : https://github.com/hanyoonseok</p>
                </span>
            </Modal>
        </div>
    )
}

export default Fscreen;