import React from 'react'
function Order({ details }) {
  if(!details) {
    return <h3>Working fetching your order&apos;s details...</h3>
  }
  return (
    <div className='user container'>
      <h2>{details.name}</h2>
      {
        !!details.Toppings && !!details.Toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.Toppings.map((like, id) => <li key={id}>{like}</li>)}
          </ul>
            <div>
            <p>Special Instructions: {details.specialInstructions}</p>
            </div>
        </div>
      }
    </div>
  )
}
export default Order