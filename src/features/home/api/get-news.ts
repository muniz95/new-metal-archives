import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/http';
import { QueryConfig } from '@/lib/react-query';
import { News } from '@/types/api';

export const getNews = (
  { page }: { page?: number } = { page: 1 },
): Promise<News[]> => {
  return api.get(`/news`, {
    params: {
      page,
    },
  });
};

export const getNewsQueryOptions = ({
  page = 1,
}: { page?: number } = {}) => {
  return queryOptions({
    queryKey: ['news', { page }],
    queryFn: () => getNews({ page }),
  });
};

type UseNewsOptions = {
  page?: number;
  queryConfig?: QueryConfig<typeof getNewsQueryOptions>;
};

export const useNews = ({
  queryConfig,
  page,
}: UseNewsOptions) => {
  return useQuery({
    ...getNewsQueryOptions({ page }),
    ...queryConfig,
  });
};