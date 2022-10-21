import './filtertab.css'


const FilterTab = ({icon, caption}) => {
  return (
    <div className='filterTab'>
        <div className="filter"></div>
        {icon}
        <span className="filterCaption">{caption}</span>
    </div>
  )
}

export default FilterTab