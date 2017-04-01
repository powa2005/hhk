import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


// In renderer process (web page).
import {ipcRenderer} from 'electron'
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')