import {
  Button, Card, Chip, FormControl, Grid,
  TextField
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/ArrowDownward';
import DeleteIcon from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import UpdateIcon from '@material-ui/icons/Update';
import { Pagination, Rating } from '@material-ui/lab';
import themeConfig from 'config/theme';
import { Texts, TopAlert } from 'modules/Components';
import querySting from 'query-string';
//import 'asset/css/questionBank.css';
import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import { connect, useDispatch } from 'react-redux';
import Select from 'react-select';
import { reducerType } from 'redux/reducers';
import { GET_ALL_QUES_REQUEST, GET_QUES_REQUEST } from 'redux/reducers/questionbank/actionTypes';
import AddQuestion from './AddQuestion';
import DeleteQuestion from './DeleteQuestion';
import QuesInfo from './QuesInfo';
import { customSelect, customStyles, useStyles } from './styles';


const mapStateToProps = (state: reducerType) => {
  return {
    isOpenTopAlert: state.global.isOpenTopAlert,
    questionBank: state.questionBank.quesList,
    totalRows: state.questionBank.totalRows,
    allQuestion: state.questionBank.allQues,
    is_admin: state.authentication.profile.is_admin,

  };
};

interface questionPageProps {
  isOpenTopAlert: string,

  questionBank: {
    _id: string,
    category: string,
    rating: number,
    type: string,
    quiz: string,
    options: string | {
      _id: string,
      content: string,
      isCorrect: boolean,
    }[],
  }[],

  totalRows: number,

  allQuestion: {
    _id: string,
    category: string,
    rating: number,
    type: string,
    quiz: string,
    options: string | {
      _id: string,
      content: string,
      isCorrect: boolean,
    }[],
  }[],

  is_admin: boolean,
}

const rating = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
  }

];
const type = [
  {
    value: 'essay',
    label: 'ESSAY',
  },
  {
    value: 'multi-choice',
    label: 'MULTI-CHOICE',
  }
];

const sortBy = [
  {
    value: 'category',
    label: 'Category',
  },
  {
    value: 'rating',
    label: 'Rating',
  },
  {
    value: 'quiz',
    label: 'Quiz',
  },
];

const orderBy = [
  {
    value: '1',
    label: 'Increasing',
  },
  {
    value: '-1',
    label: 'Decreasing',
  },
];

const optionSel = (value) => ({
  label: value,
  value: value
})

