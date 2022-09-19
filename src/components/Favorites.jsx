import React from 'react';
import {useGlobalContext} from "../context";

function Favorites() {
  const {favorites, removeFavorites, selectMeal} = useGlobalContext();

  // const {
  //   strMealThumb: image,
  //   strMeal: title
  // } = favorites
  return (
    <div className='favorites'>
      <div className='favorites-content'>
        <h5>Favorites</h5>
        <div className='favorite-container'>
          {
            favorites.map((item) => {
              const {idMeal, strMealThumb: image, strMeal: title} = item;
              return (
                <div key={idMeal} className='favorites-item'>
                  <img src={image} alt={title} className='fav-item-image' onClick={() => selectMeal(idMeal, true)}/>
                  <button className='remove-btn' onClick={() => removeFavorites(idMeal)}>remove</button>
                </div>                
              )
              
            })
          } 
        </div>
      </div>
    </div>
  )
}

export default Favorites