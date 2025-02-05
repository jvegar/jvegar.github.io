const cacheKey = "myData";
const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours

export function getCachedData() {
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < cacheDuration) {
      return data;
    }
  }
  return null;
}

export function setCachedData(data: unknown) {
  const cacheValue = JSON.stringify({ data, timestamp: Date.now() });
  localStorage.setItem(cacheKey, cacheValue);
}
