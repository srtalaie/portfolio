import { Box, Grid2 } from "@mui/material"

import { projects } from "../assets/lists/Projects/projects"
import ProjectCard from "./ProjectCard"

const ProjectsSec = () => {
  return (
    <Box id="projects" sx={{ minHeight: "100vh", alignContent: "space-around" }}>
      <Grid2 container justifyContent={"center"} spacing={5}>
        {projects.map((project) => (
          <Grid2>
            <ProjectCard key={project.name} name={project.name} desc={project.desc} img={project.img} repo={project.repo} url={project.url} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default ProjectsSec