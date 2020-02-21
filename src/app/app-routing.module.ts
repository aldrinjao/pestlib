import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [

  { path: '', component: MainComponent },
  { path: ':crop', component: CategoryComponent },
  { path: 'item/:tag', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
