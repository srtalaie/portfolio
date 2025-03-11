import { Box, Grid2, Link, Typography } from "@mui/material"

const Contact = () => {
  return (
    <Grid2 container sx={{ justifyContent: "center", alignItems: "center", minHeight: "100vh", alignContent: "center", WebkitJustifyContent: "space-around" }}>
      <Grid2>
        <Typography variant="h3">contact:</Typography>
      </Grid2>
      <Grid2>
        <Box component="section" id="contact" sx={{ justifyItems: "flex-start" }}>
          <Typography variant="h5">Email: srtalaie@gmail.com</Typography>
          <Typography variant="h5">GitHub: <Link href="https://github.com/srtalaie">srtalaie</Link></Typography>
          <Typography variant="h5">LinkedIn: <Link href="https://www.linkedin.com/in/sasha-talaie/">sasha-talaie</Link></Typography>
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default Contact