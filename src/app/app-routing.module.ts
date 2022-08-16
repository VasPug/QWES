import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
      {
        path: 'stock-card-modal',
        loadChildren: () => import('./pages/stock-card-modal/stock-card-modal.module').then( m => m.StockCardModalPageModule)
      },
      {
        path: 'graph',
    loadChildren: () => import('./pages/graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'yoga',
    loadChildren: () => import('./pages/yoga/yoga.module').then( m => m.YogaPageModule)
  },
  {
    path: 'add-post',
    loadChildren: () => import('./pages/add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'news/details',
    loadChildren: () => import('./pages/news-item/news-item.module').then( m => m.NewsItemPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'recipe-modal',
    loadChildren: () => import('./pages/recipe-modal/recipe-modal.module').then( m => m.RecipeModalPageModule)
  },
  {
    path: 'diet',
    loadChildren: () => import('./pages/diet/diet.module').then( m => m.DietPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./pages/entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
