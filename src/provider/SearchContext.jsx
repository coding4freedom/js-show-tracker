import React, {createContext, useContext, useState, useEffect, Children} from "react";

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {
    const [ modal, setModal ] = useState(false);
    const [ selection, setSelection ] = useState(null);
    

    useEffect(() => {
        if (modal) {
            document.body.classList.add('show-modal');
        } else {
            document.body.classList.remove('show-modal');
            setSelection('');
        }

    }, [modal]);

    return (
        <SearchContext.Provider value={{ modal, setModal, selection, setSelection }} >
            { children }
        </SearchContext.Provider>
    )
}