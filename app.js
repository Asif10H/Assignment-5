 // meal search button 
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', function (){
    const inputMeal = document.getElementById('food-meal').value;
    getMealData(inputMeal);  
})
//meal search mealdb api
const getMealData = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
}
// meals display
const displayMeals =  meals =>{
    const mealsContainer = document.getElementById('meals-section');
    for(let i = 0; meals.length; i++){
        const meal = meals[i];
        //console.log(meal.idMeal);
        const mealResult = document.createElement('div');
        mealResult.className = 'meal-box';
        const mealDetail = `
            <img src="${meal.strMealThumb}">
            <h5>${meal.strMeal}</h5>
            <button onclick= "mealIngredients(${meal.idMeal})"> Meal Ingredients Detail </button>
        ` 
        //displayMealsDetail
        mealResult.innerHTML = mealDetail;
        mealsContainer.appendChild(mealResult);
        
    }
}
// meal ingredients section 





