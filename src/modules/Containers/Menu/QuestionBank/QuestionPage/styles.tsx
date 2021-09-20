import { createStyles, makeStyles, alpha } from "@material-ui/core";
import themeConfig from "config/theme";

export const customStyles = {

  headCells: {
    style: {
      color: '#0D4872',
      fontSize: '20px',
      fontWeight: 600,
    }
  },
  headRow: {
    style: {
      minHeight: '65px',
    }
  },
  rows: {
    style: {
      minHeight: '32px',
      padding: '15px 0px',
      fontSize: '14px',
    }
  },

  pagination: {
    pageButtonsStyle: {
      height: '30px',
      width: '30px',
      margin: '5px',
      padding: '3px',
      borderRadius: '10px',
      border: '1px solid #222'
    }
  }

};

export const useStyles = makeStyles(() =>
  createStyles({
    qsRoot: {
      textAlign: 'center',
    },

    qsFilter: {
      width: '100%',
    },

    qsFormat: {
      marginBottom: '10px',
    },

    qsSearchField: {
      marginBottom: '0',
      backgroundColor: 'white',
      borderRadius: '20px',
      '& .MuiOutlinedInput-root': {

        '& input': {
          paddingLeft: '5px',
          borderRadius: '20px',
        },

        '& fieldset': {
          borderRadius: '20px',
          border: '5px solid #f2f2f2',
        },

        '&:hover fieldset': {
          boxShadow: `${alpha(themeConfig.mainColor, 0.25)} 0 0 0 0.2rem`,
          borderColor: themeConfig.mainColor,
        },

        '&.Mui-focused fieldset': {
          boxShadow: `${alpha(themeConfig.mainColor, 0.25)} 0 0 0 0.2rem`,
          borderColor: themeConfig.mainColor,
        },
      },
    },

    qsSelect: {
      marginBottom: '0',
      height: '37px',
      backgroundColor: 'white',
      borderRadius: '40px',
      '& .MuiOutlinedInput-root': {
        height: '100%',
        paddingLeft: '5px',
        borderAadius: '40px',

        '& fieldset': {
          borderRadius: '40px',
          border: '5px solid #f2f2f2',
        },

        '&:hover fieldset': {
          borderColor: themeConfig.mainColor,
        },

        '&.Mui-focused fieldset': {
          boxShadow: `0px 0px 0px 0rem ${themeConfig.mainColor}`,
          borderColor: `${themeConfig.mainColor}!important`,
        },
      }
    },

    qsAdd: {
      marginBottom: '0',
      height: '38px',
      backgroundColor: themeConfig.mainColor,
      borderRadius: '2px',
      '& .MuiButton-root': {
        height: '100%',
        paddingLeft: '5px',
        border: `1px solid ${themeConfig.mainColor}`,
        '&:hover': {
          boxShadow: `0px 0px 0px 0rem ${themeConfig.mainColor}`,
          borderColor: themeConfig.mainColor,
        }
      }
    },

    addOption: {
      width: '100%',
    },

    popupLayout: {
      justifyContent: 'space-between',
    },

    popupContentRoot: {
      padding: '24px',
    },

    popupMargin: {
      margin: '0px 0px',
      width: '100%',
      padding: '10px 0px !important',
    },

    popupWarning: {
      color: themeConfig.lowRed,
      position: 'absolute',
      bottom: '-10px',
      left: '8px',
    },

    popupItem: {
      padding: '10px',
      margin: '10px 0px !important',
      boxShadow: '1px 2px 3px 1px #ccc',
      borderRadius: '5px',
    },

    popupOption: {
      padding: '10px',
      margin: '5px 0px !important',
      boxShadow: '1px 0px 3px 1px #ccc',
      borderRadius: '5px',
    },


  })
)

export const customSelect = {
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
  menu: (base, state) => ({
    ...base,
    borderRadius: 0,
    marginTop: '5px',
  }),
  menuList: (base, state) => ({
    ...base,
    padding: 0
  }),
};