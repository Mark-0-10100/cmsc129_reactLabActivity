import PropTypes from 'prop-types'

export const Button = ({ color, text, onClick }) => {
  

  return (
  <button onClick={onClick} 
  style={{ backgroundColor: color}} 
  className="btn"
  >{text}</button>
  )
}

Button.defaultProps = {     //Referred to as: "Component Props"
    color: "steelblue"   //Just like a variable to store values
}

Button.propTypes = {    //When we to have specific type of prop
                        //For more secure code and error catching
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button