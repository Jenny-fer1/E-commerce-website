
import { Provider } from 'react-redux'
import { store } from './Features/store.ts'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />   
    </Provider>
    
  </StrictMode>
)
