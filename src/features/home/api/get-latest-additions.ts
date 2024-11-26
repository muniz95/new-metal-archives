import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/http';
import { QueryConfig } from '@/lib/react-query';
import { LatestItem, LatestItemType } from '@/types/api';

export const getLatestAdditions = (additionType: LatestItemType): Promise<LatestItem[]> => {
  return api.get(`/${additionType}`).then(result => (result as any).latest);
};

export const getAdditionQueryOptions = (additionType: LatestItemType) => {
  return queryOptions({
    queryKey: [`latest-${additionType}-additions`],
    queryFn: () => getLatestAdditions(additionType),
  });
};

type UseAdditionOptions = {
  queryConfig?: QueryConfig<typeof getAdditionQueryOptions>;
  additionType: LatestItemType;
};

export const useLatestAdditions = ({
  queryConfig,
  additionType,
}: UseAdditionOptions) => {
  return useQuery({
    ...getAdditionQueryOptions(additionType),
    ...queryConfig,
  });
};