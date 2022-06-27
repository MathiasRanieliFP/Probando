import { Meta } from '@storybook/react';
import { Anchor } from './Anchor';
import { AnchorProps } from './model';

export default {
  component: Anchor,
  title: 'Components/Anchor',
} as Meta;

export const Base = (props: AnchorProps) => {
    return (
      <>
        <Anchor {...props} color="azul">
          primary
        </Anchor>
        <Anchor {...props} color="lila" >
          Secondary
        </Anchor>
        <Anchor {...props} color="naranja" >
          success
        </Anchor>

      </>
    );
  };