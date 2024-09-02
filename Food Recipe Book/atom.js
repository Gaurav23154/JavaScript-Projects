const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const showRecipe=document.querySelector(".container");
function displayRecipe(recipes){
showRecipe.innerHTML="";
recipes.forEach( (element) => {
    const recipeElementP=document.createElement("div");
    recipeElementP.classList.add("secondContainer");
    showRecipe.append(recipeElementP);
    const recipeImg=document.createElement("img");
    recipeImg.src=element.image;
    recipeImg.alt="recipe Image";
    const imageContainer=document.createElement("div");
    imageContainer.classList.add("imagecontainer");
    imageContainer.append(recipeImg); 
    const recipeTitle=document.createElement("h2");
    recipeTitle.innerText=element.title;
    imageContainer.append(recipeTitle);
    recipeElementP.append(imageContainer);
   
    const recipeP=document.createElement("div");
    recipeP.classList.add("para");
    recipeP.innerHTML=`
        <strong>Ingredients:</strong> ${element.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}
    `;
    recipeElementP.append(recipeP);
    const recipebtn=document.createElement("button");
    recipebtn.innerText="Food Recipe";
    recipebtn.classList.add("btn");
    recipeElementP.append(recipebtn);

});
}
const getRecipe = async () => {
  console.log("fetching Data");
  let response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  console.log(response);
  const RecipeData=await response.json();

  console.log(RecipeData);
  return RecipeData.recipes;
};
async function init(){
    const recipes= await getRecipe();
    displayRecipe(recipes);
}
init();
