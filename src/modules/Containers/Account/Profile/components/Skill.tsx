import React from "react";
import {
    Grid, makeStyles, Typography, Card, CardMedia, ListItem, ListItemText, Button, Dialog, withStyles
} from "@material-ui/core";
import themeConfig from 'config/theme';
import { dataProfile } from "./dataProfile";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
const DialogContent = withStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
      paddingTop: theme.spacing(8),
    }
}))(MuiDialogContent);
  
const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  }))(MuiDialogActions);
  

const useStyles = makeStyles((theme) => ({
    colorHeader:{
        color: themeConfig.mainColor,
    },
    root: {
      flexGrow: 1,
      background: '#f4f6f8',
    },
    space: {
        marginBottom: theme.spacing(6)
    },
    spaceImgBot: {
        marginBottom: theme.spacing(2)
    },
    spaceImgTop: {
        marginTop: theme.spacing(2)
    },
    list: {
        marginLeft: theme.spacing(5)
    },
    footer: {
        marginBottom: theme.spacing(5)
    }, 
    input: {
        display: "none",
    }, 
    paperhead: {
        marginTop: theme.spacing(2),
    }, 
    crossbar: {
        width: '100%',
        height: 3, 
        background: themeConfig.mainColor,
    },
    media: {
        height: 140
      },
      CardImg: {
        height: '88%',
      },
    paper: {
        margin: theme.spacing(2),
        background: '#ffffff',
        borderRadius: '10px',  
        width: '100%',
      }, 
      borders: {
        border: `3px solid ${theme.palette.divider}`,
      }
}));

