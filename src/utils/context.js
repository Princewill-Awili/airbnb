import {useState, createContext} from 'react';

export const states = createContext();

export const StateProvider = ({children}) => {

    const [filterMode, setFilterMode] = useState('beach');
    const [liked, setLiked] = useState(false);
    const [likedItems, setLikedItems] = useState([]);

    return (
        <states.Provider value={{filterMode, setFilterMode, liked, setLiked, likedItems, setLikedItems}}>
            {children}
        </states.Provider>
    )
}