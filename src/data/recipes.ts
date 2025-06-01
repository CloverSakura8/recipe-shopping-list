import { Recipe } from '../types';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Garlic Soy Chicken Stir-Fry',
    category: 'main meals',
    ingredients: [
      { name: 'chicken breast', amount: 200, unit: 'g', aisle: 'Meat & Seafood' },
      { name: 'soy sauce', amount: 2, unit: 'tbsp', aisle: 'Asian' },
      { name: 'garlic', amount: 2, unit: 'cloves', aisle: 'Produce' },
      { name: 'ginger', amount: 1, unit: 'tsp', aisle: 'Produce' },
      { name: 'sesame oil', amount: 1, unit: 'tbsp', aisle: 'Oils' },
      { name: 'brown rice', amount: 100, unit: 'g', aisle: 'Pasta & Rice' },
      { name: 'broccoli', amount: 100, unit: 'g', aisle: 'Produce' }
    ],
    instructions: [
      'Heat sesame oil in a pan over medium-high heat',
      'Add garlic and ginger, stir-fry for 30 seconds',
      'Add chicken, cook for 5-7 minutes until browned',
      'Add soy sauce and broccoli, stir-fry for 2 minutes',
      'Serve over pre-cooked brown rice'
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 2
  },
  {
    id: '2',
    name: '5-Minute Chicken Curry',
    category: 'main meals',
    ingredients: [
      { name: 'chicken breast', amount: 200, unit: 'g', aisle: 'Meat & Seafood' },
      { name: 'curry powder', amount: 1, unit: 'tbsp', aisle: 'Spices' },
      { name: 'garlic', amount: 1, unit: 'clove', aisle: 'Produce' },
      { name: 'onion', amount: 1, unit: 'whole', aisle: 'Produce' },
      { name: 'coconut milk', amount: 100, unit: 'ml', aisle: 'Asian' },
      { name: 'spinach', amount: 100, unit: 'g', aisle: 'Produce' },
      { name: 'brown rice', amount: 100, unit: 'g', aisle: 'Pasta & Rice' },
      { name: 'olive oil', amount: 1, unit: 'tbsp', aisle: 'Oils' }
    ],
    instructions: [
      'Heat olive oil in a pan',
      'Sauté onion & garlic for 2 minutes',
      'Add chicken and cook 5 minutes until browned',
      'Stir in curry powder, coconut milk, and spinach',
      'Simmer 5 minutes and serve over rice'
    ],
    prepTime: 5,
    cookTime: 12,
    servings: 2
  },
  {
    id: '3',
    name: 'Teriyaki Salmon & Roasted Veg',
    category: 'main meals',
    ingredients: [
      { name: 'salmon fillets', amount: 400, unit: 'g', aisle: 'Meat & Seafood' },
      { name: 'soy sauce', amount: 60, unit: 'ml', aisle: 'Asian' },
      { name: 'mirin', amount: 1, unit: 'tbsp', aisle: 'Asian' },
      { name: 'garlic', amount: 1, unit: 'clove', aisle: 'Produce' },
      { name: 'ginger', amount: 1, unit: 'tsp', aisle: 'Produce' },
      { name: 'sesame oil', amount: 1, unit: 'tsp', aisle: 'Asian' },
      { name: 'honey', amount: 1, unit: 'tsp', aisle: 'Condiments' },
      { name: 'broccoli', amount: 100, unit: 'g', aisle: 'Produce' },
      { name: 'carrots', amount: 100, unit: 'g', aisle: 'Produce' }
    ],
    instructions: [
      'Preheat oven to 200°C',
      'Mix marinade ingredients and pour half over salmon',
      'Marinate salmon for 30 minutes, flipping halfway',
      'Place salmon & vegetables on baking tray',
      'Bake for 12 minutes and serve with remaining sauce'
    ],
    prepTime: 35,
    cookTime: 12,
    servings: 4
  },
  {
    id: '4',
    name: 'Stir-Fried Tofu & Broccoli',
    category: 'main meals',
    ingredients: [
      { name: 'soft tofu', amount: 200, unit: 'g', aisle: 'Vegetarian & Vegan' },
      { name: 'soy sauce', amount: 2, unit: 'tbsp', aisle: 'Asian' },
      { name: 'garlic', amount: 1, unit: 'clove', aisle: 'Produce' },
      { name: 'oyster sauce', amount: 1, unit: 'tbsp', aisle: 'Asian' },
      { name: 'sesame oil', amount: 1, unit: 'tbsp', aisle: 'Asian' },
      { name: 'broccoli', amount: 100, unit: 'g', aisle: 'Produce' },
      { name: 'brown rice', amount: 100, unit: 'g', aisle: 'Pasta & Rice' }
    ],
    instructions: [
      'Heat sesame oil in a pan',
      'Add garlic, stir-fry 30 seconds',
      'Add tofu, cook 3 minutes until golden',
      'Add broccoli, soy sauce, oyster sauce',
      'Stir-fry 3 minutes and serve over rice'
    ],
    prepTime: 5,
    cookTime: 7,
    servings: 2
  },
  {
    id: '5',
    name: 'Egg Fried Rice',
    category: 'main meals',
    ingredients: [
      { name: 'brown rice', amount: 200, unit: 'g', aisle: 'Pasta & Rice' },
      { name: 'eggs', amount: 2, unit: 'whole', aisle: 'Dairy' },
      { name: 'soy sauce', amount: 2, unit: 'tbsp', aisle: 'Asian' },
      { name: 'garlic', amount: 1, unit: 'clove', aisle: 'Produce' },
      { name: 'carrots', amount: 50, unit: 'g', aisle: 'Produce' },
      { name: 'peas', amount: 50, unit: 'g', aisle: 'Frozen' },
      { name: 'sesame oil', amount: 1, unit: 'tbsp', aisle: 'Asian' }
    ],
    instructions: [
      'Heat sesame oil in a pan',
      'Stir-fry garlic & carrots for 2 minutes',
      'Push to side, scramble eggs in the pan',
      'Add rice, soy sauce, peas and stir-fry 3 minutes'
    ],
    prepTime: 5,
    cookTime: 5,
    servings: 2
  },
  {
    id: '6',
    name: 'Venison Steak Superfood Salad',
    category: 'main meals',
    ingredients: [
      { name: 'venison steaks', amount: 200, unit: 'g', aisle: 'Meat & Seafood' },
      { name: 'spinach', amount: 200, unit: 'g', aisle: 'Produce' },
      { name: 'cucumber', amount: 1, unit: 'whole', aisle: 'Produce' },
      { name: 'cherry tomatoes', amount: 100, unit: 'g', aisle: 'Produce' },
      { name: 'pumpkin seeds', amount: 2, unit: 'tbsp', aisle: 'Health Foods' },
      { name: 'balsamic vinegar', amount: 1, unit: 'tbsp', aisle: 'Condiments' }
    ],
    instructions: [
      'Sear venison 2 minutes per side',
      'Rest meat for 5 minutes, then slice',
      'Toss salad ingredients in a bowl',
      'Drizzle with balsamic vinegar'
    ],
    prepTime: 5,
    cookTime: 9,
    servings: 2
  },
  {
    id: '7',
    name: 'No-Mayo Tuna & Bean Salad',
    category: 'main meals',
    ingredients: [
      { name: 'canned tuna', amount: 150, unit: 'g', aisle: 'Canned Goods' },
      { name: 'cannellini beans', amount: 200, unit: 'g', aisle: 'Canned Goods' },
      { name: 'avocado', amount: 1, unit: 'whole', aisle: 'Produce' },
      { name: 'lemon juice', amount: 1, unit: 'tbsp', aisle: 'Produce' },
      { name: 'olive oil', amount: 1, unit: 'tbsp', aisle: 'Oils' },
      { name: 'black pepper', amount: 1, unit: 'tsp', aisle: 'Spices' }
    ],
    instructions: [
      'Mash avocado in a bowl',
      'Mix with tuna, beans, lemon juice, olive oil, and pepper',
      'Serve over salad or wholegrain toast'
    ],
    prepTime: 5,
    cookTime: 0,
    servings: 2
  },
  {
    id: '8',
    name: 'Overnight Oats',
    category: 'snacks',
    ingredients: [
      { name: 'oats', amount: 150, unit: 'g', aisle: 'Breakfast' },
      { name: 'almond milk', amount: 450, unit: 'ml', aisle: 'Dairy Alternatives' },
      { name: 'chia seeds', amount: 3, unit: 'tbsp', aisle: 'Health Foods' },
      { name: 'apple', amount: 150, unit: 'g', aisle: 'Produce' },
      { name: 'cinnamon', amount: 1, unit: 'tsp', aisle: 'Spices' }
    ],
    instructions: [
      'Mix oats, almond milk, chia seeds, cinnamon in jars',
      'Stir well, add grated apple or berries on top',
      'Refrigerate overnight'
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 3
  },

  {
    id: '9',
    name: 'Hard-Boiled Eggs',
    category: 'snacks',
    ingredients: [
      { name: 'eggs', amount: 6, unit: 'whole', aisle: 'Dairy' }
    ],
    instructions: [
      'Boil eggs for 8 minutes for firm yolks',
      'Cool under cold water',
      'Store in shell in fridge'
    ],
    prepTime: 2,
    cookTime: 8,
    servings: 6
  },

  {
    id: '10',
    name: 'Roasted Chickpeas',
    category: 'snacks',
    ingredients: [
      { name: 'chickpeas', amount: 400, unit: 'g', aisle: 'Canned Goods' },
      { name: 'olive oil', amount: 1, unit: 'tbsp', aisle: 'Oils' },
      { name: 'paprika', amount: 1, unit: 'tsp', aisle: 'Spices' },
      { name: 'garlic powder', amount: 0.5, unit: 'tsp', aisle: 'Spices' },
      { name: 'salt', amount: 0.25, unit: 'tsp', aisle: 'Spices' }
    ],
    instructions: [
      'Preheat oven to 200°C',
      'Toss chickpeas with oil & seasoning',
      'Bake 25-30 minutes, shaking tray halfway',
      'Let cool, store in airtight container'
    ],
    prepTime: 5,
    cookTime: 30,
    servings: 4
  },
  
  {
    id: '11',
    name: 'Hummus & Veggie Sticks',
    category: 'snacks',
    ingredients: [
      { name: 'chickpeas', amount: 400, unit: 'g', aisle: 'Canned Goods' },
      { name: 'garlic', amount: 1, unit: 'clove', aisle: 'Produce' },
      { name: 'lemon juice', amount: 1, unit: 'tbsp', aisle: 'Produce' },
      { name: 'olive oil', amount: 2, unit: 'tbsp', aisle: 'Oils' },
      { name: 'salt', amount: 0.5, unit: 'tsp', aisle: 'Spices' },
      { name: 'water', amount: 2, unit: 'tbsp', aisle: 'None' },
      { name: 'carrots', amount: 2, unit: 'whole', aisle: 'Produce' },
      { name: 'cucumber', amount: 1, unit: 'whole', aisle: 'Produce' },
      { name: 'bell peppers', amount: 2, unit: 'whole', aisle: 'Produce' }
    ],
    instructions: [
      'Blend all hummus ingredients until smooth',
      'Adjust thickness with water',
      'Store in a sealed jar',
      'Cut vegetables into sticks for dipping'
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 4
  },
  {
    id: '12',
    name: 'Chia Pudding',
    category: 'snacks',
    ingredients: [
      { name: 'chia seeds', amount: 3, unit: 'tbsp', aisle: 'Health Foods' },
      { name: 'almond milk', amount: 450, unit: 'ml', aisle: 'Dairy Alternatives' },
      { name: 'cinnamon', amount: 0.5, unit: 'tsp', aisle: 'Spices' },
      { name: 'vanilla extract', amount: 0.5, unit: 'tsp', aisle: 'Baking' }
    ],
    instructions: [
      'Mix everything in a jar',
      'Shake well',
      'Refrigerate overnight'
    ],
    prepTime: 5,
    cookTime: 0,
    servings: 3
  },
  {
    id: '13',
    name: 'Oatmeal Energy Bites',
    category: 'snacks',
    ingredients: [
      { name: 'dates', amount: 100, unit: 'g', aisle: 'Dried Fruits' },
      { name: 'peanut butter', amount: 2, unit: 'tbsp', aisle: 'Spreads' },
      { name: 'rolled oats', amount: 100, unit: 'g', aisle: 'Breakfast' },
      { name: 'chia seeds', amount: 1, unit: 'tbsp', aisle: 'Health Foods' },
      { name: 'cinnamon', amount: 0.5, unit: 'tsp', aisle: 'Spices' }
    ],
    instructions: [
      'Blend all ingredients until sticky dough forms',
      'Roll into bite-sized balls'
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 10
  },
  {
    id: '14',
    name: 'Mandarin Oranges & Pistachios',
    category: 'snacks',
    ingredients: [
      { name: 'mandarin oranges', amount: 1, unit: 'whole', aisle: 'Produce' },
      { name: 'pistachios', amount: 30, unit: 'g', aisle: 'Nuts & Seeds' }
    ],
    instructions: [
      'Keep oranges whole',
      'Store pistachios in a small container',
      'Peel orange when ready to eat'
    ],
    prepTime: 1,
    cookTime: 0,
    servings: 1
  },
  {
    id: '15',
    name: 'Banana Nice Cream',
    category: 'desserts',
    ingredients: [
      { name: 'bananas', amount: 3, unit: 'whole', aisle: 'Produce' },
      { name: 'almond milk', amount: 50, unit: 'ml', aisle: 'Dairy Alternatives' },
      { name: 'cocoa powder', amount: 1, unit: 'tbsp', aisle: 'Baking' }
    ],
    instructions: [
      'Slice bananas before freezing for easier blending',
      'Blend frozen bananas, almond milk, cocoa powder until smooth',
      'Serve immediately or freeze 1 hour for firmer texture'
    ],
    prepTime: 10,
    cookTime: 60,
    servings: 2
  },
  {
    id: '16',
    name: 'Apple Pie Energy Balls',
    category: 'desserts',
    ingredients: [
      { name: 'dates', amount: 100, unit: 'g', aisle: 'Dried Fruits' },
      { name: 'rolled oats', amount: 100, unit: 'g', aisle: 'Breakfast' },
      { name: 'walnuts', amount: 50, unit: 'g', aisle: 'Nuts & Seeds' },
      { name: 'dried apples', amount: 50, unit: 'g', aisle: 'Dried Fruits' },
      { name: 'cinnamon', amount: 1, unit: 'tsp', aisle: 'Spices' }
    ],
    instructions: [
      'Blend dates, oats, walnuts, cinnamon in a food processor',
      'Add dried apples → pulse until mixed',
      'Roll into small balls'
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 10
  },
  {
    id: '17',
    name: 'Avocado Chocolate Mousse',
    category: 'desserts',
    ingredients: [
      { name: 'avocado', amount: 1, unit: 'whole', aisle: 'Produce' },
      { name: 'cocoa powder', amount: 1, unit: 'tbsp', aisle: 'Baking' },
      { name: 'almond milk', amount: 50, unit: 'ml', aisle: 'Dairy Alternatives' },
      { name: 'vanilla extract', amount: 1, unit: 'tsp', aisle: 'Baking' },
      { name: 'dates', amount: 2, unit: 'whole', aisle: 'Dried Fruits' }
    ],
    instructions: [
      'Blend everything until smooth & creamy',
      'Chill for 30 minutes before serving'
    ],
    prepTime: 10,
    cookTime: 30,
    servings: 2
  },
  {
    id: '18',
    name: 'Oatmeal Cookies',
    category: 'desserts',
    ingredients: [
      { name: 'bananas', amount: 2, unit: 'whole', aisle: 'Produce' },
      { name: 'rolled oats', amount: 150, unit: 'g', aisle: 'Breakfast' },
      { name: 'dates', amount: 50, unit: 'g', aisle: 'Dried Fruits' },
      { name: 'peanut butter', amount: 2, unit: 'tbsp', aisle: 'Spreads' },
      { name: 'cinnamon', amount: 1, unit: 'tsp', aisle: 'Spices' }
    ],
    instructions: [
      'Preheat oven 180°C',
      'Mash bananas, mix with oats, dates, peanut butter, cinnamon',
      'Scoop onto lined baking tray',
      'Bake 12-15 min, until golden brown'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 8
  },
  {
    id: '19',
    name: 'Baked Apples with Nuts & Cinnamon',
    category: 'desserts',
    ingredients: [
      { name: 'apples', amount: 2, unit: 'whole', aisle: 'Produce' },
      { name: 'walnuts', amount: 50, unit: 'g', aisle: 'Nuts & Seeds' },
      { name: 'cinnamon', amount: 1, unit: 'tsp', aisle: 'Spices' },
      { name: 'dates', amount: 50, unit: 'g', aisle: 'Dried Fruits' },
      { name: 'almond butter', amount: 1, unit: 'tbsp', aisle: 'Spreads' }
    ],
    instructions: [
      'Preheat oven 180°C',
      'Cut apples in half, remove core',
      'Fill with dates, nuts, cinnamon',
      'Bake 20 min, drizzle with almond butter'
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 2
  }
]; 