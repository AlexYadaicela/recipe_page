// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function RecipeImage({recipe}){
  return(
    <img 
      className='recipe_image'
      src={recipe.imageURL}
      alt={recipe.imageAlt}
    />
  );
}

function RecipeDescription({details, duration}){

  const totalTime = duration.preparation + duration.cooking; 

  return (
    <div className='recipe_description'>
      <h1 className='ff-secondary'>{details.title}</h1>
      <p>{details.description}</p>
      <div className="recipe_prep_time">
        <span>Preparation time</span>
        <ul>
          <li>
            <span className='bold'>Total:</span> Approximately {totalTime} minutes</li>
          <li>
            <span className='bold'>Preparation:</span> {duration.preparation} minutes</li>
          <li>
            <span className='bold'>Cooking:</span> {duration.cooking} minutes</li>
        </ul>
      </div>
    </div>
  );
}

function RecipeIngredients(){
  return(
    <div className="recipe_ingredients">
      <span className='ff-secondary c-red'>Ingredients</span>
      <ul>
        <li><span>2-3 large eggs</span></li>
        <li><span>Salt, to taste</span></li>
        <li><span>Pepper, to taste</span></li>
        <li><span> tablesppon of butter or oil</span></li>
        <li><span>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
      </ul>
    </div>
  );
}


function RecipeIntructions(){
  return(
    <div className="recipe_instructions">
      <span className='ff-secondary c-red'>Instructions</span>
      <ol>
        <li>
          <span className='bold'>Beat the eggs: </span>
          In a bowl, beat the eggs with 
          a pinch of salt and pepper until they are well mixed. 
          You can add a tablespoon of water or milk for a fluffier texture.
        </li>
        <li>
          <span className='bold'>Heat the pan: </span>
          Place a non-stick frying pan over medium heat and add butter or oild. 
        </li>
        <li>
          <span className='bold'>Cook the omelette: </span>
          Once the butter is melted and bubbling, pour in the eggs. Tilt 
          the pan to ensure the eggs evenly coat the surface. 
        </li>
        <li>
          <span className='bold'>Add fillings(optional): </span>
          When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the omelette. 
        </li>
        <li>
          <span className='bold'>Fold and serve: </span>
          As the omelette continues to cook, carefully lift one edge and fold it over the fillings.
          let it cook for another minute, then slide it onto a plate.
        </li>
        <li>
          <span className='bold'>Enjoy: </span>
          Serve hot, with additional salt and pepper if needed. 
        </li>
      </ol>
    </div>
  );
}

function RecipeNutrition(){
  return(
    <div className="recipe_nutrition">
      <span className='ff-secondary c-red'>Nutrition</span>
      <p>The table below shows nutritional values per serving without the additional fillings</p>
      <div className="nutrition_table">
        <table>
          <tr>
            <td>Calories</td>
            <td>277kcal</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>22g</td>
          </tr>
        </table>
      </div>
    </div>
  )
}


export default function Recipe() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <>

      <RecipeImage 
        recipe={{
          imageURL : '/image-omelette.jpeg',
          imgAlt : 'omelette'
        }}
      />
      <div className="information">
        <RecipeDescription 
          details={{
            title: 'Simple Omelette Recipe',
            description:
              'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.'        
          }}
          duration={{
            preparation: 5, 
            cooking: 5
          }}
        />

        <RecipeIngredients />
        <RecipeIntructions />
        <RecipeNutrition />
      </div>
    </>
  );
}


