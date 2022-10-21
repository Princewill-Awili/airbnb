import  './topbar.css'
import {FaAirbnb, FaUserCircle} from 'react-icons/fa'
import {BiSearch, BiGlobe} from 'react-icons/bi'
import {IoMenuOutline} from 'react-icons/io5'



const Topbar = () => {
  return (
    <div className="topBar">
        <div className="topbarTop">
            <div className="tbLeft">
                <FaAirbnb className='icon'/>
                <span className="iconText">airbnb</span>
            </div>
            <div className="tbCenter">
                <div className="searchBar">
                    <div className="anywhere">
                        Anywhere
                    </div>
                    <div className="anyweek">
                        Any Week
                    </div>
                    <div className="addguests">
                        Add Guests
                    </div>

                    <div className="searchIconWrapper">
                        <BiSearch className='searchIcon'/>
                    </div>
                
                </div>
            </div>
            <div className="tbRight">
                <span className="becomeHost">Become a Host</span>
                <BiGlobe className='globe'/>
                <div className="profileContainer">
                    <IoMenuOutline className='menuIcon'/>
                    <FaUserCircle className='profileIcon'/>
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default Topbar