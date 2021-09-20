import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles';

const Search = ({ onSearch }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const onInputChange = value => {
      setSearch(value);
      onSearch(value);
  };

  return (
    <TextField  
      fullWidth 
      className={classes.searchField}
      variant="outlined"
      placeholder="SEARCH"
      value={search} 
      onChange={e => onInputChange(e.target.value)}
      InputProps={{
        startAdornment: (
            <SearchIcon className={classes.inputAdornment}/>
        ),
      }}
    />
  )
}

export default Search;
  
