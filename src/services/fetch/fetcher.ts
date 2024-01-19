// NOTE: To customize the fetcher
export function fetcher(endpoint: RequestInfo, config: RequestInit) {
  return fetch(endpoint, config);
}
