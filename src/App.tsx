import { Container, Grid2 } from '@mui/material'

import '@fontsource/source-code-pro/300.css'
import '@fontsource/source-code-pro/400.css'
import '@fontsource/source-code-pro/500.css'
import '@fontsource/source-code-pro/700.css'
import './App.css'

import About from './components/About'
import NavBar from './components/NavBar'
import ProjectsSec from './components/ProjectsSec'
import SkillsMain from './components/SkillsSec/SkillsMain'

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Grid2 container component={About} />
        <Grid2 container component={SkillsMain} />
        <Grid2 container component={ProjectsSec} />
      </Container>
    </>

  )
}

export default App
