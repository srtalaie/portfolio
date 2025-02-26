import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

interface ProjectCardProps {
  name: string,
  desc: string,
  img: any | null,
  repo: string,
  url: string | null,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, desc, img, repo, url }) => {
  let bgColor: string = ""
  if (!img) {
    const red = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    const green = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    const blue = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    bgColor = `rgb(${red}, ${green}, ${blue})`
  }
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 445 }}>
      <CardMedia
        sx={{ height: 140, backgroundColor: bgColor }}
        image={img ? (img) : (null)}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={repo}>Repo</Button>
        {url ? (
          <Button size="small" href={url}>Live Site</Button>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  )
}

export default ProjectCard