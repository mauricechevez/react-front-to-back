import PropTypes from 'prop-types'

function Header({bgColor,textColor,text}) {
    const headerStyles = {
        backgroundColor:bgColor,
        color:textColor
    }

  return (
    <header  style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// Passing in a default if nothing else is passed in.
Header.defaultProps = {
    text:"Feedback UI",
    bgColor: 'rgba(0,0,0,.4)',
    textColor: '#ff6a95'
}

// How to check the type of data each prop has.
Header.propTypes = {
    text: PropTypes.string
}

export default Header