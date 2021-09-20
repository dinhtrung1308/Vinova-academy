import {
  Button, Dialog, DialogContent, DialogContentText, DialogTitle,
  FormControl, Grid, IconButton, Input, InputAdornment,
  InputLabel, Radio, RadioGroup, TextField
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import themeConfig from 'config/theme';
import { Texts } from 'modules/Components';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { ADD_QUES_REQUEST, UPDATE_QUES_REQUEST } from 'redux/reducers/questionbank/actionTypes';
import { useStyles } from '../styles';


type FormAddQues = {
  _id: string,
  category: string,
  rating: number,
  type: string,
  quiz: string,
  options: string,
}

const type = [
  {
    label: "essay",
    value: "essay"
  },
  {
    label: "multi-choice",
    value: "multi-choice"
  }
]

const optionSel = (value) => ({
  label: value,
  value: value
})

export default function AddQuestion(props) {
  const classes = useStyles();

  const { update, isOpen, toggleOpen, dataUpdate, category } = props;

  const { register, unregister, watch, formState: { errors }, handleSubmit } = useForm<FormAddQues>();

  const initData = update && dataUpdate.type === "multi-choice" ? [
    ...[{
      _id: '0',
      content: '',
      isCorrect: false,
    }], ...dataUpdate.options] :
    [{
      _id: '0',
      content: '',
      isCorrect: false,
    }];

  const [checkType, setCheckType] = useState(update && dataUpdate.type === "multi-choice" ? true : false);

  const [answers, setAnswers] = useState(initData);

  const [categorySel, setCategorySel] = useState(category);
  const [cate, setCate] = useState(update ? dataUpdate.category : "");

  const [checkSubmit, setCheckSubmit] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    toggleOpen();
  };

  const submit = (e) => {
    if (cate !== "") {
      var suc = checkType ? { ...e, ...{ options: answers.slice(1) } } : e;

      suc = {
        ...suc,
        ...{ type: checkType ? "multi-choice" : "essay" },
        ...{ category: cate }
      }
      console.log(suc)
      if (!update) {
        dispatch({
          type: ADD_QUES_REQUEST,
          payload: suc
        })
      }
      else {
        dispatch({
          type: UPDATE_QUES_REQUEST,
          payload: { ...suc, _id: dataUpdate._id }
        })
      }

      handleClose();
    }
  }

  const handleAddOption = () => {
    const id = Math.ceil(Math.random() * 1000);

    var addAns = answers;
    addAns.push(
      {
        _id: String(id),
        content: '',
        isCorrect: false,
      }
    );
    setAnswers([...addAns]);
  }

  const handleClickCloseAdd = (id) => {

    var delAns = answers;
    delAns = delAns.filter((val) => val._id !== id);

    setAnswers([...delAns])
  }

  const handleChangeAns = (state, id) => {
    var ans = answers;
    var flag = false;

    ans.map(val => {
      if (val._id === id) {
        flag = true;
        val.content = state;
      }
    })

    if (!flag) {
      ans.push({
        _id: String(id),
        content: state,
        isCorrect: false,
      });
    }

    setAnswers([...ans])
  }

  const handleChangeCorrect = (value) => {
    const id = value.target.value;

    var ans = answers;

    ans.map(val => {
      if (val._id === id) {
        val.isCorrect = true;
      }
      else {
        val.isCorrect = false;
      }
    })

    setAnswers([...ans])
  }

  const handleChangeType = (e) => {
    if (e.value === "essay") {
      setCheckType(false);
    }
    else {
      unregister("options");
      setCheckType(true);
    }
  }

  const handleAddCategory = (value) => {
    const add = {
      label: value,
      value: value,
    }

    setCategorySel([...categorySel, ...[add]]);
  }

  const handleCheck = () => {
    setCheckSubmit(true);
    console.log(errors);
  }

  useEffect(() => {
    console.log("ans:", answers.slice(1))
  }, [answers])

  useEffect(() => {
    console.log("Type:", categorySel)
  }, [categorySel])

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <Texts
            color={themeConfig.hightGreen}
            size={themeConfig.fSize24}
          >
            {update ? "Update this Question" : "Create a Question"}
          </Texts>
        </DialogTitle>
        <DialogContent className={classes.popupContentRoot}>
          <DialogContentText>
            Thank you so much!
          </DialogContentText>
          <form action="" onSubmit={handleSubmit(submit)} >
            <Grid container className={classes.popupLayout}>
              <Grid item lg={12} sm={12} xs={12}>
                <FormControl className={classes.popupMargin}>
                  <InputLabel>Quiz</InputLabel>
                  <Input
                    autoFocus={update}
                    id="quiz"
                    multiline
                    defaultValue={update ? dataUpdate.quiz : ""}
                    {...register('quiz', {
                      required: "Quiz must be required"
                    })}
                  />
                  {errors.quiz && <div className={classes.popupWarning}>{errors.quiz.message}</div>}
                </FormControl>
              </Grid>

              <Grid item lg={6} sm={6} xs={6}
                style={{ height: '75px' }}
              >
                <FormControl className={classes.popupMargin}>
                  <InputLabel>Category</InputLabel>
                  <CreatableSelect
                    placeholder="Category"
                    options={categorySel}
                    autoFocus={update}
                    onCreateOption={handleAddCategory}
                    defaultValue={update ? optionSel(dataUpdate.category) : undefined}
                    onChange={(value) => setCate(value?.value)}
                    id="category"
                  // {...register('category', {
                  //   required: "Category must be required"
                  // })}
                  />
                  {checkSubmit && cate === '' && <div className={classes.popupWarning}>Category must be required</div>}
                </FormControl>
              </Grid>

              <Grid item lg={5} sm={5} xs={5}>
                <FormControl className={classes.popupMargin}>
                  <InputLabel>Type</InputLabel>
                  <Select
                    placeholder="Type"
                    autoFocus={update}
                    id="type"
                    options={type}
                    // {...register('type', {
                    //   required: "Type must be required"
                    // })}
                    defaultValue={update ? optionSel(dataUpdate.type) : optionSel("essay")}
                    onChange={handleChangeType}
                  />
                  {/* {errors.type && <div className={classes.popupWarning}>{errors.type.message}</div>} */}
                </FormControl>
              </Grid>
              <Grid item container lg={12} sm={12} xs={12}>
                {console.log('type:', watch('type'))}
                {
                  watch('type') === "multi-choice" || checkType ?
                    <RadioGroup
                      onChange={handleChangeCorrect}
                      defaultValue={
                        update && answers.length > 1 && typeof (dataUpdate.options) !== "string" ?
                          dataUpdate.options.filter(val => val.isCorrect)[0]?._id :
                          undefined
                      }
                    >
                      <Grid item container lg={12} sm={12} xs={12}>
                        <Texts
                          color="black"
                        >
                          Answer
                        </Texts>
                        {
                          answers.slice(1).map(ans => (
                            <Grid item container lg={12} sm={12} xs={12}>
                              <Grid item lg={11} sm={11} xs={11}>

                                <FormControl className={classes.popupMargin}>
                                  <Input
                                    autoFocus={update}
                                    defaultValue={ans.content}
                                    key={ans._id}
                                    // defaultValue={update ? dataUpdate.options : ""}
                                    // {...register('options', {
                                    //   required: "Options must be required"
                                    // })}

                                    onChange={(state) => handleChangeAns(state.target.value, ans._id)}
                                    endAdornment={
                                      <InputAdornment position="end">
                                        <IconButton

                                          onClick={() => handleClickCloseAdd(ans._id)}
                                        >
                                          <Close />
                                        </IconButton>
                                      </InputAdornment>
                                    }
                                  />
                                  {/* {errors.options && <div className={classes.popupWarning}>{errors.options.message}</div>} */}
                                </FormControl>
                              </Grid>
                              <Grid item lg={1} sm={1} xs={1}>
                                <Radio value={ans._id}></Radio>
                              </Grid>
                            </Grid>
                          ))
                        }

                        <Grid item lg={11} sm={11} xs={11}>
                          <Button
                            className={classes.addOption}
                            variant="outlined"
                            onClick={handleAddOption}
                          >
                            <Texts
                              color={themeConfig.lightGray}
                              size={themeConfig.fSize20}
                              fontWeight={themeConfig.fWeight600}
                            >
                              +
                            </Texts>
                          </Button>
                        </Grid>


                      </Grid>
                    </RadioGroup>

                    :
                    <Grid item lg={12} sm={12} xs={12}>
                      <FormControl className={classes.popupMargin}>
                        <InputLabel>Answer</InputLabel>
                        <Input
                          defaultValue={update && dataUpdate.type === "essay" ? String(dataUpdate.options) : ""}
                          autoFocus={update}
                          id="option"

                          {...register('options', {
                            required: "Option must be required"
                          })}
                        />
                        {errors.options && <div className={classes.popupWarning}>{errors.options.message}</div>}
                      </FormControl>
                    </Grid>
                }
              </Grid>

              <Grid item lg={6} sm={6} xs={6}>
                <FormControl className={classes.popupMargin}>
                  <TextField
                    autoFocus={update}
                    label="Rating"
                    type="number"
                    id="rating"
                    defaultValue={update ? dataUpdate.rating : 0}
                    {...register('rating', {
                      required: "Rating must be required",
                      pattern: {
                        value: /^([1-9]|10)$/,
                        message: "Rating must be between 1 and 10",
                      }
                    })}
                  />
                  {errors.rating && <div className={classes.popupWarning}>{errors.rating.message}</div>}
                </FormControl>
              </Grid>

              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleCheck} color="primary">
                Just do it
              </Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}