import React,{useEffect, useState, useMemo} from 'react';
import { Grid, Button, Input, InputAdornment, FormControl, InputLabel,
      } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { reducerType } from 'redux/reducers';
import themeConfig from 'config/theme';
import { Texts } from 'modules/Components';
import { SharingCard } from './components/SharingCard';
import { FilterField } from './components/FilterField';
import {FormAddNewSha} from './components/FormAddNew';
import Pagination from '@material-ui/lab/Pagination';
import { connect, useDispatch } from 'react-redux';
import { useStyles,MyInput} from './style';
import { TopAlert } from 'modules/Components';
import { ISharing,initialSharing} from 'models/Sharings';
import {LOAD_SHARINGS_REQUEST, ADD_SHARING_REQUEST, UPDATE_RATING_REQUEST } from 'redux/reducers/sharings/actionTypes';


const mapStateToProps = (state: reducerType) => {
  return {
    sharings: state.sharings.sharings,
  };
};

interface sharingsProps {
  sharings: ISharing[],
}

const Sharings = (props: sharingsProps) => {
  const filterFields = ['author', 'technical','rating'];
  const optRating = useMemo(()=>([{value:1, label:'1'},{value:2, label:'2'},{value:3, label:'3'},{value:4, label:'4'}, {value:5, label:'5'},
    {value:6, label:'6'},{value:7, label:'7'},{value:8, label:'8'},{value:9, label:'9'},{value:10, label:'10'},]),[]);
  const optTechnical = useMemo(()=>([{value:'ReactJS', label:'ReactJS'},{value:'JavaScript', label:'JavaScript'}]),[]);
  const optAuthor = useMemo(()=>([{value:'Alex', label:'Alex'},{value:'Mon', label:'Mon'},{value:'Ro', label:'Ro'}]),[]);
  const getSharings = props.sharings;

  //props
  const [itemCount, setItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState('');
  const [filterAuthor, setFilterAuthor] = useState('');
  const [filterTechnical, setFilterTechnical] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  //form props
  const [openAddForm, setOpenAddForm] = useState(false);
  //
  const [alert, setAlert] = useState('not');
  const [resetFilter, setResetFilter] = useState(false);

  //pagnination
  const ITEMS_PER_PAGE = 3;
  const dispatch = useDispatch();

  //use Effect
  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: LOAD_SHARINGS_REQUEST,
      })
    };
    fetchData();
  }, [searchKey,resetFilter,filterAuthor, filterTechnical, filterRating]);
  //handle change Rating
  const handleUdRating =(dt)=>{
    dispatch({
      type:UPDATE_RATING_REQUEST,
      payload: dt
    })
  };
  //handle add form
  const handleOpenForm = () => {setOpenAddForm(true);};
  const handleCloseForm = () => {setOpenAddForm(false);};
  
  //handle sending add request
  const handleFormSubmit = (value: ISharing) => {
    setAlert('success');
    console.log(value);
    const data = value;
    //data['logo'] = fileState;
    dispatch({
      type: ADD_SHARING_REQUEST,
      payload: {
        data
      }
    })
    //console.log(fileState);  
  };
  //end handle form
  
  //------handle filter------
  const setFilterCallBack =(FilterData)=>{
    if(FilterData){
      if(FilterData.type === 'Author'){
        setFilterAuthor(FilterData.data);
      }
      else if(FilterData.type === 'Technical'){
        setFilterTechnical(FilterData.data);
      }
      else if(FilterData.type === 'Rating'){
        setFilterRating(FilterData.data);
      }
      console.log(FilterData);
    }
  }
  const handleResetFilter=()=>{
    setResetFilter(true);
  }
  //handle data to display
  const dataSharings = useMemo(()=>{
    
    let computedData = getSharings;
    if(searchKey){
      let lcKey = searchKey.toLowerCase();
      computedData = computedData.filter(
        (sharing)=> sharing.title.toLowerCase().includes(lcKey) || sharing.author.toLowerCase().includes(lcKey) || sharing.technical.toLowerCase().includes(lcKey)
      )
    }
    if(filterAuthor !== ''){
      computedData = computedData.filter(
        (sharing)=> sharing.author == filterAuthor
      )
    }
    if(filterTechnical !== ''){
      computedData = computedData.filter(
        (sharing)=> sharing.technical == filterTechnical
      )
    }
    if(filterRating !== 0){
      computedData = computedData.filter(
        (sharing)=> sharing.rating == filterRating
      )
    }
    
    setItemCount(computedData.length);
    console.log('currentPage:',currentPage);
    console.log('maxPage: ', Math.ceil(computedData.length/ITEMS_PER_PAGE));
    if(currentPage === Math.ceil(computedData.length/ITEMS_PER_PAGE)){
      return computedData.slice((currentPage-1) *ITEMS_PER_PAGE,computedData.length);
    }
    else {
      return computedData.slice((currentPage-1) * ITEMS_PER_PAGE, currentPage*ITEMS_PER_PAGE);
    }
    
  },[searchKey, filterAuthor,filterTechnical, filterRating, currentPage, getSharings]);
  //end handle data to display
  const classes = useStyles();
  return (
    <div className={classes.rootPage}>
    <Grid container>
      <Grid item xs={12} className={classes.titlePage}>
        <Texts size={themeConfig.fSize30} fontWeight={themeConfig.fWeight600} color={themeConfig.lightGreen}>Sharings</Texts>
      </Grid>
      <Grid item container xs={12} className={classes.topbar}>
        <Grid item xs={4}><button className={classes.addNew} onClick={handleOpenForm}><b>ADD A NEW SHARING</b></button></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <FormControl className={classes.search}>
            <Input
              placeholder=" Search…" type='search'
              disableUnderline = {true}
              inputProps={{ 'aria-label': 'search' }}
              onChange={val => {setSearchKey(val.target.value);}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end"><SearchIcon /></IconButton>
                </InputAdornment>
              }/>
          </FormControl>
        </Grid>
      </Grid> 
      <Grid item container xs={12} spacing={1} className={classes.filterWrapper}>
        <Grid item xs={6} style={{marginTop: '15px'}}><Texts size={themeConfig.fSize22} color='black' ><b>Total: &nbsp;</b>{itemCount}</Texts></Grid>
        <Grid item xs={6} container>
          <Grid item xs={4}>
            <FilterField name='Author' options ={optAuthor} callback={setFilterCallBack} reset={handleResetFilter}/>
          </Grid>
          <Grid item xs={4}>
            <FilterField name='Technical' options ={optTechnical} callback={setFilterCallBack} reset={handleResetFilter}/>
          </Grid>
          <Grid item xs={4}>
            <FilterField name='Rating' options ={optRating} callback={setFilterCallBack} reset={handleResetFilter}/>
          </Grid>
        </Grid>
          
      </Grid>
      {/****form popup start***/}
      <FormAddNewSha stateOpen={openAddForm} handleClose={handleCloseForm} handleSubmit={handleFormSubmit}/>
      <TopAlert sucMess='A sharing has been added sucessfully' errMess='Adding is failed' check={alert}/>
      {/***form popup end***/}
      
      {(dataSharings.length !== 0) &&
      <Grid container item xs={12} className={classes.itemContent}>
          <SharingCard dataList={dataSharings} updateRating={handleUdRating}/>
      </Grid>}
      <Grid item xs={12} className={classes.pagination}>
        <Pagination  variant='outlined' shape='rounded' 
          count={Math.ceil(itemCount/ITEMS_PER_PAGE)} 
          page={currentPage} 
          onChange={(event: unknown, value: number) => {setCurrentPage(value);
        }} />
      </Grid>
    </Grid>
    </div>
  );
}

export default connect(mapStateToProps)(Sharings)