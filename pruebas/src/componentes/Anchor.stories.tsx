import { Anchor } from './Anchor';
import { AnchorProps } from './model';



export const Basic = (props: AnchorProps) => {
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