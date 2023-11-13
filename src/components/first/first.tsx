import { ForecastDay } from '../forecast-day/forecast-day';
import { FormRow } from '../form/common.styles';
import { Description, PrimaryBlock, SecondaryBlock, SubTitle, Title } from './first.styles';

export const FirstComponent = () => (
  <div>
    <span>
      <Title>Title</Title>
      <SubTitle>SubTitle</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum neque hic ad aliquam voluptate, nesciunt
        aperiam in ducimus aspernatur optio dolorem earum eligendi cupiditate reiciendis modi sit! Beatae, numquam.
      </Description>
    </span>
    <FormRow sizes={3}>
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
    </FormRow>
    <FormRow sizes={[1, 2]}>
      <PrimaryBlock />
      <SecondaryBlock />
    </FormRow>
    <FormRow sizes={3}>
      <PrimaryBlock />
      <SecondaryBlock />
      <PrimaryBlock />
    </FormRow>
    <FormRow sizes={[2, 1]}>
      <SecondaryBlock />
      <PrimaryBlock />
    </FormRow>
  </div>
);
