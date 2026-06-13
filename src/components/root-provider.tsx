'use client';

import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

export function RootProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();

  return (
    <TooltipProvider>
      <Toaster position="bottom-right" />
      {children}
    </TooltipProvider>
  );
}
