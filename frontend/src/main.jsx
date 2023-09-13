import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import { Provider } from 'react-redux'
import store from './redux/index.js'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App/>
    </Provider>
)
