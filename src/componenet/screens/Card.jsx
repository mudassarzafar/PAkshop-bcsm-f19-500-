
import '../style/Card.css';



const Card = (props) => {
  
    

  
  return (
    <div>
        <div className="product-card">
<div className="product-image" >
  <img src={props.imagesrc} alt='' className='image1'></img>
  

</div>
<div className='child-card'>
<div className="title"><h4>{props.name}</h4></div>
<div className="product-desc"><p>{props.desc}</p></div>
<div className="product-price"><p>{props.price}</p></div>
<div className="cart">
    <button className='btn'>Add to Cart</button>
</div>

</div>
</div>

    </div>
  )
}
export default Card