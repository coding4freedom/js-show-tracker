
import React, { useState } from "react";

import '../components/PlusTile.css';

const PlusTile = () => {
    const [ modal, setModal ] = useState(true);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('show-modal');
    } else {
        document.body.classList.remove('show-modal');
    }

    return (
        <div className="plus">
            <button onClick={toggleModal} className="plus-btn">
                +
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="modal-top--group">
                            <h2 className="modal-title">Select Type</h2>
                            <div className="modal-btn--group">
                                <button className="modal-btn">TV</button>
                                <button className="modal-btn">Movies</button>
                                <button className="modal-btn">Anime</button>
                            </div>
                            <div className="modal-genre-group">
                                
                            </div>
                        </div>
                        <button className="close-modal">X</button>
                    </div>                    
                </div>
            )}
        </div>
    )
}
 
export default PlusTile;