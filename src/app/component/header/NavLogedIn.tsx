import React from 'react';
import { Box } from '@mui/material';
import { FaBell } from 'react-icons/fa';
import styles from './_header.module.scss'; // Đảm bảo import các styles nếu cần

function NavLoggedIn() {
    return (
        <Box className={styles.box2}>
            <FaBell className={styles.bell} />
        </Box>
    );
}

export default NavLoggedIn;