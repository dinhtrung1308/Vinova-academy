import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Timer from '../Timer';
// import Timer from 'modules/Containers/Itest/Timer';
import { useHistory } from "react-router-dom";
import { useStyles, MyButton } from "./slyle";
import { reducerType } from "redux/reducers";
import { useDispatch } from 'react-redux';
import { FETCH_DATA_ITEST, SELECTED_DATA_ITEST, POST_DATA_ITEST } from "redux/reducers/itest/actionTypes"
import { connect } from "react-redux";
import Rating from '@material-ui/lab/Rating';
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {initialProfile} from 'models/itestdata'
const mapStateToProps = (state: reducerType) => {
  return {
    data: state.content,
  };
};

const Content = (props) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: FETCH_DATA_ITEST });

  // },[]);

  const dataQuiz = props.data.dataItest;
  const questions = dataQuiz.questions;
  const dataSelected = props.data.dataSubmit.ansSelected;

  const hrs = 0;
  const mins = Number(dataQuiz.time.slice(0, 2));
  const secs = 0;
  const [checkedErr, setCheckedErr] = useState(false);
  // Modal submit
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const history = useHistory();

  // Check xem đã làm hết chưa
  const isFullAnswer = () => {
    let check: Boolean = true;
    for (let i = 0; i < dataSelected.length; i++) {
      if (dataSelected[i].answer == "") {
        check = false;
        break;
      }
    }
    return check;
  }

  function onHandleClick(event) {
    event.preventDefault()
    if (!isFullAnswer()) {
      console.log("chưa làm hết ")
      setCheckedErr(true)
      setTimeout(() => setCheckedErr(false), 3000);

    } else {
      setOpen(true);
    }
  }


  // Hàm onhandleChange
  const onHandleChange = (value, id) => {
    dispatch({
      type: SELECTED_DATA_ITEST,
      payload: {
        questID: id,
        answer: value,
      }
    });
  }
  //  Hàm isSelected
  const isSelected = (question) => {
    let check: Boolean = false;
    for (let i = 0; i < dataSelected.length; i++) {
      if (dataSelected[i].questID == question._id) {
        if (dataSelected[i].answer != "") {
          check = true;
          break;
        }
      }
    }
    return check;
  }

  // Hàm xử lý button đồng ý nộp bài
  const handleSubmit = () =>{
    dispatch({ 
      type: POST_DATA_ITEST,
      payload: {
        data: props.data.dataSubmit,
        id: initialProfile.test._id
      }
     });
    setOpen(false);
  }

  const handleSucces = () =>{
    setTimeout(() => {
      history.push(`/dashboard`);
    }, 1000);
  }

  const classes = useStyles();
  return (
    <>
      <Grid container >
        <Grid className={classes.grid__left} item xs={9}>
          <p className={classes.quiz__title}>{dataQuiz.title}</p>
          {
            questions.map((question, index) => (
              // Phan cau hoi và lưa chọn
              <div id={question._id} className={classes.content__question__box}>
                <span className={classes.content__question__number}>Câu {index + 1}: </span>
                <span>{question.quiz}</span>
                <div className={classes.content__option}>
                  {question.options.map((item, index) => (
                    <div className={classes.content__option__item} >
                      <span className={classes.content__question__number}>{item._id}. </span>
                      <span>{item.content}</span>
                    </div>
                  ))}
                </div>
                {/* Phan tra loi  */}
                <div className={classes.content__answer}>
                  <div className={classes.content__answer__select}>
                    <p>Answer: </p>
                    <form >
                      <FormControl component="fieldset">
                        <RadioGroup
                          row aria-label="position"
                          onChange={(e) => onHandleChange(e.target.value, question._id)}
                          
                        >
                          {question.options.map((item, index) => (
                            <FormControlLabel
                              className={classes.form}
                              value={item._id}
                              control={<Radio color="primary" />}
                              label={item._id}
                              labelPlacement="start"
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </form>
                  </div>
                  <p className={classes.content__answer__category}>{question.category}</p>
                  <Rating
                    className={classes.rating}
                    precision={0.5}
                    value={question.rating / 2}
                    readOnly
                  />
                  {/* <p>Rating: {question.rating}/10</p> */}
                </div>
              </div>
            ))
          }
        </Grid>
        <Grid className={classes.grid__right} item xs={3}>
          <div>
            <Timer hours={hrs} minutes={mins} seconds={secs} />
          </div>
          <div className={classes.question__palette}>
            {questions.map((question, index) => (
              <a className={classes.question__palette__link} href={"#".concat(question._id)} >
                <Avatar className={isSelected(question) ? classes.isSelect : classes.noSelect}>
                  {index + 1}
                </Avatar>
              </a>
            ))}
          </div>
          <MyButton onClick={onHandleClick}>Submit</MyButton>
        </Grid>
      </Grid>
      {/* Mess err */}
      <Fade in={checkedErr}>
        <Alert className={classes.meserr} variant="filled" severity="warning">
          Vui lòng hoàn thành hết câu hỏi !
      </Alert>
      </Fade>

      <Fade in={props.data.isShowMessSuc}>
        <Alert className={classes.meserr} variant="filled" severity="success">
          Bạn đã nộp bài thành công !
      </Alert>
      </Fade>
      <Fade in={props.data.isShowMessErr}>
        <Alert className={classes.meserr} variant="filled" severity="error">
          Có lỗi vui lòng thử lại !
      </Alert>
      </Fade>

      {/* Modal sumit */}
      <Dialog
        open={open}
        onClose={handleClose}
        //PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Lưu ý
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn chắc chắn nộp bài chứ ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Quay Lại
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Đồng Ý
          </Button>
        </DialogActions>
      </Dialog>

      {/* Model chờ  */}
      <Dialog
        open={props.data.isLoadding}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            Vui lòng đợi trong giây lát...
          </DialogContentText>
          <CircularProgress className={classes.loadding} disableShrink />
        </DialogContent>
      </Dialog>
      {props.data.isSubmitSucces ? handleSucces() : <span></span>}
    </>
  )
}
export default connect(mapStateToProps)(Content);