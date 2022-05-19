import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button  from './Button'

const Header = ({title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
        <h1>{title}</h1>
        {location.pathname == '/' && (<Button color={showAdd ? 'red' :  'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
    </header>

  )
}

Header.defaultProps = {     //Referred to as: "Component Props"
    title: "Task Tracker"   //Just like a variable to store values
}

Header.propTypes = {    //When we to have specific type of prop
                        //For more secure code and error catching
    title: PropTypes.string.isRequired
}

export default Header