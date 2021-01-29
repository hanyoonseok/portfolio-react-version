import React,{Component, useState} from 'react';
import Modal from 'react-modal';
import "./style.css"
import Tube from './Tube';

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

function Proj({vid, title, language, category}){
    const [modalIsOpen, setModal]=useState(false);
    const openModal=()=> {
        setModal(true);
    }
    const btnstyle={
        backgroundImage:"url(http://img.youtube.com/vi/"+vid+"/0.jpg)",
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const afterOpenModal=()=>{
    }
    
    const closeModal=()=>{
        setModal(false);
    }
    return (
    <span>
     <div className="mmovie">
         <button style={btnstyle} onClick={()=>{openModal()}}></button>
         
     </div>
     <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}>
        <Tube videoId={vid} title={title} language={language}/>
     </Modal>
    </span>
 
    );
        
}

export default Proj;