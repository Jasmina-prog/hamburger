
import { Fragment, useState } from 'react'
import './App.scss'
import Green from './components/Green'
import Cheese from './components/Cheese'
import Meat from './components/Meat'
import Tomato from './components/Tomato'
import Button from './components/Button'

const data = [
  {id: 1, title: 'green', price: '0.1$'},
  {id: 2, title: 'cheese', price: '0.4$'},
  {id: 3, title: 'tomato', price: '0.6$'},
  {id: 4, title: 'meat', price: '1.2$'}
]

function App() {

  const [click, setClick] = useState(false)

  const addClick = () =>{
    setClick(true)
    console.log('working');
  }
  return (
    <Fragment>
      <div className="hamburger">

      <div className="menu">

       { data.map(element => {
        console.log(element.title)
         return(
          <div className='productline' key={element.id}>
          <div className="product">
          <h2>{element.title}</h2>
          <h2>{element.price}</h2>
          </div>   
          <div className="btn">
          <Button name = "Add" addClickFn = {addClick}/>
          <Button name = "Remove"/>
        </div>
          </div>          
         )
        })}


       
      </div>


      <div className="burger">
      <div className='upside bread'></div>
      {setClick ? <Green /> : console.log('false')}
      {/* <Green /> */}
      <Cheese />
      <Meat />
      <Tomato/>
      <div className='downside bread'></div>    
      </div>
      </div>
      
    </Fragment>
  )
}

export default App
