# Ionic (6) client with Rust server over WebSocket

This sample application is written in Ionic6 (Angular) on the client side 
and [rust-lang.org](https://rust-lang.org) (rust edition 2021) on the server side. 

It's a demonstration of how to use Angular and websocket for a web chat. Everything 
the client writes to the websocket, the server echoes back (see developer console in 
the browser).


## Build and Run


### Server side (Rust)

* Server uses [actix](https://github.com/actix/actix)

1. [Install Rust](https://www.rust-lang.org/tools/install)
2. `cd rustServer`
3. Compile using the command `cargo build`
4. Run using the command `cargo run`

#### Server listens into `ws://127.0.0.1:3030/echo/`

#### Run server before client, otherwise it will not connect.

```cmd
cd rustServer
cargo build
cargo run
```

### Client side (Ionic 6 using Angular 14)

1. Install [Ionic](https://ionicframework.com/docs/intro/cli) Framework (Node + Ionic)
2. `cd chatApp`
3. npm install
4. Run using command `ionic serve`


```cmd
cd chatApp
npm install
ionic serve
```


## Not implemented Improvements

* Client connect automatically if server is detected.


## All log outputs into the browser developer console

### Browser Developer Console

~~~
Angular is running in development mode. Call enableProdMode() to enable production mode.    core.mjs:25858:16
Sending to websocket:  
Object { author: "Author, NEW data here.", message: "NEW message from Author here." }       tab1.page.ts:44:12
message received: [object Object]                                                           tab1.page.ts:24:16
ServerResponse author.: Author, NEW data here.                                              tab1.page.ts:25:16
ServerResponse message: NEW message from Author here.                                       tab1.page.ts:26:16
~~~
