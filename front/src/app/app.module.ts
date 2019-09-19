import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';
import { CreateModule } from './create/create.module';
import { WidgetModule } from './widget/widget.module';
import { PlayModule } from './play/play.module';
import { QuizzService } from './quizz.service';
import { QuizzHttpService } from './quizz-http.service';

@NgModule({
  declarations: [
    AppComponent,
    LegalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    LayoutModule,
    CreateModule,
    WidgetModule,
    PlayModule,
    HttpClientModule,
  ],
  providers: [
    { provide: QuizzService, useClass: QuizzHttpService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
