import React from 'react'
import {useGlobalContext} from "../context";
import {BsHandThumbsUp} from "react-icons/bs";

function Meals() {
  const {meals, loading} = useGlobalContext();

  if (loading) {
    return <div className='section'>
      <h4>Loading....</h4>
    </div>
  }
  
  if (meals.length < 1) {
    return <div className='section'>
      <h4>No Items</h4>
    </div>
  }
  return (
      <section className='section-center'>
        {
          meals.map((meal) => {
            const {idMeal, strMeal: title, strMealThumb: image} = meal
            return (
              <div key={idMeal} className="single-meal">
                <img src={image} className="img"/>
                <div className='footer'>
                  <h5>{title}</h5>
                  <button className='like-btn'><BsHandThumbsUp /></button>
                </div>
              </div>
            )
          })  
        }
      </section>
  )
}

export default Meals
