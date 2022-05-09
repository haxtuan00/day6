import React from 'react'
import './style.css'
const Todo = ({id,title,price,description,category,image,rate,count}) => {
  return (
    <div className='todos'>
        <img src={image} />
        <div><span>ID: </span>{id}</div>
        <div><span>TiTLE: </span>{title}</div>
        <div><span>PRICE: </span>{price}</div>
        <div><span>DESCRIPTION: </span>{description}</div>
        <div><span>CATEGORY: </span>{category}</div>
        <div><span>RATE: </span>{rate}</div>
        <div><span>COUNT: </span>{count}</div>
    </div>
  )
}

export default Todo