'use client';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { CssBaseline, Container } from '@mui/material';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Navbar />
          <Container maxWidth="lg">{children}</Container>
        </QueryClientProvider>
      </body>
    </html>
  );
}
