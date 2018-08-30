import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { WebsocketProvider } from '../websocket/websocket';

// const CHAT_URL = 'ws://localhost:9876';
const CHAT_URL = 'ws://127.0.0.1:9876/ws/'; // barra no final faz parte.

export interface MessageJSON {
	author: string,
	message: string
}

@Injectable()
export class ChatProvider {
	public messages: Subject<MessageJSON>;

	constructor(wsService: WebsocketProvider) {
		this.messages = <Subject<MessageJSON>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): MessageJSON => {


				console.log('response.data:' + response.data);

				let data = JSON.parse(response.data);

				console.log('data:' + data);

				return {
					author: data.author,
					message: data.message
				}
			});
	}
}