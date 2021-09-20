import React, { useEffect, useState } from 'react';
import {  Card,
  CardHeader ,
  Box,
  Typography,
  CardContent,
  Button,
  Grid, LinearProgressProps
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { routes } from 'routers/routes';
import { useStyles, BorderLinearProgress } from '../styles';
import { Texts } from 'modules/Components';
import themeConfig from 'config/theme';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const userID = '2';

const getPlan = (data, userID) => {
  return data.mentees.find(mentee => mentee.menteeId === userID).passedPlan.length
}

const MyCourseCard = ({data}) => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0)
  const history = useHistory()

  useEffect(() => {
    const progress = Math.ceil(getPlan(data, userID)*100/data.plan.length)
    setProgress(progress)
  },[data])

  return (
    <Grid container justifyContent="center">
      <Card className={classes.card} raised>
        <CardHeader 
          className={classes.cardHeader}
          title={data.title} 
          subheader={data.mentors.join(', ')}
          action={<div className={classes.cardAction}>
            <Texts 
              align="center"
              size={themeConfig.fSize16}
              fontWeight={themeConfig.fWeight600} 
              color={ themeConfig.black }
            >{`${data.timeLineType[0].toUpperCase()+ data.timeLineType.substring(1)} ${getPlan(data, userID)} of ${data.plan.length}`} </Texts>
            <Button 
              className={classes.progressButton} 
              onClick={() => history.push(`${routes.menu.courses.myCourse}/${data._id}`)}
            >
              <Texts
                size={themeConfig.fSize14}
                fontWeight={themeConfig.fWeight400}
                color="white"
              >
                {progress === 100 ? 'Review': 'Resume'}
              </Texts>
            </Button>
          </div>
            }
        />
        <CardContent className={classes.cardContent}>
          <Texts color={ themeConfig.black }>Progress</Texts>
          <LinearProgressWithLabel variant="determinate" value={progress}/>
        </CardContent>
      </Card>
    </Grid>
  )
}


export default MyCourseCard