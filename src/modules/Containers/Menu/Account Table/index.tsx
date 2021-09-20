import React, { useEffect, useMemo, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Table,TableBody,TableCell,
          TableContainer,TableRow,
          Paper,Chip, Avatar, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './styles';
import { IHeadCell } from 'models/Accounts';
import Search  from './components/Search';
import HeaderTable from './components/HeaderTable';
import Filter from './components/Filter';
import { getAccounts } from 'redux/reducers/account/accounttable/accountsActions';
import Text from 'modules/Components/Texts/index';
import themeConfig from 'config/theme';


const mapStateToProps = (state) => {
  return {
    accountTable: state.accountTable
  }
}

const AccountTable = (props) => {
  const { accounts, loading } = props.accountTable
  
  const classes = useStyles();
  //destruct props
  const [rowCount, setRowCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "asc" });
  const [filter, setFilter] = useState({ role: "", status: "", technology: "" });

  //pagination 
  const ITEMS_PER_PAGE = 5;
  
  const headCells: IHeadCell[] = [
    { id: 'avatar', label: "AVATAR", sortable: false},
    { id: "email", label: "EMAIL", sortable: true},
    { id: "role", label: "ROLE", sortable: true},
    { id: "technology", label: "TECHNOLOGY", sortable: true},
    { id: "status",label: "STATUS", sortable: true},
  ]
  
  const disPatch = useDispatch();
  useEffect(()=> {
    disPatch(getAccounts())
  },[disPatch])

  //data handle
  const accountsData = useMemo(() => {
    if(!loading){
      let computedData = accounts

      if (search) {
        let lcSearch = search.toLowerCase()
        computedData = computedData.filter(
          (account) => account.email.toLowerCase().includes(lcSearch) || account.status.toLowerCase().includes(lcSearch)||
          account.role.toLowerCase().includes(lcSearch)|| account.technology.flat().toString().toLowerCase().includes(lcSearch)
        )}
      
      if (filter.status) {
        computedData = computedData.filter((account) => account.status === filter.status) 
      }
      if (filter.role) {
        computedData = computedData.filter((account) => account.role === filter.role) 
      }
      if (filter.technology) {
        computedData = computedData.filter((account) => account.technology.flat().toString().includes(filter.technology)) 
      }
  
      setRowCount(computedData.length)
  
      if (sorting.field) {
        computedData = stableSort(computedData, getComparator(sorting.order, sorting.field))
      }
      return computedData.slice((currentPage-1) * ITEMS_PER_PAGE, (currentPage-1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
    }
    return accounts;
  },[search, filter, currentPage, accounts, sorting, loading])
  
  const emptyRows = ITEMS_PER_PAGE - Math.min(ITEMS_PER_PAGE, rowCount - (currentPage-1) * ITEMS_PER_PAGE);
  
  return (
    <Grid container spacing={2} className={classes.page}>
      <Grid item md={12}>
      <Text color={themeConfig.mainColor} size={themeConfig.fSize30} >Accounts</Text>
      </Grid>
      <Grid item md={12}>
        <Search 
          onSearch={value => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />
      </Grid>
      <Grid item md={12}>
        <Filter 
          onFilter={(role, status, technology) => {
            setCurrentPage(1)
            setFilter({role, status, technology})
          }}
        />
      </Grid>
      <Grid item md={12}>
        <TableContainer className={classes.table} component={Paper}>
          <Table>
            <HeaderTable 
              headers={headCells}
              onSorting={(field, order) => setSorting({ field, order})}
              />
            <TableBody>
              {
                !loading && accountsData.map((account) => {
                  return (
                  <TableRow hover key={account.id}>
                    <TableCell width="10%" component="th" scope="row">
                      {<Avatar alt={account.avatar} className={classes.small} src={account.avatar} />}
                    </TableCell>
                    <TableCell width="20%">{account.email}</TableCell>
                    <TableCell width="10%" >{account.role}</TableCell>
                    <TableCell width="40%">{account.technology.map((tech) => { 
                              return <Chip 
                                size="small"
                                label={`${tech}`} 
                                clickable 
                                color="primary" 
                                variant="outlined"
                                key={`${account.id} ${tech}`}/>
                            })}
                    </TableCell>
                    <TableCell align="center">
                      {<Chip 
                        className={classes.customStatus}
                        data-tag="allowRowEvents"
                        size="small"
                        label={`${account.status}`} 
                        clickable 
                        color={account.status === "Active"? "primary":"secondary" } 
                        />}
                    </TableCell>
                  </TableRow>
                )})
              }
              {emptyRows > 0 && (
                <TableRow style={{ height: 65 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Pagination
            className={classes.pagination}
            count={ Math.ceil(rowCount/ITEMS_PER_PAGE)} 
            page={currentPage}
            onChange={(event: unknown, newPage: number) => setCurrentPage(newPage)}
            variant="outlined" 
            shape="rounded"
            size="small"
          />
        </TableContainer>
      </Grid>
    </Grid>
  );
}

//sort function
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator<Key extends keyof any>(
  order: string,
  orderBy: Key,
  ): (a: { [key in Key]: number | string | string[]}, b: { [key in Key]: number | string |string[]}) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  
  return stabilizedThis.map((el) => el[0]);
}

export default connect(mapStateToProps)(AccountTable);


