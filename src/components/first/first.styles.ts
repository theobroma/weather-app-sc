import { ColorEnum } from '../../enums/color.enum';
import { Style } from '../style';

export const Title = Style.Secondary.Bold.Div;
export const SubTitle = Style.Primary.PaddingTop(60).Div;
export const Description = Style.Black.Paragraph;

export const PrimaryBlock = Style.PrimaryBg.MinHeight(250).Border(ColorEnum.Black).Radius(16).Div;
export const SecondaryBlock = Style.SecondaryBg.MinHeight(250).Border(ColorEnum.Black).Radius(16).Div;
