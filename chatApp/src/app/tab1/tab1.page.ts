import { Component } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


export interface MessageJSON {
  author: string,
  message: string
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myWebSocket: WebSocketSubject<MessageJSON> = webSocket('ws://127.0.0.1:3030/echo/');

  constructor() {

    this.myWebSocket.subscribe(
      msg => {
        console.log('message received: ' + msg);
        console.log("ServerResponse author.: " + msg.author);
        console.log("ServerResponse message: " + msg.message);

      },
      // Called whenever there is a message from the server    
      err => console.log('Erro received:', err),
      // Called if WebSocket API signals some kind of error    
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)  
    );

  } // contructor

  private Msg_enviada = {
    author: 'Author, NEW data here.',
    message: 'NEW message from Author here.'
  }

  sendMsg() {
    console.log('Sending to websocket: ', this.Msg_enviada);
    this.myWebSocket.next(this.Msg_enviada);
  }

}
