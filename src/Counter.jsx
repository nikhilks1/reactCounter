import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counterSlice'

const Counter = () => {
  const[amount,setAmount] = useState(0)
  const {count}=useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const handleIncrementAmount = () =>{
    if(amount){
   // dispatch action with input amount
   dispatch(incrementByAmount(amount))
    } 
    else{
      alert("Please fill the form !!!")
    }

  }
  
  return (
    
      <div className='border rounded p-5 border-white text-center'>
           <h1 style={{fontsize:'100px'}}>{count}</h1>
           <div style={{fontsize:'500px'}} className='d-flex justify-content-between mt-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning text-light'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger text-light'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success text-light'>Increment</button>
           </div>
           <div className='d-flex justify-content-between align-items-center mt-5'>
            <input onChange={e=>setAmount(e.target.value)} placeholder="Input Increment  Amount" type='text' className='form-control' />
            <button onClick={handleIncrementAmount} className='btn btn-primary ms-3'>Increment by amount</button>
           </div>
      </div>
     
  )
}

export default Counter
