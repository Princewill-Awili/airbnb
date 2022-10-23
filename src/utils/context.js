import {useState, createContext} from 'react';

export const states = createContext();

export const StateProvider = ({children}) => {

    const [filterMode, setFilterMode] = useState('beach');

    return (
        <states.Provider value={{filterMode, setFilterMode}}>
            {children}
        </states.Provider>
    )
}