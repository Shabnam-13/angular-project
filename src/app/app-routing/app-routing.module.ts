import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from '../pages/basket/basket.component';
import { PostDetailsComponent } from '../pages/post-details/post-details.component';
import { PostListComponent } from '../pages/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
