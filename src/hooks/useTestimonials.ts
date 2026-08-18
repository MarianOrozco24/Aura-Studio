import { fetchTestimonials } from "../lib/api";
import { useAsyncData } from "./useAsyncData";

export function useTestimonials() {
  return useAsyncData(fetchTestimonials, []);
}
