import { createStyles, makeStyles,  Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading:{
        position:'fixed',
        zIndex:99,
        top: 0,
        left: 0,
        right:0,
        bottom:0,
        background:'rgba(0,0,0,0.4)',
        padding: 200,
    },
    icon:{
       position:'fixed',
       marginLeft: 500,
       marginTop: 100,
       width:100,
    },
  }),
);