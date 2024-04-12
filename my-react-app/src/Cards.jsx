import Card from './Card.jsx'

function Cards(props) {
    const influencers = props.influencers
    const cards = influencers.map((guy) => {
        return <Card name={guy.name} desc={guy.desc} key={guy.id}/>
    });
    const value = cards.length > 0 ? <li>{cards}</li> : null;
    return(
        value
    )
}

export default Cards