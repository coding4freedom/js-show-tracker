import React, { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {
    const [ modal, setModal ] = useState(false);
    const [ selection, setSelection ] = useState(null);
    const [ trackerForm, setTrackerForm ] = useState([]);
    
    // Modal use effect logic
    useEffect(() => {
        if (modal) {
            document.body.classList.add('show-modal');
        } else {
            document.body.classList.remove('show-modal');
            setSelection('');
        }

    }, [modal]);

    // function to add new tracker form entries
    const saveTrackerForm = (newTrackerForm) => {
        setTrackerForm((prevEntries) => [
            ...prevEntries,
            { ...trackerForm, id: Date.now() }
        ]);
    };

    return (
        <SearchContext.Provider 
            value={{ modal, setModal, selection, setSelection, trackerForm,     saveTrackerForm }} >
            { children }
        </SearchContext.Provider>
    )
}