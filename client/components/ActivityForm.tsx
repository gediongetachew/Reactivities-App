'use client';

import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import api from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function ActivityForm() {
  const [form, setForm] = useState({
    Title: '',
    Description: '',
    City: '',
    Venue: '',
    CategoryId: 1, // Default
  });

  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => await api.post('/activities', form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
      router.push('/');
    },
  });

  return (
    <Stack spacing={2}>
      <TextField label="Title" onChange={(e) => setForm({ ...form, Title: e.target.value })} />
      <TextField label="Description" onChange={(e) => setForm({ ...form, Description: e.target.value })} />
      <TextField label="City" onChange={(e) => setForm({ ...form, City: e.target.value })} />
      <TextField label="Venue" onChange={(e) => setForm({ ...form, Venue: e.target.value })} />
      <Button variant="contained" onClick={() => mutation.mutate()}>
        Create Activity
      </Button>
    </Stack>
  );
}
