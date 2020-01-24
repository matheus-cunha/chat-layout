import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogFrameComponent } from './dialog-frame/dialog-frame.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { SearchComponent } from './search/search.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatNavbarComponent } from './chat-navbar/chat-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogFrameComponent,
    UserNavComponent,
    SearchComponent,
    ChatBoxComponent,
    ChatContentComponent,
    ChatNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
