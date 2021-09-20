import React, { memo } from 'react';
import useStyles from './styles';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import themeConfig from 'config/theme'

interface TextsProps {
  children: any;
  onClick?: any;
  styles?: any;
  color?: string;
  size?: number;
  type?: string;
  fontWeight?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | number | "normal" | "bold" | "bolder" | "lighter";
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  lineHeight?: string;
  letterSpacing?: string;
}

const Texts = memo((props: TextsProps) => {
  const { children, onClick, styles, color, size, type, fontWeight, align, lineHeight='1.5', letterSpacing='0.00938em' } = props;
  const _styles = {
    color: color ? color : themeConfig.titleColor,
    size: size ? size : 16,
    fontWeight: fontWeight ? fontWeight : themeConfig.fWeight400,
    lineHeight: lineHeight ? lineHeight : '1.5',
    letterSpacing: letterSpacing ? letterSpacing : '0.00938em'
  }
  const classes = useStyles(_styles); 

  return (
    <Typography
      className={clsx(classes.root,
        type === 'description' ? classes.description : '',
        styles || '',
      )}
      onClick={onClick}
      align={align ? align : 'inherit'}
      >
       {children}
    </Typography>
  );
})

export default connect()(Texts);

