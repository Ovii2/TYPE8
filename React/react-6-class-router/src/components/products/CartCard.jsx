import { Link } from 'react-router-dom';

const CartCard = (props) => {
  return (
    <div className='product-card'>
      <img className='product-image' src={props.image} alt={props.title} />
      <h3>{props.item}</h3>
      <p>{props.price}</p>
      <Link to={`/products/${props.id}`}>
        <button>Buy</button>
      </Link>
    </div>
  );
};

export default CartCard;
