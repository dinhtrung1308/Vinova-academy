import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle
} from '@material-ui/core';
import themeConfig from 'config/theme';
import { Texts } from 'modules/Components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_QUES_REQUEST } from 'redux/reducers/questionbank/actionTypes';

export default function DeleteQuestion(props) {
  const { isOpen, toggleOpen, idDel } = props;

  const dispatch = useDispatch()

  const handleClose = () => {
    toggleOpen();
  };

  const handleDelete = () => {

    dispatch({
      type: DELETE_QUES_REQUEST,
      payload: idDel,
    })

    handleClose()
  }

  return (
    <div>

      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <Texts
            color={themeConfig.hightGreen}
            size={themeConfig.fSize24}
          >
            Are you sure?
          </Texts>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can't undo this action to restore this question. Are you sure?
          </DialogContentText>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Oh No
            </Button>
            <Button type="submit" onClick={handleDelete} color="primary">
              Yeah
            </Button>
          </DialogActions>

        </DialogContent>
      </Dialog>
    </div>
  );
}