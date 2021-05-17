import React from 'react';
import { makeStyles } from '@material-ui/styles'; 
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button
} from '@material-ui/core'
import data from '../../utils/profile.json';

const { projects } = data;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const renderProject = (obj) => {
  const {
    title,
    url,
    desc
  } = obj;

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography>
            {title}
          </Typography>
          <Typography>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )

};

const ProjectLayout = () => {

  return (
    <Grid 
      container 
      direction="row"
      justify="center"
      alignItems="center"
    >
      {
        projects.map(obj => {
          return renderProject(obj);
        })
      }
    </Grid>
  )
};

export default ProjectLayout;