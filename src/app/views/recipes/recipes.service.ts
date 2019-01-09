import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient, Recipe } from './recipes.model';


@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter();

  private recipes: Recipe[] = [
    {
      name: 'Spaghetti',
      description: 'Tasty spaghetti',
      imagePath: '',
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
      imagePath: '',
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

