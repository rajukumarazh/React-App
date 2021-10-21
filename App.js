import React,{useState,useEffect} from "react";
import Recipe from "./Recipe";
const App=()=>{
    const APP_Id="0dd789be";
       const APP_KEY="76a84c9d905e1499fbacd2dc787efac4";
       const [ recipes, setRecipes] = useState([]);
       const [search,setSearch] = useState("");
       const [query,setquery] = useState("banana");
       useEffect(()=>
       {
        getRecipe();
        console.log("use Effect called");
       },[query]); 
       const getRecipe =async()=>{
         
           const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_Id}&app_key=${APP_KEY}`)
            const data= await response.json();
            //
            console.log(data.hits);
            setRecipes(data.hits);
            //console.log(setRecipes);
             }
       const updateSearch=(e)=>{
        setSearch(e.target.value);
         }
        const getSearch=(e)=>{
               e.preventDefault();
               setquery(search);
             }
            return(
                 <div className="App" onSubmit={getSearch}><form>
                 
                  <h1>Calories Finder</h1>
                 <p>Enter Recipe name for deatails</p>
                   <input  type="text" placeholder="Enter Recipe"
                   onChange={updateSearch}>
                   </input>
                   <button> Search</button>
                   <div>
                   <ul id ="nav">
                     <li><a href="#">food recipe</a></li>
                   </ul>
                 </div>
                   </form>
                   {recipes.map((recipe)=>(
                     <Recipe title={recipe.recipe.label}
                       calories ={recipe.recipe.calories}
                       image={recipe.recipe.image}
                     />
                   ))}
                 </div>
            );
          }
          export default App;

