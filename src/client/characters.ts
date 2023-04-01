import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { api } from "~/client/fetcher";

export async function getCharacters({
  page,
  search,
  specie,
  gender,
  status,
}: {
  page: number;
  search?: string;
  specie?: string;
  gender?: string;
  status?: string;
}) {
  const searchParam = search ? `&&name=${search}` : "";
  const specieParam = specie && specie !== "all" ? `&&species=${specie}` : "";
  const genderParam = gender && gender !== "all" ? `&&gender=${gender}` : "";
  const statusParam = status && status !== "all" ? `&&status=${status}` : "";

  return api
    .get<any>(
      `/character?page=${page}${searchParam}${specieParam}${genderParam}${statusParam}`
    )
    .then((response: AxiosResponse<any>) => response.data)
    .catch(() => {
      data: [{ results: [] }];
    });
}

export function useCharacters({
  page,
  search,
  specie,
  gender,
  status,
}: {
  page: number;
  search?: string;
  specie?: string;
  gender?: string;
  status?: string;
}) {
  const { data, ...rest } = useQuery({
    queryFn: async () =>
      await getCharacters({ page, search, specie, gender, status }),
  });

  return {
    data,
    ...rest,
  };
}
