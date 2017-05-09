import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SettingsModule } from './settings/settings.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { DonePipe } from './done.pipe';
import { ItemClassDirective } from './item-class.directive';
import { TodoSettingsComponent } from './todo-settings/todo-settings.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TodoItemsComponent,
    DonePipe,
    ItemClassDirective,
    TodoSettingsComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
