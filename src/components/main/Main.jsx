import React from 'react'
import './Main.scss';
import { data } from '../../helpers/data'

const Main = () => {
  return (
    <div className='card-container'>

      {data.map((item)=>{
        const {id, title, desc, image}=item
        return(
          <div className="cards" key={id}>

            <div className="title">
            <h1>{title}</h1>
            <img src={image} alt="" />

            <div className="card-over">
            <p>{desc}</p>
            </div>

            </div>
            
            
            
          </div>
        )
      })}
    </div>
  )
}

export default Main