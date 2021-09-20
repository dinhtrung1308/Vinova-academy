import { SHOW_LOADING_SCREEN, HIDE_LOADING_SCREEN } from './actionTypes';

export const showLoading = () => {
  return {
    type: SHOW_LOADING_SCREEN,
  }
}

export const hideLoading = () => {
  return {
    type: HIDE_LOADING_SCREEN,
  }
}