export const Skill = () => {
    let new_skill = dataProfile.skill.map(function(skill) {
        return skill.technology
    })
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };
    if (new_skill[3] ){
        return(
            <div>                
                <Card className = {classes.paper} >
                    <Grid className = {classes.paperhead} container spacing={2}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Typography variant="h6" className={classes.colorHeader} >WORK EXPERIENCE</Typography>
                            <Typography className={classes.crossbar} ></Typography>   
                        </Grid>
                        <Grid item xs={1}></Grid>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography >TimeExp:  {dataProfile.skill[0].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose}
                                  aria-labelledby="customized-dialog-title"
                                  open={open}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[0].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[0].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[0].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[0].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[0].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[0].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[0].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>      

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen1}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[1].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://tedu.com.vn/uploaded/images/path/102020/nodejs.png"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[1].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[1].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose1}
                                  aria-labelledby="customized-dialog-title"
                                  open={open1}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[1].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[1].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[1].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[1].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[1].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[1].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[1].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[1].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[1].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose1} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>    

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen2}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[2].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://tedu.com.vn/uploaded/images/path/102020/nodejs.png"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[2].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[2].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose2}
                                  aria-labelledby="customized-dialog-title"
                                  open={open2}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[2].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[2].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[2].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[2].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[2].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[2].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[2].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[2].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[2].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose2} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>       

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen3}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[3].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://tedu.com.vn/uploaded/images/path/102020/nodejs.png"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[3].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[3].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose3}
                                  aria-labelledby="customized-dialog-title"
                                  open={open3}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[3].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[3].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[3].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[3].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[3].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[3].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[3].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[3].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[3].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose3} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>                           
                    </Grid>              
                </Card> 
            </div>      
        )
    }
    if (new_skill[2] ){
        return(
            <div >                
                <Card className = {classes.paper} >
                    <Grid className = {classes.paperhead} container spacing={2}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Typography variant="h6" className={classes.colorHeader} >WORK EXPERIENCE</Typography>
                            <Typography className={classes.crossbar} ></Typography>   
                        </Grid>
                        <Grid item xs={1}></Grid>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography >TimeExp:  {dataProfile.skill[0].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose}
                                  aria-labelledby="customized-dialog-title"
                                  open={open}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[0].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[0].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[0].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[0].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[0].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[0].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[0].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>      

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen1}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[1].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://tedu.com.vn/uploaded/images/path/102020/nodejs.png"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[1].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[1].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose1}
                                  aria-labelledby="customized-dialog-title"
                                  open={open1}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[1].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[1].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[1].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[1].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[1].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[1].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[1].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[1].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[1].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose1} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>    

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen2}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[2].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://tedu.com.vn/uploaded/images/path/102020/nodejs.png"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[2].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[2].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose2}
                                  aria-labelledby="customized-dialog-title"
                                  open={open2}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[2].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[2].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[2].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[2].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[2].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[2].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[2].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[2].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[2].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose2} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>                           
                    </Grid>              
                </Card>  
            </div> 
            
        )
    }
    if (new_skill[1]){
        return(
            <div>
                <Card className = {classes.paper} >
                    <Grid className = {classes.paperhead} container spacing={2}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Typography variant="h6" className={classes.colorHeader} >WORK EXPERIENCE</Typography>
                            <Typography className={classes.crossbar} ></Typography>   
                        </Grid>
                        <Grid item xs={1}></Grid>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography >TimeExp:  {dataProfile.skill[0].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose}
                                  aria-labelledby="customized-dialog-title"
                                  open={open}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[0].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[0].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[0].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[0].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[0].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[0].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[0].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>      

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen1}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[1].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://tedu.com.vn/uploaded/images/path/102020/nodejs.png"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[1].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[1].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose1}
                                  aria-labelledby="customized-dialog-title"
                                  open={open1}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[1].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[1].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[1].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[1].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[1].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[1].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[1].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[1].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[1].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose1} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>                     
                    </Grid>              
                </Card>             
            </div> 
        )
    }
    if (new_skill[0]){
        return(
            <div>
                <Card className = {classes.paper} >
                    <Grid className = {classes.paperhead} container spacing={2}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Typography variant="h6" className={classes.colorHeader} >WORK EXPERIENCE</Typography>
                            <Typography className={classes.crossbar} ></Typography>   
                        </Grid>
                        <Grid item xs={1}></Grid>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} md = {4}>
                            <Card className={classes.CardImg}>
                                <ListItem button onClick={handleClickOpen}>                   
                                    <ListItemText>
                                        <Typography className={classes.spaceImgBot} style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}
                                        </Typography>     
                                        <CardMedia
                                            component="img"
                                        //   height="140"
                                            image="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
                                        />
                                        <Typography className={classes.spaceImgTop}>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography >TimeExp:  {dataProfile.skill[0].timeExp}</Typography>              
                                    </ListItemText>
                                </ListItem>
                                <Dialog
                                  onClose={handleClose}
                                  aria-labelledby="customized-dialog-title"
                                  open={open}
                                >                               
                                    <DialogContent dividers>
                                        <Typography style={{fontWeight: "bold"}} variant="h6">Technology: {dataProfile.skill[0].technology}</Typography>
                                        <Typography>Rating:  {dataProfile.skill[0].rating}</Typography>
                                        <Typography>TimeExp:  {dataProfile.skill[0].timeExp}</Typography>
                                        <Typography>Projects:</Typography>
                                        <Typography className={classes.list}>
                                            <Typography>Name: {dataProfile.skill[0].project[0].name}</Typography>
                                            <Typography>Role: {dataProfile.skill[0].project[0].role}</Typography>
                                            <Typography>Start: {dataProfile.skill[0].project[0].start}</Typography>
                                            <Typography>End: {dataProfile.skill[0].project[0].end}</Typography>
                                            <Typography>Status: {dataProfile.skill[0].project[0].status}</Typography>
                                            <Typography>Discription: {dataProfile.skill[0].project[0].discription}</Typography>
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Card>
                            <Typography className={classes.space} ></Typography>
                        </Grid>
                        <Grid item xs={1}></Grid>                  
                    </Grid>              
                </Card>    
            </div> 
        )
    }
}
