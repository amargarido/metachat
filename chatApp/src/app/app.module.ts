// NO! https://devdactic.com/ionic-realtime-socket-io/
// YES https://tutorialedge.net/typescript/angular/angular-websockets-tutorial/

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { WebsocketProvider } from '../providers/websocket/websocket';
import { ChatProvider } from '../providers/chat/chat';
//const config: SocketIoConfig = { url: 'ws://localhost:5000', options: {} };
// ws://127.0.0.1:3012 
// http://192.168.0.134:3012
// 192.168.0.134

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  // SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebsocketProvider,
    ChatProvider
  ]
})
export class AppModule {}


// import { BrowserModule } from '@angular/platform-browser';
// import { ErrorHandler, NgModule } from '@angular/core';
// import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';

// import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';

// @NgModule({
//   declarations: [
//     MyApp,
//     HomePage
//   ],
//   imports: [
//     BrowserModule,
//     IonicModule.forRoot(MyApp)
//   ],
//   bootstrap: [IonicApp],
//   entryComponents: [
//     MyApp,
//     HomePage
//   ],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     {provide: ErrorHandler, useClass: IonicErrorHandler}
//   ]
// })
// export class AppModule {}




