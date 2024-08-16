import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import Card from './Card'

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick} ></div>
  )
}


const ModalOverlay = (props) =>{
    return(
        <Card className={classes.modal}>
            <div className={classes.content} >{props.children}</div>
        </Card>
    )
}


const Modal = (props) => {

    const portalElement = document.getElementById('overlays')

  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal