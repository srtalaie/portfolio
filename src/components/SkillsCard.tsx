import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

interface SkillsCardProps {
  title: string,
  skills: { icon: any, name: string }[]
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <List>
          {skills.map((skill) => (
            <ListItem key={skill.name}>
              <ListItemIcon>
                <embed width="50" height="50" src={skill.icon} />
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