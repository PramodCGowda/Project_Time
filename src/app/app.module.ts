import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFavoriteDirective } from './task-favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    TaskListComponent,
    TasksListComponent,
    TaskFavoriteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }