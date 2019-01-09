import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipesRoutes } from './recipes.routing';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RecipesRoutes),
    ReactiveFormsModule,
  ]
})

export class RecipesModule {

}
