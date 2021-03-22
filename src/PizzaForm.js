import React from 'react'
export default function PizzaForm(props) {
  const {values,submit,change,disabled,errors,} = props
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }
  const onChange = evt => {
    /* :fire: LET'S SPECIFY SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }
  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit' >
        <h2>Add Order</h2>
        {/* :fire: DISABLE THE BUTTON */}
        <button id = 'submitBtn' disabled={disabled}>Order</button>
        <div className='errors'>
          {/* :fire: RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.specialInstructions}</div>
        </div>
      </div>
      <div className='form-groupInputs'>
        <h4>ORDER'S DETAILS</h4>
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
        </div>
      <div>
          {/* ////////// DROPDOWN ////////// */}
        <label>Choose Crust Size
          <select
            onChange={onChange}
            value={values.choiceOfSize}
            name='choiceOfSize'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='extra-large'>Extra-large</option>
          </select>
        </label>
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Original Red
          <input
            type='radio'
            name='choiceOfSauce'
            onChange={onChange}
            value='originalRed'
            checked={values.choiceOfSauce === 'originalRed'}
          />
        </label>
        <label>Garlic Ranch
          <input
              type='radio'
              name='choiceOfSauce'
              onChange={onChange}
              value='garlicRanch'
              checked={values.choiceOfSauce === 'garlicRanch'}
            />
        </label>
        <label>BBQ Sauce
          <input
              type='radio'
              name='choiceOfSauce'
              onChange={onChange}
              value='BBQSauce'
              checked={values.choiceOfSauce === 'BBQSauce'}
            />
        </label>
        <label>Spinach Alfredo
          <input
              type='radio'
              name='choiceOfSauce'
              onChange={onChange}
              value='spinachAlfredo'
              checked={values.choiceOfSauce === 'spinachAlfredo'}
            />
        </label>
      </div>
      <div className='form-groupcheckboxes'>
        <h4>Add Toppings Choose Up to 10</h4>
        {/* ////////// CHECKBOXES ////////// */}
        <label>peperoni
          <input 
            type='checkbox'
            name='peperoni'
            onChange={onChange}
            checked={values.peperoni}
          />
        </label>
        <label>Spycy Italian Sausage
          <input 
              type='checkbox'
              name='spycyItalianSausage'
              onChange={onChange}
              checked={values.spycyItalianSausage} 
            />
        </label>
        <label>Sausage
          <input 
              type='checkbox'
              name='sausage'
              onChange={onChange}
              checked={values.sausage} 
            />
        </label>
        <label>Canadian Bacon
          <input 
              type='checkbox'
              name='canadianBacon'
              onChange={onChange}
              checked={values.canadianBacon} 
            />
        </label>
        <label>Griled Chicken
          <input 
              type='checkbox'
              name='griledChicken'
              onChange={onChange}
              checked={values.griledChicken} 
            />
        </label>
        <label>Onion
          <input 
              type='checkbox'
              name='onion'
              onChange={onChange}
              checked={values.onion} 
            />
        </label>
        <label>Green paper
          <input 
              type='checkbox'
              name='greenPaper'
              onChange={onChange}
              checked={values.greenPaper} 
            />
        </label>
        <label>Black Olives
          <input 
              type='checkbox'
              name='blackOlives'
              onChange={onChange}
              checked={values.blackOlives}
            />
        </label>
        <label>Diced Tomato
          <input 
              type='checkbox'
              name='dicedTomato'
              onChange={onChange}
              checked={values.dicedTomato} 
            />
        </label>
        <label>Roasted Garlic
          <input 
              type='checkbox'
              name='raostedGarlic'
              onChange={onChange}
              checked={values.raostedGarlic} 
            />
        </label>
        <label>Arthichoke Hearts
          <input 
              type='checkbox'
              name='arthichokeHearts'
              onChange={onChange}
              checked={values.arthichokeHearts} 
            />
        </label>
        <label>Pineapple
          <input 
              type='checkbox'
              name='pineapple'
              onChange={onChange}
              checked={values.pineapple} 
            />
        </label>
        <label>Three Cheese
          <input 
              type='checkbox'
              name='threeCheese'
              onChange={onChange}
              checked={values.threeCheese} 
            />
        </label>
        <label>Extra Cheese
          <input 
              type='checkbox'
              name='extraCheese'
              onChange={onChange}
              checked={values.extraCheese} 
            />
        </label> 
            <div>
            <label>special Instructions&nbsp;
          <input
            value={values.specialInstructions}
            onChange={onChange}
            name='specialInstructions'
            type='text'
          />
        </label>
            </div>   
      </div>
    </form>
  )
}