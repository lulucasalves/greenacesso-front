import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { api } from "~/client/fetcher";

export async function getCharacters({
  page,
  search,
}: {
  page: number;
  search?: string;
}) {
  const searchParam = search ? `&&name=${search}` : "";
  console.log(searchParam);
  return api
    .get<any>(`/character?page=${page}${searchParam}`)
    .then((response: AxiosResponse<any>) => response.data)
    .catch(() => {
      data: [{ results: [] }];
    });
}

export function useCharacters({
  page,
  search,
}: {
  page: number;
  search?: string;
}) {
  const { data, ...rest } = useQuery({
    queryFn: async () => await getCharacters({ page, search }),
  });

  return {
    data,
    ...rest,
  };
}
