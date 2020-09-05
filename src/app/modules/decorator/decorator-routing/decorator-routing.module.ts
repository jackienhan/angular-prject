import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DecoratorComponent} from "../../../components/decorators/decorator/decorator.component";
import {DecoratorDetailComponent} from "../../../components/decorators/decorator-detail/decorator-detail.component";
import {ViewChildComponent} from "../../../components/decorators/view-child/view-child.component";

const decoratorRoutes: Routes = [
  {
    path: '',
    component: DecoratorComponent,
    children: [
      {
        path: 'decorator-detail',
        component: DecoratorDetailComponent
      },
      {
        path: 'view-child',
        component: ViewChildComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(decoratorRoutes)
  ],
  exports: [RouterModule]
})
export class DecoratorRoutingModule { }
