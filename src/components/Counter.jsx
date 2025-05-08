import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add, subtract } from '../features/counter/CountSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(state=>state.count)
  return (
    <>
    <p>{value}</p>
    <button onClick={()=>dispatch(add())} >add</button>
    <button onClick={()=>dispatch(subtract())}>sub</button>
    </>
  )
}

export default Counter