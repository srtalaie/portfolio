import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

interface SkillsCardProps {
  title: string,
  skills: { icon: any, name: string }[]
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills }) => {
  return (
    <Card sx={{ background: "rgb(54 53 53)" }} className="card-shine-effect-metal" id="skills-card">
      <CardContent>
        <Typography>{title}</Typography>
        <List>
          {skills.map((skill) => (
            <ListItem key={skill.name}>
              <ListItemIcon>
                <svg width="50" height="50">
                  <image href={skill.icon} width="50" height="50" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={skill.name} secondary={null} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default SkillsCard