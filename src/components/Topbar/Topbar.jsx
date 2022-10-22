import  './topbar.css'
import {FaAirbnb, FaUserCircle} from 'react-icons/fa'
import {BiSearch, BiGlobe} from 'react-icons/bi'
import {IoMenuOutline} from 'react-icons/io5'
import {CiSliderHorizontal} from 'react-icons/ci'
import {MdOutlineKeyboardArrowRight as ArrowRight} from 'react-icons/md'

import MenuIcon from '@mui/icons-material/Menu';


import FilterTab from '../FilterTab/FilterTab'

//Importing Icons from dummyData
import { iconObjects } from '../../utils/dummyData'





const Topbar = () => {
  return (
    <div className="topBar">
        <div className="topbarTop">
            <div className="tbLeft">
                <FaAirbnb className='logo'/>
                <span className="logoText">airbnb</span>
            </div>
            <div className="tbCenter">
                <div className="searchBar">

                    <div className="sbContainer">
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
                    

                    <div className="searchBarMobile">
                        <div className="sbmLeft">
                            <BiSearch className='sbmSearchIcon'/>
                        </div>
                        <div className="sbmCenter">
                            <span className="whereto">Where to?</span>
                            <div className="sbmlinks">
                                <span className="sbmAnywhere">Anywhere .</span>
                                <span className="sbmAnyweek">Any Week .</span>
                                <span className="sbmAddGuests">Add Guests </span>
                            </div>
                        </div>
                        <div className="sbmRight">
                            <CiSliderHorizontal className='filterIcon'/>
                        </div>
                    </div>
                
                </div>

                
            </div>
            <div className="tbRight">
                <span className="becomeHost">Become a Host</span>
                <BiGlobe className='globe'/>
                <div className="profileContainer">
                    <MenuIcon className='menuIcon'/>
                    <FaUserCircle className='profileIcon'/>
                </div>
            </div>
        </div>
        <div className="topBarBottom">
          <div className="filterTabsWrapper">
            {
                iconObjects.map((obj,index)=>(
                    <FilterTab key={index} icon={obj.image} caption={obj.caption}/>
                ))
            }
            
          </div>
          <div className="filterIconsContainer">
            <div className="arrowWrapper">
                <ArrowRight/>
            </div>
            <div className="filterBtnContainer">
                <CiSliderHorizontal className="filterSlider"/>
                <span className="filters">Filters</span>
            </div>
          </div>
          
        </div>

    </div>
    
  )
}

export default Topbar