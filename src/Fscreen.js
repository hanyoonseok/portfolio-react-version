import React,{Component, useState} from 'react';
import "./style.css";
import Modal from 'react-modal';
import Tube from './Tube';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

function Fscreen(){
    var subtitle, closeBtn;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        subtitle.style.color='#f00';
        closeBtn.style.border='1px solid white';
    }
    
    function closeModal(){
        setIsOpen(false);
    }
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
                <button onClick={openModal}> contact me</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}>
                <button ref={_closeBtn =>(closeBtn = _closeBtn)}onClick={closeModal}>X</button>
                <div className="modal-title">
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> 
                </div>
                <span className="modal-subtitle">
                    <h5 className="modal-metadata">Phone :</h5> 
                </span>
            </Modal>
        </div>
    )
}

export default Fscreen;