import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {   HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { EditformWorkerComponent } from './ui/editform-worker/editform-worker.component';
import { AppFindWorkerPipe } from './shared/pipes/app-find-worker.pipe';
import { SearchWorkerComponent } from './ui/search-worker/search-worker.component';


@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    EditformWorkerComponent,
    AppFindWorkerPipe,
    SearchWorkerComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
