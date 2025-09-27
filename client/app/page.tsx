'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import ActivityCard from '@/components/ActivityCard';
import { CircularProgress, Box, Grid } from '@mui/material';
import { Activity } from '@/types/activity';
import ActivityForm from '@/components/ActivityForm';

export default function HomePage() {
  const { data, isLoading } = useQuery<Activity[]>({
    queryKey: ['activities'],
    queryFn: async (): Promise<Activity[]> =>
      (await api.get<Activity[]>('/activity')).data,
  });

  if (isLoading) return <Box textAlign="center"><CircularProgress /></Box>;

  return (
    <Grid
      container
      spacing={2}
      sx={{
       
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'flex-start',
        padding:5
      }}
    >
      <Grid item xs={12} md={7}>
        {data?.map((activity) => (
          <ActivityCard key={activity.Id} activity={activity} />
        ))}
      </Grid>

      <Grid item xs={12} md={5}>
        <ActivityForm />
      </Grid>
    </Grid>
  );
}
