import axios from 'axios';


const YOUR_APP_KEY = "1061f97c13795ad11ff76e6cf4ad0bd9";
const YOUR_APP_ID = "b1d57f67";

export const getRecipes = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    return await axios.get(url);
};

