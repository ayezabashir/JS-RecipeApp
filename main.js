const recipeForm = document.getElementById('recipe-form');
const recipeContainer = document.getElementById('recipe-container');

let listItems = [];

function handleFormSubmit(e) {
    e.preventDefault();

    const name = recipeForm.querySelector('#name').value;
    const method = recipeForm.querySelector('#method').value;
    const roast = recipeForm.querySelector('#roast').value;
    const grind = recipeForm.querySelector('#grind').value;
    const ratio = recipeForm.querySelector('#ratio').value;
    const note = recipeForm.querySelector('#note').value;

    const newRecipe = {
        name,
        method,
        roast,
        grind,
        ratio,
        note,
        id: Date.now(),
    }

    listItems.push(newRecipe);
    // console.log(newRecipe);

    e.target.reset();
    displayRecipes();
}

function displayRecipes() {
    const tempString = listItems.map(item => `
        <div class="col">
          <div class="card mb-4 rouned-3 shadow-sm border-primary">
             <div class="card-header py-3 text-white bg-primary border-primary">
                ${item.name}
             </div>
          </div>
        </div>
    `)
}

recipeForm.addEventListener('submit', handleFormSubmit);