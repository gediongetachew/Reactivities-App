'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import ActivityCard from '@/components/ActivityCard';
import { CircularProgress, Box } from '@mui/material';
import { Activity } from '@/types/activity';

export default function HomePage() {
  const { data, isLoading } = useQuery<Activity[]>({
    queryKey: ['activities'],
    queryFn: async (): Promise<Activity[]> => (await api.get<Activity[]>('/activities')).data,
  });

  if (isLoading) return <Box textAlign="center"><CircularProgress /></Box>;

  return (
    <div>
      {data?.map((activity) => (
        <ActivityCard key={activity.Id} activity={activity} />
      ))}
    </div>
  );
}
