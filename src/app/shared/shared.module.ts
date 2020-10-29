import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListGroupComponent } from './components/list-group/list-group.component';



@NgModule({
  declarations: [NavbarComponent, ListGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ListGroupComponent
  ]
})
export class SharedModule { }
