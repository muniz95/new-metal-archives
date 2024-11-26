import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/http';
import { QueryConfig } from '@/lib/react-query';
import { LatestItem, LatestItemType } from '@/types/api';

export const getLatestUpdates = (updateType: LatestItemType): Promise<LatestItem[]> => {
  return api.get(`/${updateType}`).then(result => (result as any).latest);
};

export const getUpdateQueryOptions = (updateType: LatestItemType) => {
  return queryOptions({
    queryKey: [`latest-${updateType}-updates`],
    queryFn: () => getLatestUpdates(updateType),
  });
};

type UseUpdateOptions = {
  queryConfig?: QueryConfig<typeof getUpdateQueryOptions>;
  updateType: LatestItemType;
};

export const useLatestUpdates = ({
  queryConfig,
  updateType,
}: UseUpdateOptions) => {
  return useQuery({
    ...getUpdateQueryOptions(updateType),
    ...queryConfig,
  });
};