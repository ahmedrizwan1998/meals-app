import React from 'react'
import {useState} from "react";
import {useGlobalContext} from "../context";

function Search() {
  const {setSearchTerm, fetchRandomMeal} = useGlobalContext();
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text) {
      console.log(text)
      setSearchTerm(text);
      setText('');
    }
  }

  function handleRandomMeal() {
    setSearchTerm('');
    setText('');
    fetchRandomMeal();
  }
  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit} > 
        <input className='form-input' value={text} onChange={handleChange} type="text" placeholder='Search'/>
        <button className='btn' type='submit'>Search Meal</button>
        <button className='btn btn-hipster' onClick={handleRandomMeal} type='btn'>Surprise Me!</button>
      </form>
    </div>
  )
}

export default Search
