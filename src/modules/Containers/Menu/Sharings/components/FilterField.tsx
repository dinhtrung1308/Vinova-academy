import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (base, state) => ({
    ...base,
    border:'2px solid #2bc58f',
    borderRadius: '5px',
    margin:'5px',
    //boxShadow: state.isFocused ? '0 0 9px #2bc58f' : null,
    fontSize:'16px',
  }),
}
export function FilterField (props){
  const sendDataFilter =(value)=>{
    props.callback({
      type: props.name,
      data: value
    })
  }
  const resetFilter =()=>{
    props.reset();
  }
  return(
    <Select
          placeholder={props.name.toUpperCase()}
          isClearable
          isSearchable
          options={props.options}
          styles={customStyles}
          autofocus={false}
          onChange={(e)=>{if(e){sendDataFilter(e.value)}}}
        />
  );
};