import { BASE_API_URL } from "configs";

// NOTE: To customize the fetcher
export function fetcher<T extends object>(
  endpoint: string,
  config?: RequestInit
) {
  return fetch(BASE_API_URL + endpoint, {
    ...config,
    headers: { ...config?.headers, "Content-Type": "application/json" },
  }).then(async (response) => {
    return response.json() as T;
  });
}
