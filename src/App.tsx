/** @jsxImportSource react */
import React, { useState } from 'react';
import './App.css';
import { Recipe } from './types';
import { sampleRecipes } from './data/recipes';

const getRecipeEmoji = (recipeName: string): string => {
  const emojiMap: Record<string, string> = {
    'Garlic Soy Chicken Stir-Fry': '🐔 ',
    '5-Minute Chicken Curry': '🍛 ',
    'Teriyaki Salmon & Roasted Veg': '🐟 ',
    'Stir-Fried Tofu & Broccoli': '🥦 ',
    'Egg Fried Rice': '🍚 ',
    'Venison Steak Superfood Salad': '🥗 ',
    'No-Mayo Tuna & Bean Salad': '🐟 ',
    'Overnight Oats': '🥣 ',
    'Roasted Chickpeas': '🌱 ',
    'Hard-Boiled Eggs': '🥚 ',
    'Hummus & Veggie Sticks': '🥕 ',
    'Chia Pudding': '🥛 ',
    'Oatmeal Energy Bites': '🍯 ',
    'Mandarin Oranges & Pistachios': '🍊 ',
    'Banana Nice Cream': '🍌 ',
    'Apple Pie Energy Balls': '🍏 ',
    'Avocado Chocolate Mousse': '🥑 ',
    'Oatmeal Cookies': '🍪 ',
    'Baked Apples with Nuts & Cinnamon': '🍎 '
  };
  return emojiMap[recipeName] || '🍽️ '; // default emoji if recipe not found
};

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleRecipeSelection = (recipe: Recipe) => {
    setSelectedRecipes(prev => 
      prev.find(r => r.id === recipe.id)
        ? prev.filter(r => r.id !== recipe.id)
        : [...prev, recipe]
    );
  };

  const toggleItemCheck = (itemKey: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemKey)) {
      newCheckedItems.delete(itemKey);
    } else {
      newCheckedItems.add(itemKey);
    }
    setCheckedItems(newCheckedItems);
  };

  const capitalizeWords = (str: string) => {
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Group ingredients by aisle and consolidate same ingredients
  const shoppingList = selectedRecipes.reduce((acc, recipe) => {
    recipe.ingredients.forEach(ingredient => {
      if (!acc[ingredient.aisle]) {
        acc[ingredient.aisle] = {};
      }
      
      const key = ingredient.name.toLowerCase();
      if (!acc[ingredient.aisle][key]) {
        acc[ingredient.aisle][key] = {
          name: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
          recipes: [recipe.name]
        };
      } else {
        acc[ingredient.aisle][key].amount += ingredient.amount;
        if (!acc[ingredient.aisle][key].recipes.includes(recipe.name)) {
          acc[ingredient.aisle][key].recipes.push(recipe.name);
        }
      }
    });
    return acc;
  }, {} as Record<string, Record<string, { name: string; amount: number; unit: string; recipes: string[] }>>);

  return (
    <div className="App">
      <h1>Recipe Shopping List</h1>
      
      <div className="recipe-category-key">
        <div className="category-item">
          <div className="category-color main-meals"></div>
          <span>Main Meals</span>
        </div>
        <div className="category-item">
          <div className="category-color snacks"></div>
          <span>Snacks</span>
        </div>
        <div className="category-item">
          <div className="category-color desserts"></div>
          <span>Desserts</span>
        </div>
      </div>
      
      <div className="recipe-grid">
        {Object.entries(
          sampleRecipes.reduce((acc, recipe) => {
            const category = recipe.category;
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(recipe);
            return acc;
          }, {} as Record<string, Recipe[]>)
        ).map(([category, recipes]) => (
          <div key={category}>
            <div className="category-section">
              {recipes.map(recipe => (
                <div 
                  key={recipe.id} 
                  className={`recipe-card ${recipe.category.replace(' ', '-')} ${selectedRecipes.find(r => r.id === recipe.id) ? 'selected' : ''}`}
                  onClick={() => toggleRecipeSelection(recipe)}
                >
                  <h3>{getRecipeEmoji(recipe.name)}{recipe.name}</h3>
                  <p>Category: {recipe.category}</p>
                  <p>Prep: {recipe.prepTime}min | Cook: {recipe.cookTime}min</p>
                  <p>Serves: {recipe.servings}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedRecipes.length > 0 && (
        <div className="shopping-list">
          <h2>Shopping List</h2>
          {Object.entries(shoppingList).map(([aisle, ingredients]) => (
            <div key={aisle} className="aisle-group">
              <h3>{aisle}</h3>
              <ul>
                {Object.values(ingredients).map((ingredient, idx) => {
                  const itemKey = `${ingredient.name}-${ingredient.recipes.join('-')}-${idx}`;
                  return (
                    <li key={itemKey} className="shopping-list-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={checkedItems.has(itemKey)}
                          onChange={() => toggleItemCheck(itemKey)}
                        />
                        <span className={checkedItems.has(itemKey) ? 'checked' : ''}>
                          {capitalizeWords(ingredient.name)} - {ingredient.amount} {ingredient.unit}
                          <span className="recipe-name">    {ingredient.recipes.map(name => `[${name}]`).join(' & ')}</span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
