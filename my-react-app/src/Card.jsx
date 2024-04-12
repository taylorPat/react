import PropTypes from 'prop-types'

function Card(props) {
    return(
        <div className="card">
            <img className="" src="https://via.placeholder.com/150" alt="profile image"></img>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

Card.defaultProps = {
    name: "Guest"
}
Card.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string
}

export default Card