
import { Fragment, useState } from 'react'
import './App.scss'
import Green from './components/Green'
import Cheese from './components/Cheese'
import Meat from './components/Meat'
import Tomato from './components/Tomato'
import Button from './components/Button'

const data = [
  {id: 1, title: 'green', price: 1},
  {id: 2, title: 'cheese', price: 2},
  {id: 3, title: 'tomato', price: 1.5},
  {id: 4, title: 'meat', price: 6}
]

function App() {

  const [counter, setCounter] = useState(0)
  const [component, setComponent] = useState(false)
  
  return (
    <Fragment>
      <div className="totalsum">
        <h1>Total price: {counter}$</h1>
      </div>
      <div className="hamburger">

      <div className="menu">

       { data.map(element => {
        const addClick = () =>{
          setCounter(counter + element.price)
          setComponent(true)
        }
        const removeClick = () =>{
          setCounter(counter - element.price)
          setComponent(false)
        }
        return(
          <div className='productline' key={element.id}>
          <div className="product">
          <h2>{element.title}</h2>
          <h2 style={{color:"yellow"}}>{element.price}$</h2>
          </div>   
          <div className="btn">
          <Button name = "Add" clickFn = {addClick}/>
          <Button name = "Remove" clickFn ={removeClick}/>
        </div>
          </div>          
         )
        })}


       
      </div>


      <div className="burger">
      <div className='upside bread'></div>
      {component ? <Green /> : console.log('working')}
      {component ? <Cheese /> : console.log('working')}
      {component ? <Meat /> : console.log('working')}
      {component ? <Tomato /> : console.log('working')}
      {/* <Green />
      <Cheese />
      <Meat />
      <Tomato/> */}

      <div className='downside bread'></div>    
      </div>
      </div>
      
    </Fragment>
  )
}

export default App
