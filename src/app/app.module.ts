import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ProviderComponent } from './provider/provider.component';
import { SeeWorldComponent } from './see-world/see-world.component';
import { DealsDestinationsComponent } from './deals-destinations/deals-destinations.component';
import { PwBindingComponent } from './pw-binding/pw-binding.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ProviderComponent,
    SeeWorldComponent,
    DealsDestinationsComponent,
    PwBindingComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
