

// import { Component } from '@angular/core';
// import { IonicPage } from 'ionic-angular';
// import { ChatProvider } from '../../providers/chat/chat';

// @IonicPage()
// @Component({
//   selector: 'page-chatting',
//   templateUrl: 'chatting.html'
// })
// export class ChattingPage {

// 	constructor(private chatService: ChatProvider) {
// 		chatService.messages.subscribe(msg => {			
//       console.log("Response from websocket: " + msg);
// 		});
// 	}

//   private message = {
// 		author: 'tutorialedge',
// 		message: 'this is a test message'
// 	}

//   sendMsg() {
// 		console.log('new message from client to websocket: ', this.message);
// 		this.chatService.messages.next(this.message);
// 		this.message.message = '';
// 	}

// }