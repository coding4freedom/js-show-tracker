
import React, { useState } from "react";
import { useSearch } from "../provider/SearchContext";
import genres from "../data/genreData";
import GenreList from "./GenreList";
import '../components/PlusTile.css';

const PlusTile = () => {    
    const [ selectedId, setSelectedId ] = useState(null);
    
    const {
        modal,
        setModal,
        selection, 
        setSelection
    } = useSearch();
    
    const toggleModal = () => {
        setModal(!modal);
    };
    const toggleGenre = (button) => {
        setSelection((prev) => (prev === button ? null : button))
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
                                <button className="modal-btn" 
                                    onClick={() => {setSelectedId('tv'); toggleGenre('tv');}}
                                >TV</button>
                                <button className="modal-btn" 
                                    onClick={() => {setSelectedId('movies'); toggleGenre('movie')}}
                                >Movies</button>
                                <button className="modal-btn" 
                                    onClick={() => {setSelectedId('anime'); toggleGenre('anime')}}
                                >Anime</button>
                            </div>
                            <ul className="modal-genre-group">
                                {selectedId && selection && <GenreList genres={genres} id={selectedId} toggle={toggleModal} />}
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