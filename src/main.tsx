import { createTheme, ThemeProvider } from '@mui/material/styles'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Source Code Pro',
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
