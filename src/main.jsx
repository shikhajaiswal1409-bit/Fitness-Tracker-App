import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme.js'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <ThemeProvider theme={theme}>       
    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
