import PropTypes from 'prop-types';

function Card(props) {
  
  let badgeText
  if(props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  }
  else if(props.item.location === "Online") {
    badgeText = "ONLINE"
  }
  
  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img className='card-image' src={`images/${props.item.coverImg}`} alt='Card Image' />
      <div className='card-stats'>
        <p>
          <span><img className='card-star' src='images/star.png' alt='Star' /></span>
          <span className='gray'>{props.item.stats.rating} ({props.item.stats.reviewCount}) • {props.item.location}</span>
        </p>
      </div>
      <p className='card-title'>{props.item.title}</p>
      <p><span className='bold'>From ${props.item.price}</span>/person</p>
    </div>
  );
}

Card.propTypes = {
  
  item: PropTypes.shape({
    coverImg: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    openSpots:PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
