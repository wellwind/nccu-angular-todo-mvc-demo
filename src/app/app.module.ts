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

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TodoItemsComponent,
    DonePipe,
    ItemClassDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
