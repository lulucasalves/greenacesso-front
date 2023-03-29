import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { api } from "~/client/fetcher";

export async function getCharacters({ page }: { page: number }) {
  return api
    .get<any>(`/character?page=${page}`)
    .then((response: AxiosResponse<any>) => response.data);
}

export function useCharacters({ page }: { page: number }) {
  const { data, ...rest } = useQuery({
    queryFn: async () => await getCharacters({ page }),
  });

  return {
    data,
    ...rest,
  };
}
