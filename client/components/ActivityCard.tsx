'use client';

import { Card, Typography, Box, Avatar, Button, Icon } from '@mui/material';
import { Activity } from '@/types/activity';
import profile from '../../client/public/profile1.jpg';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', mb: 2, borderRadius: 4 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
        <Box sx={{ display: 'flex', width: '40%', gap:2, m: 2, alignItems:'center' }}>
          {/* Avatar for Host */}
          <Avatar
            src={profile.src} // ✅ use profile.src since it's imported image
            alt="profile"
            sx={{ width: 70, height: 70 }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>{activity.Title}</Typography>
            <Typography variant='body2'>Hosted By {activity.City}</Typography>
          </Box>
        </Box>

        <Box sx={{ width: '15%' }}>
          <Typography
            variant='subtitle2'
            sx={{
              borderRadius: 4,
              m: 2,
              color: 'orange',
              textAlign: 'center',
              border: 'solid 1px orange',
              textWrap:'nowrap'
            }}
          >
            You Are Going
          </Typography>
        </Box>
      </Box>

      {/* Date & Location */}
      <Box sx={{ display: 'flex', m: 2, flexDirection: { xs: 'column', md: 'row' }, gap:2 }}>
        <Typography variant='body2' color="text.secondary" sx={{display:'flex', alignItems:'center', gap:1}}>
         <AccessTimeOutlinedIcon /> {new Date(activity.Date).toLocaleString()}
        </Typography>
        <Typography variant='body2' color="text.secondary" sx={{display:'flex', alignItems:'center', gap:1}}>
          <RoomOutlinedIcon /> Portland, portland, Multnomah County, Oregon, 43443, USA
        </Typography>
      </Box>

      {/* Attendees */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2,backgroundColor:'#eaebeb' }}>
        {[...Array(4)].map((_, index) => (
          <Avatar
            key={index}
            src={profile.src}
            alt={`Attendee ${index + 1}`}
            sx={{ width: 40, height: 40 }}
          />
        ))}
      </Box>

      {/* Description */}
      <Box sx={{ pb: 4, m:{xs:0, md:2}, display:'flex',flexDirection:{xs:'column', md:'row'}, justifyContent:'space-between' }}>
        <Typography variant='subtitle1' sx={{}}>
          we ride to Amsterdam and drink some beer!
        </Typography>
        <Button sx={{m:1, border:'solid 1px blue', borderRadius: 6, width:'10%', bgcolor:'#176acb', color:'white'}}>View</Button>
      </Box>
    </Card>
  );
}
