import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Main2Component } from './main2/main2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, Main2Component],
  exports: [
    MainComponent
  ]
})
export class SettingsModule { }
