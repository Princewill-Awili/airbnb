import './like.css'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


import { useState,useContext } from 'react';
import { states } from '../../utils/context';
import {homes, beachfronts} from '../../utils/dummyData'



const Like = ({id}) => {
    const [liked,setLiked] = useState(false);
    const allListings = [homes,beachfronts].flat();
    const { setLikedItems } = useContext(states);


    const handleLikes = (e) =>{
        const likedItem = allListings.find(item => item.id === e.target.id);
        setLikedItems((prev)=> [...prev,likedItem]);
    }

  return (
    <div 
        className='like' 
        id ={id} 
        onClick={(e)=>{
            setLiked(!liked);
            handleLikes(e);
        }}
    >
        <FavoriteBorderIcon className='likeIcon1'/>
        <FavoriteIcon className='likeIcon2' style={{color: liked ? "var(--airbnb-color)" : "rgba(0,0,0,0.4)"}}/>
    </div>
  )
}

export default Like