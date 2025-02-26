import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

interface ProjectCardProps {
  title: string,
  desc: string,
  img: any,
  repo: string,
  url: string | null,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, img, repo, url }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
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