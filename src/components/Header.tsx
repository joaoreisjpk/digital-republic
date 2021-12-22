import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <NextLink href='/'>
          <Link href='#' color='white' underline='none'>
            <Typography variant='h5'>Digital Republic Challenge</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
}
