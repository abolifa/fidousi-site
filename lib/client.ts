import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ UX + performance
      refetchOnWindowFocus: true, // refresh when user returns to tab
      refetchOnReconnect: true, // refresh after network loss
      refetchOnMount: false, // skip refetch when data is still fresh
      retry: 2, // retry failed queries twice
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 15000), // backoff
      staleTime: 1000 * 60 * 3, // 3 min freshness window
      gcTime: 1000 * 60 * 10, // garbage collect after 10 min
      refetchIntervalInBackground: false, // no background polling unless needed
      networkMode: "online", // skip automatic offline queuing
    },
    mutations: {
      retry: 1,
      networkMode: "online",
    },
  },
});
