import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient, Recipe } from './recipes.model';


@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter();

  private recipes: Recipe[] = [
    {
      name: 'Spaghetti',
      description: 'Tasty spaghetti',
      imagePath: 'https://images-3.schellywood.be/thumbnail/tile/29151/pastasalade-met-rode-pesto-en-mozzarella.jpg',
      ingredients: [
        {
          name: 'spaghetti pasta',
          amount: 1
        },
        {
          name: 'sausage',
          amount: 1
        }]
    },
    {
      name: 'Scampi diabolique',
      description: 'scampi',
      imagePath: 'https://images-3.schellywood.be/thumbnail/tile/15654/gezonde-pita.jpeg',
      ingredients: [
        {
          name: 'scampi',
          amount: 1
        },
        {
          name: 'sausage',
          amount: 1
        }]
    },
    {
      name: 'Tomato soup',
      description: 'mmm tomato soup',
      imagePath: 'https://images-1.schellywood.be/thumbnail/tile/27367/nj-2012-005859.jpg',
      ingredients: [
        {
          name: 'scampi',
          amount: 1
        },
        {
          name: 'sausage',
          amount: 1
        }]
    }
  ];

  constructor() {}

  public getRecipes() {
    return this.recipes.slice(); // use slice to make copy of array so you can not accidentally modify since arrays are reference types
  }


}

