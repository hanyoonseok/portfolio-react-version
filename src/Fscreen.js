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
      backgroundColor:'black',
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
        width:'15px',
        height:'15px',
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return(
        <div class="fscreen" id="fscreen">
            <video src="videos/video-1.mp4" autoPlay loop muted />
            <img src="https://placeimg.com/40/40/1" className="profile" alt=""/>
            <h1><p>Hello,</p>I'm YoonSeok-Han</h1>
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
                <span className="modalImg">
                    <p><img style={imgsrc} src=""/> : 01042554045</p>
                    <p><img style={imgsrc} src="image/instagram.png"/> : yoon_sok</p>
                    <p><img style={imgsrc} src="image/mail.png"/> : hys6078@naver.com</p>
                    <p><img style={imgsrc} src="image/github.png"/> : https://github.com/hanyoonseok</p>
                </span>
            </Modal>
        </div>
    )
}

export default Fscreen;