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
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Main