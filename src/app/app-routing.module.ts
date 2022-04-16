import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/private/user.guard';
import { PublicGuard } from './guards/public/public.guard';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'createRecipe',
  //   component: CreateRecipeComponent,
  //   canActivate: [UserGuard],
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'details',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'details',
  //       component: RecipeFormComponent,
  //     },
  //     {
  //       path: 'addIngredients',
  //       component: IngredientListComponent,
  //     },
  //     {
  //       path: 'confirmation',
  //       component: RecipeMessageComponent,
  //     },
  //   ],
  // },
  {
    path: 'user/signin',
    component: UserComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'user/signup',
    component: UserComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'bugReport',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: 'bugList',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
