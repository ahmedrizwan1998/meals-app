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

    useEffect(() => {
        fetchMeal(allMealsUrl)
    },[searchTerm]);

    useEffect(() => {
        if (!searchTerm) {
            return
        }
        fetchMeal(`${allMealsUrl}`);
    },[searchTerm]);
    return (
        <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeal}}>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};
