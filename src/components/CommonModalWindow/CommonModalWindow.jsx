import Modal from "react-modal";
import CommonButton from "../CommonButton/CommonButton";
import css from "./CommonModalWindow.module.css";

Modal.setAppElement('#root');

const CommonModalWindow =({isOpen, onClose, children})=>{
    return (
        <Modal isOpen ={isOpen}>
            {children}
            <CommonButton onHandle ={onClose}>x</CommonButton>
        </Modal>
    )
}

export default CommonModalWindow

