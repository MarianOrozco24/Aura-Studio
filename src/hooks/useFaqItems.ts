import { fetchFaqItems } from "../lib/api";
import { useAsyncData } from "./useAsyncData";

export function useFaqItems() {
  return useAsyncData(fetchFaqItems, []);
}
