# Ionic (5) client with Rust server over WebSocket

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

### Client side (Ionic 5 using Angular 8)

1. Install [Ionic](https://ionicframework.com/docs/intro/cli) Framework (Node + Ionic)
2. `cd chatApp`
3. npm install
4. Run using command `ionic serve`



```cmd
cd chatApp
npm install
ionic serve
```

#### All outputs into the browser developer console

## Not implemented Improvements

* Client connect automatically if server detected.


## Log

~~~
Final Sample Version - Date 2020-04-29 - Ionic5, Angular 8, WebSocket
Alpha Version - Date 2020-04-28 - Upgrade Ionic 5, falta retirar eventos para Subject
Alpha Version - Date 2019-05-15
Alpha Version - Date 2018-08-30
~~~
