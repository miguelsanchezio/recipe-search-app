import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import SearchForm from "./Components/SearchForm";
import CardsGrid from "./Components/CardsGrid";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search");
    const difficulty = queryParams.get("difficulty");
    const time = queryParams.get("time");

    const fetchRecipes = async () => {
      // If there's no search query, we fetch the default recipes
      const url =
        search === null
          ? "https://dummyjson.com/recipes"
          : `https://dummyjson.com/recipes/search?&q=${search}`;

      try {
        const res = await axios.get(url);
        let recipesData = res.data.recipes;

        // Filter recipes by difficulty and time
        if (difficulty) {
          recipesData = recipesData.filter(
            (recipe) => recipe.difficulty.toLowerCase() == difficulty
          );
        }

        if (time) {
          recipesData = recipesData.filter((recipe) => {
            const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

            if (time === "quick") {
              return totalTime < 15;
            } else if (time === "normal") {
              return totalTime >= 15 && totalTime <= 30;
            } else if (time === "long") {
              return totalTime > 30;
            }
          });
        }

        // This is on purpose
        // Limiting the number of recipes to 8 here instead of in the API request
        // The API doesn't offer a way to return items by prepTimeMinutes or cookTimeMinutes or difficulty
        // so we can't guarantee that the first 8 items are the most relevant
        recipesData = recipesData.slice(0, 8);

        setRecipes(recipesData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, [location.search]);

  // We map the recipes to create the cards and pass the recipe data as props
  // We also pass the isFeatured prop to the first recipe card
  const recipesCards = recipes.map((recipe, index) =>
    index === 0 ? (
      <Card key={index} recipeData={recipe} isFeatured />
    ) : (
      <Card key={index} recipeData={recipe} />
    )
  );

  return (
    <div className='App'>
      <MainLayout>
        <Header />
        <main>
          <SearchForm />
          <CardsGrid>
            {recipes.length > 0 ? (
              recipesCards
            ) : (
              <p className='text-2xl col-span-3 font-bold mt-10'>
                No recipes found, please try again.
              </p>
            )}
          </CardsGrid>
        </main>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default App;
