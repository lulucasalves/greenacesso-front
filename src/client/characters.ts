import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { api } from "~/client/fetcher";

export async function getCharacters({
  page,
  search,
  specie,
  gender,
  ids,
  status,
}: {
  page: number;
  search?: string;
  specie?: string;
  gender?: string;
  status?: string;
  ids?: number[];
}) {
  const searchParam = search ? `&&name=${search}` : "";
  const specieParam = specie && specie !== "all" ? `&&species=${specie}` : "";
  const genderParam = gender && gender !== "all" ? `&&gender=${gender}` : "";
  const statusParam = status && status !== "all" ? `&&status=${status}` : "";
  const idsRoute = ids && ids.length ? `/${ids.join(",")}` : "";

  return api
    .get<any>(
      `/character${idsRoute}?page=${page}${searchParam}${specieParam}${genderParam}${statusParam}`
    )
    .then((response: AxiosResponse<any>) => response.data)
    .catch(() => {
      data: [{ results: [] }];
    });
}

export async function getCharacter(id: string) {
  return api
    .get<any>(`/character/${id}`)
    .then((response: AxiosResponse<any>) => response.data)
    .catch(() => {
      data: {
      }
    });
}

export function useCharacters({
  page,
  search,
  specie,
  gender,
  status,
  ids,
}: {
  page: number;
  search?: string;
  specie?: string;
  gender?: string;
  status?: string;
  ids?: number[];
}) {
  const { data, ...rest } = useQuery({
    queryFn: async () =>
      await getCharacters({ page, search, specie, gender, status, ids }),
  });

  return {
    data,
    ...rest,
  };
}

export function useCharacter(id: string) {
  const { data, ...rest } = useQuery({
    queryFn: async () => await getCharacter(id),
  });

  return {
    data,
    ...rest,
  };
}
