import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// // Addes these
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// from default project
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserModule,
      FontAwesomeModule // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
