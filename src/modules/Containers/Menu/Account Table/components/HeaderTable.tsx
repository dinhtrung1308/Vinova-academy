import React, { useState } from 'react';
import { IData, TOrder } from 'models/Accounts';
import {TableHead,TableCell,TableRow, TableSortLabel} from '@material-ui/core';
import useStyles  from '../styles';

const HeaderTable = ({headers, onSorting}) => {
  const classes = useStyles();
  const [sortingField, setSortingField] = useState<keyof IData>("id");
  const [sortingOrder, setSortingOrder] = useState<TOrder>('asc');

  const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

  return (
    <TableHead>
      <TableRow >
        {headers.map(({id, label, sortable}) => (
          <TableCell
            align="center"
            className={classes.headrow}
            key={id}
          >
          <TableSortLabel
            active={sortingField === id}
            direction={sortingField === id ? sortingOrder : 'asc'}
            onClick={() => sortable ? onSortingChange(id) : null}
          >
          {label}
          {sortingField && sortingField === id ? (
            <span className={classes.visuallyHidden}>
              {sortingOrder === 'desc' ? 'sorted descending' : 'sorted ascending'}
            </span>
          ) : null}
          </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default HeaderTable;