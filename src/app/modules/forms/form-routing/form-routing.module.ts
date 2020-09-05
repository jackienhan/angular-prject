import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {FormComponent} from "../../../components/forms/form/form.component";
import {FormDetailsComponent} from "../../../components/forms/form-details/form-details.component";
import {FormBuilderComponent} from "../../../components/forms/form-builder/form-builder.component";
import {FileUploadComponent} from "../../../components/forms/file-upload/file-upload.component";

const formRoutes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: 'form-detail',
        component: FormDetailsComponent
      },
      {
        path: 'form-builder',
        component: FormBuilderComponent
      },
      {
        path: 'file-upload',
        component: FileUploadComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(formRoutes)
  ],
  exports: [RouterModule]
})
export class FormRoutingModule { }
