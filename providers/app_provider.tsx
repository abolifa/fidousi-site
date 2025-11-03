"use client";
import { Toaster } from "@/components/ui/sonner";
import { queryClient } from "@/lib/client";
import { QueryClientProvider } from "@tanstack/react-query";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        richColors
        style={{
          fontFamily: "var(--font-noto-kufi-arabic)",
        }}
      />
    </QueryClientProvider>
  );
};

export default AppProvider;
