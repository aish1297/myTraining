import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { simpleReducer } from './simple.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './counter/counter/counter.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ message: simpleReducer }),
    // StoreDevtoolsModule.instrumentOnlyWithExtension({
    // })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