function QuestionPage(props: questionPageProps) {

  const classes = useStyles();

  const dispacth = useDispatch();

  const { questionBank, totalRows, allQuestion, isOpenTopAlert, is_admin } = props

  //pagination
  const [page, setPage] = useState('page=1&size=5');

  //filter data
  const [cate, setCate] = useState('');
  const [rati, setRati] = useState('');
  const [typee, setTypee] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');

  //cate list
  const [category, setCategory] = useState(['']);

  //popup add form
  const [open, setOpen] = useState(false);

  //popup update form
  const [update, setUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  //popup delete
  const [openDel, setOpenDel] = useState(false);
  const [idDel, setIdDel] = useState("")

  //popup Ques
  const [openQues, setOpenQues] = useState(false);
  const [dataQues, setDataQues] = useState({});

  //filter data
  const handleSearchChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setSearch('')
    }
    else {

      const newFilter = querySting.stringify({
        search: value
      })

      setSearch(`&${newFilter}`);
    }
  }

  const handleSortCate = (e) => {

    if (e === null) {
      setCate('')
    }
    else {

      const newFilter = querySting.stringify({
        category: e.value
      })

      setCate(`&${newFilter}`);
      setPage('page=1&size=5');
    }
  }

  const handleSortRati = (e) => {

    if (e === null) {
      setRati('')
    }
    else {

      const newFilter = querySting.stringify({
        rating: e.value
      })

      setRati(`&${newFilter}`);
      setPage('page=1&size=5');
    }
  }

  const handleSortType = (e) => {

    if (e === null) {
      setTypee('')
    }
    else {

      const newFilter = querySting.stringify({
        type: e.value
      })

      setTypee(`&${newFilter}`);
      setPage('page=1&size=5');
    }
  }

  const handleSortBy = (e) => {

    if (e === null) {
      setSort('')
    }
    else {

      const newFilter = querySting.stringify({
        sortBy: e.value
      })

      setSort(`&${newFilter}`);
    }
  }

  const handleSortOrder = (e) => {

    if (e === null) {
      setOrder('')
    }
    else {

      const newFilter = querySting.stringify({
        orderBy: e.value
      })

      setOrder(`&${newFilter}`);
    }
  }

  // popup add form
  const handleOpenAdd = () => {
    setOpen(!open);
  }

  // popup update form
  const OpenUpdate = () => {
    setOpen(!open);
    setUpdate(!update);
  }

  const handleUpdate = (id) => {
    const value = questionBank.filter(val => val._id === id);
    setDataUpdate(value[0])

    OpenUpdate();
  }

  //popup delete
  const OpenDelete = () => {
    setOpenDel(!openDel);
  }

  const handleDelete = (id) => {
    setIdDel(id);

    OpenDelete();
  }

  // popup Ques Info
  const OpenQues = () => {
    setOpenQues(!openQues);
  }

  const handleOpenQues = (id) => {
    const value = questionBank.filter(val => val._id === id);
    setDataQues(value[0]);
    console.log(value[0])

    OpenQues();
  }

  const handlePageChange = (event, value) => {
    const query = querySting.stringify({
      page: value,
      size: 5,
    })
    setPage(query);
  }

  // category list
  useEffect(() => {
    var catList = category;
    allQuestion.map(val => {
      if (!catList.includes(val.category)) {
        catList.push(val.category);
      }
    })

    setCategory([...catList]);

  }, [allQuestion])

  // change page
  useEffect(() => {
    const query = `${page}${cate}${rati}${typee}${search}${sort}${order}`
    dispacth({
      type: GET_QUES_REQUEST,
      payload: query,
    })



  }, [page, cate, rati, typee, search, sort, order])

  useEffect(() => {
    const query = `${page}${cate}${rati}${typee}${search}${sort}${order}`
    let timeout = setTimeout(() => {

      dispacth({
        type: GET_QUES_REQUEST,
        payload: query,
      })

      dispacth({
        type: GET_ALL_QUES_REQUEST,
      })
    }, 750)

    return () => {
      clearTimeout(timeout)
    }
  }, [open, openDel])

  // format table
  const columns = [
    {
      name: "CATEGORY",
      selector: "category",
    },
    {
      name: "CONTENT",
      selector: "quiz",
      minWidth: "40%",
    },
    {
      name: "TYPE",
      selector: "type",
    },
    {
      name: "RATING",
      selector: "rating",
      cell: (questionBank) => (
        <div>
          <Rating
            precision={0.5}
            value={questionBank.rating / 2}
            readOnly
          />
        </div>
      ),

    },
    {
      name: "MODIFY",
      selector: "modify",
      cell: (questionBank) => (
        <div>
          <Chip
            label={<UpdateIcon />}
            onClick={() => handleUpdate(questionBank._id)}
            color="primary"
            clickable
            variant="outlined"
          />
          &nbsp;
          <Chip
            label={<DeleteIcon />}
            onClick={() => handleDelete(questionBank._id)}
            color="secondary"
            clickable
            variant="outlined"
          />
        </div>
      )
    }
  ];

  return (
    <div className={classes.qsRoot}>

      <TopAlert
        sucMess={"thành công"}
        errMess={"thất bại"}
        check={isOpenTopAlert}
      />

      <Texts
        size={themeConfig.fSize32}
        color={themeConfig.hightGreen}
        fontWeight={themeConfig.fWeight600}
      >
        Question Bank
      </Texts>
      <div className={classes.qsFilter}>
        <Grid className={classes.qsFormat} container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>

            <TextField
              disabled={!is_admin}
              fullWidth
              placeholder="SEARCH"
              className={classes.qsSearchField}
              variant="outlined"
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <Search />
                ),
              }}
            />
          </Grid>
          <Grid item container lg={12} md={12} xs={12} justifyContent='space-between' spacing={1}>
            <Grid item container lg={5} md={5} xs={5} spacing={1}>
              <Grid item xs={12} md={12} lg={12}>
                <FormControl className={classes.qsSelect} variant="outlined" fullWidth>
                  <Select
                    isDisabled={!is_admin}
                    placeholder="CATEGORY"
                    onChange={handleSortCate}
                    isClearable
                    options={category.slice(1).map(val => {
                      return optionSel(val)
                    })}
                    styles={customSelect}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6} md={6} lg={6}>
                <FormControl className={classes.qsSelect} variant="outlined" fullWidth>
                  <Select
                    isDisabled={!is_admin}
                    placeholder="RATING"
                    onChange={handleSortRati}
                    isClearable
                    options={rating}
                    styles={customSelect}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6} md={6} lg={6}>
                <FormControl className={classes.qsSelect} variant="outlined" fullWidth>
                  <Select
                    isDisabled={!is_admin}
                    placeholder="TYPE"
                    onChange={handleSortType}
                    isClearable
                    options={type}
                    styles={customSelect}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={3} md={3} lg={3}>
              <FormControl
                className={classes.qsAdd}
                variant="outlined"
                fullWidth
              >
                <Button
                  disabled={!is_admin}
                  variant="outlined"
                  onClick={handleOpenAdd}
                >
                  <Texts
                    size={themeConfig.fSize16}
                    fontWeight={themeConfig.fWeight600}
                  >
                    Add Question
                  </Texts>
                </Button>
              </FormControl>
            </Grid>

            <Grid item container lg={3} md={3} xs={3} spacing={1}>
              <Grid item xs={12} md={12} lg={12}>
                <FormControl className={classes.qsSelect} variant="outlined" fullWidth>
                  <Select
                    isDisabled={!is_admin}
                    placeholder="SORT BY"
                    onChange={handleSortBy}
                    isClearable
                    options={sortBy}
                    styles={customSelect}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <FormControl className={classes.qsSelect} variant="outlined" fullWidth>
                  <Select
                    isDisabled={!is_admin}
                    placeholder="ORDER BY"
                    onChange={handleSortOrder}
                    isClearable
                    options={orderBy}
                    styles={customSelect}
                  />
                </FormControl>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        {is_admin ?
          <Card>
            <DataTable
              columns={columns}
              data={questionBank}
              sortIcon={<SortIcon />}
              striped
              onRowClicked={(state) => handleOpenQues(state._id)}
              pointerOnHover
              highlightOnHover
              customStyles={customStyles}
            />
            <Pagination
              style={{
                float: 'right',
                margin: '10px',
              }}
              count={Math.ceil(totalRows / 5)}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Card>
          :
          <Texts
            color={themeConfig.hightGreen}
            size={themeConfig.fSize20}
            fontWeight={themeConfig.fWeight700}
          >
            Bạn không có quyền truy cập vào Ngân hàng câu hỏi
          </Texts>
        }

      </div>
      {openQues &&
        <QuesInfo
          isOpen={openQues}
          toggleOpen={OpenQues}
          dataQues={dataQues}
        />
      }

      {open &&
        <AddQuestion
          category={category.slice(1).map(val => {
            return optionSel(val)
          })}
          isOpen={open}
          toggleOpen={update ? OpenUpdate : handleOpenAdd}
          update={update}
          dataUpdate={dataUpdate}
        />
      }

      {openDel &&
        <DeleteQuestion
          isOpen={openDel}
          toggleOpen={OpenDelete}
          idDel={idDel}
        />
      }
    </div>
  );
}

export default connect(mapStateToProps)(QuestionPage)