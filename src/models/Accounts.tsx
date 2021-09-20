import useStyles from "modules/Containers/Menu/Account Table/styles";
export interface IData {
  id: number,
  avatar: string,
  email: string,
  role: string,
  technology: string[],
  status: string
}
export interface IHeadCell {
  id: keyof IData;
  label: string;
  sortable: boolean
}
export interface IAccountTableState {
  accounts : IData[],
  loading: boolean
}

export type TOrder = 'asc' | 'desc';