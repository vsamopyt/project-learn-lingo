import Modal from "react-modal";
import CommonButton from "../CommonButton/CommonButton";
import css from "./CommonModalWindow.module.css";

Modal.setAppElement('#root');

const CommonModalWindow =({isOpen, onClose, children})=>{
    return (
        <Modal 
        isOpen ={isOpen}
        onRequestClose = {onClose} // to close modal on ESC and click on backdrop
        closeTimeoutMS={300}       // for animation
          overlayClassName={{
          base: css.ReactModalOverlay,                   // base class + animation
          afterOpen: css.ReactModalOverlayAfterOpen,     // animation
          beforeClose: css.ReactModalOverlayBeforeClose,  // animation
        }}
  
        className={{
          base: css.ReactModalContent,                         // base class + animation
          afterOpen: css.ReactModalContentAfterOpen,            // animation
          beforeClose: css.ReactModalContentBeforeClose,        // animation
        }}
        
        

        >
            {children}
            <CommonButton onHandle ={onClose}>x</CommonButton>
        </Modal>
    )
}

export default CommonModalWindow

