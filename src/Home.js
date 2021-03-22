import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'
export default function Home() {
  // :point_right: STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list
  const history = useHistory()
  const routeToOrder = () => {
    console.log('...routing')
    history.push('/PizzaForm')
  }
  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://media3.giphy.com/media/9fuvOqZ8tbZOU/200.gif'
        alt=''
      />
      <button
        onClick={routeToOrder}
        className='md-button shop-button'
      >
        Order Now!
      </button>
    </div>
  )
}