import { getUnitSize } from './style.util';

export const StyleGrid = {
  Grid: { display: 'grid' },
  GridColumnGap: (gap: number) => ({ columnGap: getUnitSize(gap) }),
  GridGap: (gap: number) => ({ gridGap: getUnitSize(gap) }),
  GridTemplateColumns: (columns: string) => ({ gridTemplateColumns: columns }),
  GridAlignItemsCenter: { alignItems: 'center ' },
};
