import React, { memo, useEffect, useState } from 'react';
import {  Card,
          CardHeader ,
          CardMedia ,
          CardContent,
          Avatar ,
          Button,
          Grid,
          Typography,
          Dialog, DialogContent, DialogContentText,
          Snackbar
        } from '@material-ui/core';
import images from 'config/images';
import { useHistory } from 'react-router-dom';
import { Texts } from 'modules/Components';
import { Alert } from '@material-ui/lab';
import themeConfig from 'config/theme';
import useStyles  from '../styles';
import { routes } from 'routers/routes';
import { ICourseProps, IRules } from 'models/Courses';

//hardcode userID
const userID = '2'; 

function getMentee(mentees) {
  return mentees.findIndex(mentee => mentee.menteeId === userID)
}

const CourseCard = memo((props: ICourseProps) => {
  const classes = useStyles();
  const history = useHistory();

  const { id, title, thumbnail, description, mentors, timeLine, category, status, mentees } = props
  const [shadow, setShadow] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [enscroll, setEnscroll] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [registered, setRegistered] = useState(false)
  
  useEffect(() => {
    const mentee = getMentee(mentees);
    mentee !== -1 && setRegistered(true);
  }, [mentees])
 
  const mentor = mentors.join(', ')

  const Rules: IRules[] = [ 
    {icon: images.icSchedule, content: 'Time Line', subContent: timeLine},
    {icon: images.icCategory, content: 'Technical', subContent: category},
    {icon: images.icMentor, content: 'Mentor', subContent: mentor},
    {icon: images.icStatus, content: 'Status', subContent: status},
  ]

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleRegister = () => {
    registered ? history.push(`${routes.menu.courses.myCourse}/${id}`) : 
    setEnscroll(true);
    setOpenAlert(true);
  }
  return (
    <>
      <Card 
        onClick={handleOpenDialog} 
        className={classes.cardRoot}
        onMouseOver={() => setShadow(true)}
        onMouseOut={() => setShadow(false)}
        raised={shadow}
      >
        <CardHeader
          avatar={
            <Avatar className={classes.cardAvatar}>
              R
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          className={classes.cardMedia}
          image={thumbnail}
          title={title}
        />
        <CardContent >
          <Typography variant="inherit" className={classes.cardContent} >
            {description}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
          maxWidth={'md'}
          open={openDialog}
          onClose={handleCloseDialog}
          
        >
          <DialogContent className={classes.dialogContent}>
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item container md={9} >
                <Grid item md={12} className={classes.dialogTitle}>
                  <Texts color={themeConfig.hightGreen} size={themeConfig.fSize24} >{title}</Texts>
                </Grid>
                <Grid item md={12} className={classes.dialogButton}>
                  <Button disabled={enscroll} className={classes.button} onClick={ handleRegister }>
                    <Texts
                      size={themeConfig.fSize14}
                      fontWeight={themeConfig.fWeight400}
                      color="white"
                    >
                      { registered ? 'Go to Course' : enscroll ? 'Pending...': 'Enscroll' }
                    </Texts>
                  </Button>
                </Grid>
                <Grid item md={12} className={classes.dialogContentTitle}>
                  <Texts color={themeConfig.black} size={themeConfig.fSize18} >About this Course</Texts>
                </Grid>
                <Grid item md={12}>
                  <DialogContentText>
                    {description}
                  </DialogContentText>
                </Grid>
              </Grid>
              <Grid item container md={3} className={classes.dialogRules}>
                  {
                    Rules.map((rule) => (
                      <Grid key={rule.content} container className={classes.dialogRule}>
                        <Grid item md={3} >
                          <Avatar className={classes.rulesAvatar} variant="circular" src={rule.icon}></Avatar>
                        </Grid>
                        <Grid item container md={8} className={classes.rulesContent}>
                          <Grid item md={12}>
                            <Texts color={themeConfig.black}>{rule.content}</Texts>
                          </Grid>
                          <Grid item md={12}>
                            <Texts color='grey'>{rule.subContent}</Texts>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))
                  }
                </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <Snackbar 
          open={ openAlert } 
          autoHideDuration={2000} 
          onClose={ handleCloseAlert }
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={ handleCloseAlert } severity="warning">
            Your request was sent. Please wait for approving!
          </Alert>
      </Snackbar>
    </>
  );
})

export default CourseCard;

