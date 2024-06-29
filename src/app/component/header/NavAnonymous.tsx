import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './_header.module.scss'; // Đảm bảo import các styles nếu cần
import { Link } from 'react-router-dom';

function NavAnonymous() {
    return (
        <Box className={styles.box2}>
            <Link to="/tinh-lai-tiet-kiem">
                <Button variant="outlined" color='primary' className={styles.btn}>Tính lãi sổ tiết kiệm</Button>
            </Link>
            <Link to="/tinh-lai-kep">
                <Button variant="contained" color='primary' className={styles.btn}>Tính lãi kép</Button>
            </Link>
            <Link to="/tinh-khoan-vay">
                <Button variant="contained" color='secondary' className={styles.btn}>Tính khoản vay</Button>
            </Link>
        </Box>
    );
}

export default NavAnonymous;