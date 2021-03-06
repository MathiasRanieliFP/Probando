import { Ref } from 'react';
import { AnchorProps } from './model';
import { AnchorStyle } from './Styles';

export const Anchor = ({
    href,
    children,
    color
  }: AnchorProps, 
  ref:Ref<HTMLAnchorElement>
  )=>{
    return (
        <AnchorStyle
          ref={ref}
          href={href}
          color={
                color
                ? 'azul'
                : color === 'azul'
                ? 'lila'
                : color === 'lila'
                ? 'naranja'
                : color === 'naranja'
          }
        >
            {children}
        </AnchorStyle>
      );
  } 