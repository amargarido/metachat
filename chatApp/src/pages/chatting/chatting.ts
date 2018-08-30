// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the ChattingPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-chatting',
//   templateUrl: 'chatting.html',
// })
// export class ChattingPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad ChattingPage');
//   }

// }


import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//import { WebsocketProvider } from '../../providers/websocket/websocket';
import { ChatProvider } from '../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-chatting',
  templateUrl: 'chatting.html'
})
export class ChattingPage {

	constructor(private chatService: ChatProvider) {
		chatService.messages.subscribe(msg => {			
      console.log("Response from websocket: " + msg);
		});
	}

  private message = {
		author: 'tutorialedge',
		message: 'this is a test message'
	}

  sendMsg() {
		console.log('new message from client to websocket: ', this.message);
		this.chatService.messages.next(this.message);
		this.message.message = '';
	}

}