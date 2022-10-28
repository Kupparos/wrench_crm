import { AddressesMapperFromJSON } from "../mappers/AddressesMappers";
import { Address } from "../types";
import { useFetch } from "./utils";

export const useAddressees = async (
  searchString: string
): Promise<Array<Address>> => {
  const url = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address/`;
  const token = "6c39b20e9c23e0229e1a9235b85dd107230173ea";

  const options: RequestInit = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: searchString }),
  };

  const fetchResult = await useFetch(url, options);
  const mappedResult = AddressesMapperFromJSON(fetchResult.parsedBody);

  return mappedResult;
};
