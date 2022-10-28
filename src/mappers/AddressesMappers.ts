import { Address } from "../types";
import { isSet } from "./utils";

export function AddressesMapperFromJSON(object: any): Array<Address> {
  return Array.isArray(object?.suggestions)
    ? object.suggestions.map((e: any) => AddressMapperFromJSON(e))
    : [];
}

export function AddressMapperFromJSON(object: any): Address {
  return {
    value: isSet(object.value) ? String(object.value) : "",
  };
}
