import style from "./Modal.module.css"
import ReactDOM from "react-dom";

function Backdrop(props){
    return <div className={style.backdrop}></div>
}

function ModalOverlay(props){
    return <div className={style.modal}>
        <div className={style.content}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById("overlays");

function Modal(props){
    return(
        <>
        {ReactDOM.createPortal(<Backdrop></Backdrop>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement )}
        </>
    )
}

export default Modal