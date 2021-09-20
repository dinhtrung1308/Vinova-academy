import { ILogin, initialData } from 'models/authentication';
import React from 'react';
import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
import QuestionPage from './QuestionPage';

const mapStateToProps = (state: reducerType) => {
  return {
    isLoading: state.global.isLoading,
  };
};

interface authProps {
  isLoading: boolean;
}

function QuestionBank(props: authProps) {
  const loginData: ILogin = initialData

  return (
    <>
      <QuestionPage />
    </>
  );
}

export default connect(mapStateToProps)(QuestionBank);