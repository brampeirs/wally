export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  amount: number;
}
