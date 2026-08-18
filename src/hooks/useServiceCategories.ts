import { fetchServiceCategories } from "../lib/api";
import { useAsyncData } from "./useAsyncData";

export function useServiceCategories() {
  return useAsyncData(fetchServiceCategories, []);
}
