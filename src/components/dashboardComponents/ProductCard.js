import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

function ProductCard({props, setCart, cart, order, setOrder}) {
  const postCard = {
    borderRadius: '5px',
    height: '400px',
    width: '350px',
    backgroundColor: '#f2f2f2'
  }
  const innerCard = {
    height: '50%',
    width: '100%',
    backgroundColor: '#F5AF0B',
    borderRadius: '30px 30px 5px 5px'
  }
  const checkoutBtn = {
    width: '70%',
    backgroundColor: "#800000",
    border: 'none',
    color: '#f2f2f2',
    padding: '7px',
    borderRadius: '3px',
  }
  
  
  return (
    <>
      <div style={postCard} className='d-flex justify-content-between align-items-center flex-column m-3'>
        {/* <h5>ProductCard</h5> */}
        <div className='p-4 beer-image d-flex justify-content-center align-items-start'>
          <img src={props.image_url} alt='beer' height={150} />
        </div>
        <div className='mx-5' style={innerCard} onClick={() => console.log('clicked!')}>
          <div className='d-flex justify-content-between px-4 pt-3' style={{ color: '#800000' }}>
            <h5>{props.name}</h5>
            <i className='bx bxs-heart bx-sm'></i>
          </div>
          <div className='d-flex justify-content-between px-4 pt-2' style={{ color: '#800000' }}>
            <h6>{props.quantity} pcs</h6>
            <h6>Ksh. {props.price}</h6>
          </div><div className='d-flex justify-content-between px-4 pt-2' style={{ color: '#800000' }}>
            <p>{props.description.substring(0, 60)}...</p>

          </div>

          {/* button */}
          <div className='d-flex justify-content-evenly align-items-center mb-5' style={{width:'100%'}}>
            <button style={checkoutBtn} className='d-flex justify-content-center align-items-center'
            onClick={() => {
              setCart(()=>{
                if(cart === []){
                  console.log(cart)
                  return cart.push(props)
                }
                else{
                  console.log(cart)
                  return [...cart, props]
                }

              });
              setOrder(()=>
                {
                  if(order === [])
                 {
                  return order.push(props)
                }
                 else{
                  return [...order, props]
                 }
                }
              );
              
            }}
            >
              <p className='px-1'>Add to Cart</p>
              <i className='bx bxs-cart bx-sm' ></i>
            </button>
            <div className=''>
              <Link to={`/details/${props.id}`}>View</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard