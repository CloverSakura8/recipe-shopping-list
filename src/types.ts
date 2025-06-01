export type Category = 'main meals' | 'snacks' | 'desserts';

export type Ingredient = {
  name: string;
  amount: number;
  unit: string;
  aisle: string;
};

export type Recipe = {
  id: string;
  name: string;
  category: Category;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  image?: string;
}; 