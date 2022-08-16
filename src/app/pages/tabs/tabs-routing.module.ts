import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'simulation',
        loadChildren: () => import('../simulation/simulation.module').then( m => m.SimulationPageModule)
      },
      {
        path: 'yoga',
        loadChildren: () => import('../yoga/yoga.module').then( m => m.YogaPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'food',
        loadChildren: () => import('../food/food.module').then( m => m.FoodPageModule)
      },
      {
        path: 'entertainment',
        loadChildren: () => import('../entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/app/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
