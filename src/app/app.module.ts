import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppBasicDirectives } from './Basic-Directives/basic-directives.directives';
import { BetterDirectivesDirective } from './Better-directives/better-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppBasicDirectives,
    BetterDirectivesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
