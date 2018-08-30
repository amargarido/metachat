import { Component } from '@angular/core';
import { ChatProvider } from '../../providers/chat/chat';


@Component({
  selector: 'page-home',
     templateUrl: 'home.html'
})
export class HomePage {

	constructor(private chatService: ChatProvider) {
		chatService.messages.subscribe(msg => {			
      console.log("Response from websocket: " + msg);


      console.log("Response author.: " + msg.author);
      console.log("Response message: " + msg.message);


		});
	}

  private Msg_enviada = {
		author: 'tutorialedge',
		message: 'this is a test message'
	}

  sendMsg() {
		console.log('new message from client to websocket: ', this.Msg_enviada);
		this.chatService.messages.next(this.Msg_enviada);
		this.Msg_enviada.message = '';
	}

}
