import { Route, Link, Switch } from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import formSchema from './formSchema'
import * as yup from 'yup'
import Order from './Order'
import PizzaForm from './PizzaForm'
import Home from './Home'
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  //text input
  name: '',
  ///// DROPDOWN /////
  choiceOfSize: '',
  ///// RADIO BUTTONS /////
  choiceOfSauce: '',
  ///// CHECKBOXES /////add toppings up to 10
  peperoni: false,
  sausage: false,
  canadianBacon: false,
  spycyItalianSausage: false,
  griledChicken: false,
  onion: false,
  greenPaper: false,
  dicedTomato: false,
  blackOlives: false,
  raostedGarlic: false,
  arthichokeHearts: false,
  pineapple: false,
  threeCheese: false,
  extraCheese: false,
  //more checkbox
  glutenFreeCrustForAdollarExtra: false,
  //Text inputs/with placeholder'anything else you would like to add?'
  specialInstructions: '',
  ///somekindof dropdown with a number/quantity
  //add to order button with a price tag
}
const initialFormErrors = {
  choiceOfSize: '',
  choiceOfSauce: '',
  specialInstructions: ''
}
const initialOrder = []
const initialDisabled = true
const App = () => {
  //////////////// STATES ////////////////
  const [orders, setorders] = useState(initialOrder)          // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean
  //////////////// HELPERS ////////////////
  const postNewOrder = newOrder => {
    // :fire: IMPLEMENT! ON SUCCESS ADD NEWLY CREATED ORDER TO STATE
    //    helper to [POST] `neworder` to `https://reqres.in/api/orders`
    //    and regardless of success or failure, the form should reset
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setorders([res.data, ...orders])
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    // :fire: RUN VALIDATION WITH YUP
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        // happy path
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      specialInstructions: formValues.specialInstruction.trim(),
      choiceOfSauce: formValues.choiceOfSauce.trim(),
      choiceOfSize: formValues.choiceOfSize.trim(),
      // :fire: PICK TOPIGINGS
      Toppings: ['peperoni',
        'sausage',
        'canadianBacon',
        'spycyItalianSausage',
        'griledChicken',
        'onion',
        'greenPaper',
        'dicedTomato',
        'blackOlives',
        'raostedGarlic',
        'arthichokeHearts',
        'pineapple',
        'threeCheese',
        'extraCheese'].filter(topping => formValues[topping])
    }
    // :fire:POST NEW ORDER USING HELPER
    postNewOrder(newOrder)
  }
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    // :fire: ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  return (
    <div className='container'>
      <header><h1>Lambda Eat!</h1></header>
      <nav>
        <h1 className='pizza-header'>Pizza&apos;s Pizza</h1>
        <div className='nav-links'>
          {/*  Make Links to navigate us Home (`/`) and Shop (`/PizzaForm`) */}
          <Link to="/">Home</Link>
          <Link to="/PizzaForm">Order</Link>
        </div>
      </nav>
    <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        orders.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
      {/* :point_right: STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/pizza-form/:orderID">
          <Order orders={orders} />
        </Route>
        <Route path="/pizza-form">
          <PizzaForm orders={orders} />
        </Route>
      </Switch>
    </div>
  )
};
export default App;