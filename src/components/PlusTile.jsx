
import React, { useState } from "react";
import genres from "../data/genreData";
import '../components/PlusTile.css';
import GenreList from "./GenreList";

const PlusTile = () => {
    const [ modal, setModal ] = useState(true);
    const [ selectedId, setSelectedId] = useState(null);

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
                                <button className="modal-btn" onClick={() => setSelectedId('tv')}>TV</button>
                                <button className="modal-btn" onClick={() => setSelectedId('movies')}>Movies</button>
                                <button className="modal-btn" onClick={() => setSelectedId('anime')}>Anime</button>
                            </div>
                            <ul className="modal-genre-group">
                                {selectedId && <GenreList genres={genres} id={selectedId}/>}
                            </ul>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>X</button>
                    </div>                    
                </div>
            )}
        </div>
    )
}
 
export default PlusTile;