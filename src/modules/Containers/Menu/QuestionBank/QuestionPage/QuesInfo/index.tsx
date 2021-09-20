import {
  Button, Dialog, DialogContent, DialogTitle, Grid
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import themeConfig from 'config/theme';
import { Texts } from 'modules/Components';
import React from 'react';
import { useStyles } from '../styles';

export default function QuesInfo(props) {
  const classes = useStyles();

  const { isOpen, toggleOpen, dataQues } = props;
  console.log(dataQues)

  const handleClose = () => {
    toggleOpen();
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Question Infomation
        </DialogTitle>
        <DialogContent>
          <Grid container className={classes.popupLayout}>
            <Grid className={classes.popupItem} item lg={6} sm={6} xs={6}>
              <Texts
                color={themeConfig.mainColor}
                size={themeConfig.fSize12}
                fontWeight={themeConfig.fWeight700}
              >
                Category
              </Texts>
              {dataQues.category}
            </Grid>

            <Grid className={classes.popupItem} item lg={5} sm={5} xs={5}>
              <Texts
                color={themeConfig.mainColor}
                size={themeConfig.fSize12}
                fontWeight={themeConfig.fWeight700}
              >
                Type
              </Texts>
              {dataQues.type}
            </Grid>

            <Grid className={classes.popupItem} item lg={12} sm={12} xs={12}>
              <Texts
                color={themeConfig.mainColor}
                size={themeConfig.fSize12}
                fontWeight={themeConfig.fWeight700}
              >
                Content of question
              </Texts>
              {dataQues.quiz}
            </Grid>

            <Grid item lg={12} sm={12} xs={12}>
              <Texts
                color={themeConfig.mainColor}
                size={themeConfig.fSize12}
                fontWeight={themeConfig.fWeight700}
              >
                Answers
              </Texts>
            </Grid>
            {
              dataQues.type !== "multi-choice" ?
                <Grid className={classes.popupItem} item lg={12} sm={12} xs={12}>
                  {/* <Texts
                    color={themeConfig.mainColor}
                    size={themeConfig.fSize12}
                    fontWeight={themeConfig.fWeight700}
                  >
                    Answer
                  </Texts> */}
                  {dataQues.options}
                </Grid>
                :
                dataQues.options.map(ans =>
                  <Grid className={classes.popupOption} item lg={12} sm={12} xs={12}>
                    <Texts
                      color={ans.isCorrect ? themeConfig.lowRed : themeConfig.black}
                    >
                      {ans.content}
                    </Texts>

                  </Grid>
                )
            }

            <Grid className={classes.popupItem} item lg={6} sm={6} xs={6}>
              <Texts
                color={themeConfig.mainColor}
                size={themeConfig.fSize12}
                fontWeight={themeConfig.fWeight700}
              >
                Rating
              </Texts>
              <Rating
                precision={0.5}
                readOnly
                value={dataQues.rating / 2}
              />
            </Grid>

            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}