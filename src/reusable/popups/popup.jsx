import React, { useState, useRef, useEffect } from 'react'
import Modal from 'react-modal';

import './popup.css'

export const Popup = ({ config, setConfig, Component, ...props }) => {

  const handleClose = () => {
    setConfig((prevState) => ({...prevState, ["display"]: false}))
  }

  const ref = usePopupDismiss(handleClose)


  return (

    <Modal overlayClassName="modal-overlay" className="modal-content" contentLabel="Background Modal"
           isOpen={config.display}
    >
      <div ref={ref} className="popup-box popup-position" 
           style={{display: config.display ? "block" : "none" }}
      >
        {config.msg ? <div className='message'>{config.msg}</div> : <></>}
        <Component dismiss={handleClose} action={config.action || null} {...props}/> 
      </div>
    </Modal>
  )
}
export default Popup


export const usePopupConfig = () => {
  const [ popupConfig, setPopupConfig ] = useState({
    display: false, 
    msg: null, 
    action: null,
  })

  return [popupConfig, setPopupConfig]
}


export const usePopupDismiss = (dismss) => {
  const ref = useRef(null);
    
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dismss()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
        document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return ref
}