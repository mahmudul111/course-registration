
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses'
import Header from './components/Header'
import Listitems from './components/Listitems'

function App() {
  const [listItems, setListItems] = useState([])
  const [remaining, setRemaining] = useState(20)
  const [total, setTotal] = useState(0)


  const handleAddListItem = (course) =>{
    const isExist = listItems.find((item) => item.id == course.id)
    
    if(isExist){
      return alert('already selected')
    }else{
      
      const remainingCredit = remaining - course.credit;
      
      const newTotal = total + course.credit
      
      if(newTotal > 20){
        return alert('sorry you do not have enough credit')
      }else{
        setRemaining(remainingCredit)
        setTotal(newTotal)
        const newListItem = [...listItems, course]
      setListItems(newListItem)
      }
      
    }
      
  }

  return (
    <>
      <Header></Header>
      <div className='mt-5 md:flex gap-5 max-w-screen-xl mx-auto mb-10'>
        <Courses handleAddListItem ={handleAddListItem }></Courses>
        <Listitems listItems={listItems} remaining ={remaining} total = {total} ></Listitems>
      </div>
    </>
  )
}

export default App
