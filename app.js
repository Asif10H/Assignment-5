 // meal search button 
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', function (){
    const inputMeal = document.getElementById('food-meal').value;
    getMealData(inputMeal);  
})
//meal search in mealdb api
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
//meal ingredients section 
const mealIngredients = ingredient => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => singleMealIngredient(data.meals[0]));
}

// single ingredient item
const singleMealIngredient = mealIngredient => {
    const ingredientsId = document.getElementById('meal-ingredients');
    ingredientsId.innerHTML = `
            <div class="ingredients">
                <img src="${mealIngredient.strMealThumb}">
                <h1>${mealIngredient.strMeal}</h1>
                <p><b>Ingredients</b></p>
                <p id="points"></p> 
            </div>
        `
    const ingredientPoint = document.getElementById('points');
    for (let i = 1; i < 21; i++) {
        if (mealIngredient['strIngredient' + i]  != "" && mealIngredient['strIngredient' + i] != null) {
            const element = document.createElement('li');
            element.innerText = `${mealIngredient['strIngredient' + i]}`;
            ingredientPoint .appendChild(element);
        }
    }
}





