import './filtertab.css'
import { useContext } from 'react'
import { states } from '../../utils/context'


const FilterTab = ({icon, caption,val}) => {

  const { filterMode,setFilterMode } = useContext(states);

  const handleFilter= () =>{
    setFilterMode(val)
  }


  return (
    <div className='filterTab' onClick={handleFilter} >
        <div className="filter" style={{display:filterMode === val ?"none":""}}></div>
        {icon}
        <span className="filterCaption" style={{borderBottom: filterMode === val ? "3px solid black" : ""}}>{caption}</span>
    </div>
  )
}

export default FilterTab