import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe'

function App() {

  const APP_ID = 'c458c83a'
  const APP_KEY = 'c1bbf7192ccab38fe2f3cae38df456c3'

  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(()=>{
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <h1 className='nav'>Ingredients and Recipes</h1>
      <p className="nav">know what's in your favourite meal</p>
      <div>
      <form onSubmit={getSearch} className ="search-form">
        <input placeholder='search for your favourite food item' className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type='submit'>
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          
          />
        ))}  
      </div>
    </div>
    </div>
  );
}

export default App;
