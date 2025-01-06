import React, { useRef } from 'react'
import YoutubePlayer from 'react-player/youtube'   

import '../css/modal.css';

function Modal({ showModal, setShowModal, videoUrl }) {

    const modalRef = useRef();

    const closeModal = (e) => {
        if(e.target === modalRef.current) {
            setShowModal(false);
        }
    }

  return (
    <>
    
    {showModal && (
                <div className="modal-bg" ref={modalRef} onClick={closeModal}>
                    <div className="modal" showModal={showModal}>
                        <div className="player-wrapper">
                            <YoutubePlayer
                                url={videoUrl}
                                controls
                                loop
                                playing
                                className="react-player"
                            />
                        </div>
                    </div>
                </div>
            )}
        
    </>
  )
}

export default Modal