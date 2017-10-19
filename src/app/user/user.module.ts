import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserRouting } from 'app/user/user.routing';

@NgModule({
  imports: [
    CommonModule,
    UserRouting
  ],
  declarations: [UsersListComponent]
})
export class UserModule { }
