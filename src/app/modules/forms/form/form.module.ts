import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from "../../../components/forms/form/form.component";
import {FormDetailsComponent} from "../../../components/forms/form-details/form-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormRoutingModule} from "../form-routing/form-routing.module";
import {FormBuilderComponent} from "../../../components/forms/form-builder/form-builder.component";
import {FileUploadComponent} from "../../../components/forms/file-upload/file-upload.component";
import {HttpClientModule} from "@angular/common/http";
import {NgxLoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    FormComponent,
    FormDetailsComponent,
    FormBuilderComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule,
  ]
})
export class FormModule { }
