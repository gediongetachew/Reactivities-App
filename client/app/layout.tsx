"use client";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { CssBaseline, Container, Box } from "@mui/material";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0,padding:0, backgroundColor: "#eaebeb" }}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Navbar />
          <Box

            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "space-between",
            }}
          >
            {children}
          </Box>
        </QueryClientProvider>
      </body>
    </html>
  );
}
