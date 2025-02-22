import { Container } from '@mui/material'

import '@fontsource/source-code-pro/300.css'
import '@fontsource/source-code-pro/400.css'
import '@fontsource/source-code-pro/500.css'
import '@fontsource/source-code-pro/700.css'
import './App.css'

import About from './components/About'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <About />
      </Container>
    </>

  )
}

export default App
