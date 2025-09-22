'use client';

import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Activity } from '@/types/activity';
import Link from 'next/link';

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 180 }}
        image={`https://picsum.photos/seed/${activity.Id}/400/300`}
        alt={activity.Title}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{activity.Title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(activity.Date).toLocaleString()}
        </Typography>
        <Typography variant="body1">{activity.Description}</Typography>
        <Button component={Link} href={`/activity/${activity.Id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
