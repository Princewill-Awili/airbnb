import "./card.css"
import StarIcon from '@mui/icons-material/Star';
import Like from "../Like/Like";



const Card = ({id,img,searchCategory,desc,host,bedrooms,date,rating,price}) => {


  return (
        <div className='card'>
            <div className="imgFrame">
                <img src={img} alt="cardPic" className='cardPic' />
                <Like id={id}/>
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