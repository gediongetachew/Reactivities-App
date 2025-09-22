'use client';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Activities</Typography>
        <div>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/create">
            Create Activity
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
