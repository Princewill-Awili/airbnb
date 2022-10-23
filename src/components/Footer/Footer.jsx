import './footer.css'
import { BiGlobe} from 'react-icons/bi'
import {RiArrowUpSLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footerLeft">
        &#169; 2022  <span className='misc'> Airbnb Clone, Inc</span><span className="misc">Privacy</span> . <span className="misc">Terms</span> . <span className="misc">Sitemap</span>
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