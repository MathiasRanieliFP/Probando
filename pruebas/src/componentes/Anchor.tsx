import { Ref } from 'react';
import { AnchorProps } from './model';
import { AnchorStyle } from './Styles';

export const Anchor = ({
    href,
    variant,
    children,
    color
  }: AnchorProps, 
  ref:Ref<HTMLAnchorElement>
  )=>{
    return (
        <AnchorStyle
          ref={ref}
          href={href}
          text-decoration={
            variant
            ? 'underlined'
            : 'underline'
            ? 'basic'
            : 'none'
          }
        
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