import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({
  declarations: [
    SearchFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  exports: [
    CommonModule,
    SearchFieldComponent,
  ],
  providers: []
})
export class SharedModule { }
