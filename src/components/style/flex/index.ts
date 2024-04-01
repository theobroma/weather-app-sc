import { flexAlign } from './flex.align';
import { flexAlignContent } from './flex.align.content';
import { flexAlignSelf } from './flex.align.self';
import { flexDirections } from './flex.directions';
import { flexJustify } from './flex.justify';
import { flexWrap } from './flex.wrap';

export const flexStyles = {
  ...flexDirections,
  ...flexJustify,
  ...flexAlign,
  ...flexAlignSelf,
  ...flexAlignContent,
  ...flexWrap,
  Flex: {
    display: 'flex',
  },
  InlineFlex: {
    display: 'inline-flex',
  },
  FlexGap: (size: number) => ({ gap: size }),
  FlexColumnGap: (size: number) => ({ columnGap: size }),
  FlexRowGap: (size: number) => ({ rowGap: size }),
  FlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlexSize: (flex = 1) => ({ flex }),
  FlexGrow: (flexGrow: number) => ({ flexGrow }),
  FlexBasis: (flexBasis: number | string) => ({ flexBasis }),
  FlexShrink: (flexShrink: number) => ({ flexShrink }),
};
