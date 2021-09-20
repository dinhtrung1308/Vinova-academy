import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import useStyles, { customStyles }  from '../styles';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
  
const mapStateToProps = (state) => {
  return {
    accounts: state.accountTable.accounts,
  }
}

function filterOption(data, option) {
  let newdata = option === 'technology'? data.map(x => x.technology).flat()
              : option === 'role'? data.map(x => x.role).flat() 
              : data.map(x => x.status).flat()
  return newdata.filter((item, pos) => newdata.indexOf(item) === pos)
}

const Filter = ({ onFilter, accounts }) => {
  const classes = useStyles()
  const [ filterRole, setFilterRole ] = useState("");
  const [ filterStatus, setFilterStatus ] = useState("");
  const [ filterTechnology, setFilterTechnology ] = useState("");

  const techOptions = accounts? filterOption(accounts, 'technology').map(x => ({ value: x, label : x })) : ({value: "", label: ""})
  const roleOptions = accounts? filterOption(accounts, 'role').map(x => ({ value: x, label : x })) : ({value: "", label: ""})
  const statusOptions = accounts? filterOption(accounts, 'status').map(x => ({ value: x, label : x })) : ({value: "", label: ""})
  
  const handleChangeRole = (e) => {
    const role = e !== null ? e.value : '';
    setFilterRole(role);
    onFilter(role, filterStatus, filterTechnology);
  }
  const handleChangeStatus = (e) => {
    const status = e !== null ? e.value : '';
    setFilterStatus(status);
    onFilter(filterRole, status, filterTechnology);
  }
  const handleChangeTechnology = (e) => {
    const technology = e !== null ? e.value : '';
    setFilterTechnology(technology);
    onFilter(filterRole, filterStatus, technology);
  }

  return (
    <Grid item container justifyContent='flex-end' spacing={1}>
      <Grid item lg={2} md={4}>
        <Select
          placeholder="ROLE"
          isClearable
          styles={customStyles}
          options={roleOptions}
          onChange={handleChangeRole}
        />
      </Grid>
      <Grid item lg={2} md={4}>
        <Select
          placeholder="STATUS"
          isClearable
          styles={customStyles}
          options={statusOptions}
          onChange={handleChangeStatus}
        />
      </Grid>
      <Grid item lg={2} md={4}>
        <Select
          placeholder="TECHNOLOGY"
          isClearable
          styles={customStyles}
          options={techOptions}
          onChange={handleChangeTechnology}
        />
      </Grid>
  </Grid>
  )
}

export default connect(mapStateToProps)(Filter)
