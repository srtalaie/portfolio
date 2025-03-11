import { Box, Grid2, Typography } from "@mui/material"

import BackEndSec from "./BackEndSec"
import FrontEndSec from "./FrontEndSec"
import MiscSkills from "./MIscSkills"
import ProgrammingLangsSec from "./ProgrammingLangsSec"

const SkillsMain = () => {
  return (
    <Box sx={{ minHeight: "100vh", alignContent: "space-around" }} id="skills">
      <Typography variant="h3">skills:</Typography>
      <Grid2 container justifyContent="space-around" spacing={5} margin={3}>
        <ProgrammingLangsSec />
        <FrontEndSec />
        <BackEndSec />
        <MiscSkills />
      </Grid2>
    </Box>
  )
}

export default SkillsMain