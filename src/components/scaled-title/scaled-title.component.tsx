import { FC, PropsWithChildren } from 'react';
import { css } from '@emotion/css';
import { ScaledTitleProps } from '../types';

export const ScaledTitle:FC<PropsWithChildren<ScaledTitleProps>> =
({
  children,
  color='#000',
  size='x-large',
  family='arial',
  weight='bold',
  align='center',
}) => (<div className={css`
  color: ${color};
  text-align: ${align};
  font-weight: ${weight};
  font-family: ${family};
  font-size: ${size};
  margin: auto;
  width: max-content;
`}>{`${children}`}</div>);