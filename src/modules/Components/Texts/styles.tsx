import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';
import themeConfig from 'config/theme'

type Props = {
  color?: string;
  size?: number;
  fontWeight?:  "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | number | "normal" | "bold" | "bolder" | "lighter";
  lineHeight?: string;
  letterSpacing?: string;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    root:{
      color: ({ color }) => color,
      fontSize: ({ size }) => size,
      fontWeight: ({ fontWeight }) => fontWeight,
      lineHeight: ({ lineHeight }) => lineHeight,
      letterSpacing : ({ letterSpacing }) => letterSpacing,
    },
    description: {
      opacity: 0.5,
    },
  }),
  {
    name: 'Texts',
    index: 1,
  }
);

export default useStyles;
