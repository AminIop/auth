import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.js'
import InternalizationProvider from './shared/context/internalization'
import i18next from './shared/locales/i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <InternalizationProvider>
        <App />
      </InternalizationProvider>
    </Provider>
  </React.StrictMode>,
)
