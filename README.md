# FakeAndDraw client application
Web client front-end for Fake and Draw game.
Back-end can be found [here](https://github.com/dalogax/FakeAndDrawBack)

## Requirements
Nodejs >= v8

## Installation
After cloning this repository get into its root directory and install all its dependecies running this command:
```
$ npm install
```

To run the application you just need to this this command:
```
$ npm start
```

To deploy the application use this command:
```
$ npm run deploy
```
This application will be deployed here: [FakeAndDraw](https://fad.surge.sh)

## Technologies
This application has been bootstraped with [Create React App](https://github.com/facebookincubator/create-react-app) tool.

The main libraries used are:
* [React JS](https://reactjs.org/): UI rendering
* [Material UI](https://material-ui.com/): Google Material design implementation with ReactJS
* [Unistore](https://github.com/developit/unistore/): State management
* [SockJS](https://github.com/sockjs/sockjs-client): Websocket client

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure
Application code lives in the **/src** folder:
* **/src/api**: Connection (web socket) to back-end management and facade for messaging to it
* **/src/pages/manager**: Views related with game host
* **/src/pages/player**: Views related with every game player
* **/src/plugins**: Cross application behavior 
* **/src/state**: Application state management (both client and server produced actions)

## Main files
* **/src/App.js**: Main application view (acts kind of a router)
* **/src/index.js**: Main entry point of the application (renders application and connects to back-end)

## Debug
If you want to run the client locally and make the app to connect to your own back-end server, you will need to update the **SERVER_URL** constant in the file **/src/api/index.js**.
