import { Style } from '@/components/style';
import { ColorEnum } from '@/enums/color.enum';

export const SectionWrapper = Style.Grey50Bg.Radius(16).Padding(16).MarginTop(24).Div;
export const DashedPrimaryWrapper = Style.Border(ColorEnum.Primary500, { width: 2, style: 'dashed' })
  .Radius(16)
  .Padding(16).Div;

export const VerticalStack = Style.Flex.Column.FlexGap(8).Div;
export const HorizontalStack = Style.Flex.FlexGap(8).Div;

export const ChipGroupStack = Style.Flex.CrossAxisCenter.FlexGap(8).Div;
export const SimpleIconWrapper = Style.Flex.Div;
