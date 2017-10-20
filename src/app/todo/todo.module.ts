import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRouting } from 'app/todo/todo.routing';

@NgModule({
  imports: [
    CommonModule,
    TodoRouting
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
