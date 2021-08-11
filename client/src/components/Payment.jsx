import { Link } from 'react-router-dom'
import { useStateValue } from '../state/StateProvider'
import '../styles/Payment.css'
import CheckoutProduct from './CheckoutProduct'

const Payment = () => {
   const [{ basket, user }] = useStateValue()

   return (
      <div className="payment">
         <div className="payment__container">
            <h1>
               Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>

            <div className="payment__section">
               <div className="payment__title">
                  <h3>Delivery Address</h3>
               </div>

               <div className="payment__address">
                  <p>{user?.email}</p>
                  <p>123 React Road</p>
                  <p>South Africa</p>
               </div>
            </div>
            <div className="payment__section">
               <div className="payment__title">
                  <h3>Review items & delivery</h3>
               </div>

               <div className="payment__items">
                  {basket.map((item) => (
                     <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                     />
                  ))}
               </div>
            </div>
            <div className="payment__section">
               <div className="payment__title">
                  <h3>Payment Method</h3>
               </div>

               <div className="payment__details">Stripe</div>
            </div>
         </div>
      </div>
   )
}

export default Payment
