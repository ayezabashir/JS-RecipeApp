const recipeForm = document.getElementById('recipe-form');
const recipeContainer = document.getElementById('recipe-container');

let listItems = [];

function handleFormSubmit(e) {
    e.preventDefault();

    const name = DOMPurify.sanitize(recipeForm.querySelector('#name').value);
    const method = DOMPurify.sanitize(recipeForm.querySelector('#method').value);
    const roast = DOMPurify.sanitize(recipeForm.querySelector('#roast').value);
    const grind = DOMPurify.sanitize(recipeForm.querySelector('#grind').value);
    const ratio = DOMPurify.sanitize(recipeForm.querySelector('#ratio').value);
    const note = DOMPurify.sanitize(recipeForm.querySelector('#note').value);

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
                <h4 class="my-0">${item.name}</h4>
             </div>
             <div class="card-body">
                <ul class="text-start">
                    <li><strong>Method: </strong>${item.method}</li>
                    <li><strong>Roast: </strong>${item.roast}</li>
                    <li><strong>Grind Size: </strong>${item.grind}</li>
                    <li><strong>Ratio: </strong>${item.ratio}</li>
                    ${!item.note.length ? "" : `<li><strong>Notes: </strong>${item.note}</li>`}     
                </ul>
                <button class="btn btn-lg btn-outline-danger" aria-label="Delete ${item.name}" value="${item.id}">Delete Recipe</button>
             </div>
          </div>
        </div>
    `).join('');
    // console.log(tempString);
    recipeContainer.innerHTML = tempString;
}

recipeForm.addEventListener('submit', handleFormSubmit);