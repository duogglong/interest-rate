import React, { memo, useState, useEffect } from "react";
import { Box, Container, Toolbar, MenuItem, AppBar, Typography } from '@mui/material';
import styles from './_header.module.scss';
import NavLoggedIn from './NavLogedIn';
import NavAnonymous from './NavAnonymous';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL } from '../../../Constants';
import clsx from 'clsx';

function Header() {
  return (
    <AppBar position="fixed" className={styles.appbar}>
      <Container maxWidth="lg" className={styles.container}>
        <Toolbar className={styles.toolbar}>
          <Box className={styles.box}>

            <NavAnonymous />

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;