import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faPlay,
  faBackward,
  faForward,
  faVolumeUp,
  faPause
} from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
// import { AppRoutingModule } from './app.routes';
// import { ComponentModule } from './components/component.module';

const routes: Routes = [
  {
      path: '', redirectTo: 'selector',  pathMatch: 'full'
  },
  {
      path: 'player',
      component: PlayerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    library.add(fas, faPlay, faPause, faBackward, faForward, faVolumeUp);
  }
}
