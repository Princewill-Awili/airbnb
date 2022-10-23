import { useContext } from "react";
import { states } from "../../utils/context";

import "./card.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

const Card = ({img,searchCategory,desc,host,bedrooms,date,rating,price}) => {

    const {liked, setLiked} = useContext(states);

    const updateLikeCount = () =>{
        const likesNum = JSON.parse(localStorage.getItem('likesCount'));

        if(likesNum){
            const newLikesNum = likesNum + 1;
            localStorage.setItem('likesCount',JSON.stringify(newLikesNum));
        }else{
            localStorage.setItem('likesCount', JSON.stringify(1));
        }
    }

  return (
    <div className='card'>
        <div className="imgFrame">
            <img src={img} alt="cardPic" className='cardPic' />
            <FavoriteBorderIcon 
                className='likeIcon1' 
                onClick={()=>{
                    setLiked(!liked);
                    updateLikeCount();
                } }
            />
            <FavoriteIcon 
                className='likeIcon2'  
                style={{color: liked ? "var(--airbnb-color)" : "rgba(0,0,0,0.4)"}}
                onClick={()=> setLiked(!liked)}
            />
        </div>
        <div className="cardInfoTop">
            <span className="category">{searchCategory}</span>
            <div className="ratingContainer">
                <StarIcon className='starIcon'/>
                <span className="rating">{rating < 3 ? 5 : rating}({Math.floor(Math.random()*20)})</span>
            </div>
        </div>
        <span className="desc">{desc}</span>
        <span className="host">Hosted by {host}</span>
        <span className="beds">{bedrooms} Beds</span>
        <span className="date">{date}</span>
        <span className="price"><span>${price}</span> night</span>
    </div>
  )
}

export default Card