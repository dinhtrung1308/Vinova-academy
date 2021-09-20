import { createStyles, makeStyles, Theme, alpha } from "@material-ui/core";
import themeConfig from 'config/theme'

const useStyles = makeStyles((theme: Theme) => createStyles({
  page : {
    marginTop: '10px', 
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  pageHeader : {
    fontSize: themeConfig.fSize22,
    fontWeight: themeConfig.fWeight600,
    color: themeConfig.titleHeadTable,
    marginBottom: '20px'
  },
  table : {
    border: "5px solid #F2F2F2",
  },
  headrow : {
    fontSize: themeConfig.fSize14,
    fontWeight: themeConfig.fWeight600,
    color: themeConfig.titleHeadTable,
  },
  pagination: {
    margin: '10px',
    marginRight: '10px',
    float: 'right'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  small: {
    marginLeft: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  searchField: {
    marginTop: '20px',
    marginBottom :theme.spacing(0), 
    backgroundColor: 'white',
    borderRadius: '20px',
    '& .MuiOutlinedInput-root': {
      '& input' : {
        paddingLeft: '5px',
        borderRadius: '20px',
      },
      '& fieldset': {
        borderRadius: '20px',
        border: '5px solid #F2F2F2'
      },
      '&:hover fieldset': {
        borderColor: '#F2F2F2',
      },
      '&.Mui-focused fieldset': {
        boxShadow: `${alpha('#2EB183', 0.25)} 0 0 0 0.2rem`,
        borderColor: '#2EB183',
      },
    },
  },
  inputAdornment: {
    color: 'grey',
  },
  customStatus : {
    marginLeft: '-20px',
  },
  filter : {
    float: 'right', 
    margin: '20px', 
    display: 'inline-flex'
  },
}));

export const customStyles = {
  placeholder: (base) => ({
    ...base,
    //color: 'white'
  }),
  control: (base, state) => ({
    ...base,
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: "#2EB183",
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base,state) => ({
    ...base,
    borderRadius: 0,
    marginTop: '5px',
  }),
  menuList: (base,state) => ({
    ...base,
    padding: 0
  }),
};

export default useStyles;
