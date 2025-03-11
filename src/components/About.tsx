import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Grid2"
import Typography from "@mui/material/Typography"

import ProfilePic from "../assets/profile.jpg"

const About = () => {
  return (
    <Grid2 container sx={{ justifyContent: "center", alignItems: "center", minHeight: "100vh", alignContent: "baseline" }} spacing={5} id="about">
      <Grid2 className="flip-container">
        <Grid2 className="flipper">
          <Box sx={{ clipPath: "circle()" }} className="front">
            <img src={ProfilePic} alt="profile-img" id="profile-img" />
          </Box>
          <Box sx={{ clipPath: "circle()" }} className="back">
            <img src={ProfilePic} alt="profile-img" id="profile-img" />
          </Box>
        </Grid2>
      </Grid2>
      <Grid2>
        <Typography>
          Web developer with a passion for creating elegant, mobile
          responsive, functional websites. Fast learner, creative and resourceful with a penchant for
          problem solving and critical thinking. An eye for detail and always looking for the next
          challenge to overcome and always trying to learn more.
        </Typography>
      </Grid2>
    </Grid2>
  )
}

export default About