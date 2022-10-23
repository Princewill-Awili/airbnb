import './footer.css'
import { BiGlobe, BiMessage} from 'react-icons/bi'
import {RiArrowUpSLine} from 'react-icons/ri'

import {HiOutlineSearch} from 'react-icons/hi'
import {FaAirbnb} from 'react-icons/fa'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {CgProfile} from 'react-icons/cg'

import {useState} from 'react'

 
const Footer = () => {

    const [option, setOption ] = useState('explore');



  return (
    <div className='footer'>

        <div className="footerLeft">
        &#169; 2022  <span className='misc'> Airbnb Clone, Inc</span><span className="misc">Privacy</span> . <span className="misc">Terms</span> . <span className="misc">Sitemap</span>
        </div>

        <div className="footerIcons">
            <div className="fiWrapper" onClick={()=>setOption('explore')}>
                <HiOutlineSearch className='fIcon' style={{color: option==="explore"?"var(--airbnb-color)":""}}/>
                <span className="fIconTxt" style={{fontWeight: option==="explore"?"bold":""}}> Explore</span>
            </div>
            <div className="fiWrapper"  onClick={()=>setOption('wishlists')} >
                <FavoriteBorderIcon className='fIcon' style={{color: option==="wishlists"?"var(--airbnb-color)":""}}/>
                <span className="fIconTxt" style={{fontWeight: option==="wishlists"?"bold":""}}>Wishlists</span>
            </div>
            <div className="fiWrapper"  onClick={()=>setOption('trips')}>
                <FaAirbnb className='fIcon' style={{color: option==="trips"?"var(--airbnb-color)":""}}/>
                <span className="fIconTxt" style={{fontWeight: option==="trips"?"bold":""}}>Trips</span>
            </div>
            <div className="fiWrapper"  onClick={()=>setOption('inbox')}>
                <BiMessage className='fIcon' style={{color: option==="inbox"?"var(--airbnb-color)":""}}/>
                <span className="fIconTxt" style={{fontWeight: option==="inbox"?"bold":""}}>Inbox</span>
            </div>
            <div className="fiWrapper"  onClick={()=>setOption('profile')}>
                <CgProfile className='fIcon' style={{color: option==="profile"?"var(--airbnb-color)":""}}/>
                <span className="fIconTxt" style={{fontWeight: option==="profile"?"bold":""}}>Profile</span>
            </div>
        </div>

        <div className="footerRight">
            <BiGlobe className='fGlobe'/>
            <span className="misc">English (US)</span><span className="misc"> $ USD</span>
            <span className="misc">Support & resources</span>
            <RiArrowUpSLine className='up'/>
        </div>




    </div>
  )
}

export default Footer