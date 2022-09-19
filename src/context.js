import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import fetch from "node-fetch";
const AppContext = React.createContext();


    //search meal by name 
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    //single random meal
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const fetchMeal = async (url) => {
        // const response = await axios(url);
        setLoading(true);
        try {
            const {data} = await axios(url);
            if (data.meals) {
                setMeals(data.meals);
            }
        } catch (error) {
            console.log(error.response)
        }
        setLoading(false);
    };
    const fetchRandomMeal = () => {
        fetchMeal(randomMealUrl)
    }

    const selectMeal = (idMeal) => {
        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal);
        setSelectedMeal(meal);
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    useEffect(() => {
        fetchMeal(allMealsUrl)
    },[searchTerm]);

    useEffect(() => {
        if (!searchTerm) {
            return
        }
        fetchMeal(`${allMealsUrl}${searchTerm}`);
    },[searchTerm]);
    return (
        <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal}}>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};
