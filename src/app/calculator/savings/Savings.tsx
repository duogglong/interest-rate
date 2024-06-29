import React, { useState } from "react";
import Header from '../../component/header/Header';
import { Container, TextField, Box, Typography, Grid, Button, FormControlLabel, Checkbox } from '@mui/material';
import styles from "./_savings.module.scss";
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './../../../Theme';

function Savings() {
  const [sumMonneyResult, setSumMonneyResult] = useState(0);

  const handleSubmit = () => {
  }

  return (
    <div>
      <Header />
      <ThemeProvider theme={Theme}>
        <Container component="main" maxWidth="lg">
          <Box className={styles.box}>
            <Box className={styles.box1}>
              <Typography className={styles.typography}>
                Công cụ tính toán lãi tiết kiệm
              </Typography>
            </Box>

            <Box className={styles.box2}>
              <Box component="form" noValidate onSubmit={handleSubmit} className={styles.box2Left}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    name="money"
                    required
                    fullWidth
                    id="money"
                    label="Số tiền gửi (VND)"
                    autoFocus
                    className={styles.textField}
                    InputProps={{ classes: { input: styles.resize } }}
                    InputLabelProps={{ classes: { root: styles.resize } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    name="tenor"
                    required
                    fullWidth
                    id="tenor"
                    label="Kỳ hạn gửi"
                    autoFocus
                    className={styles.textField}
                    InputProps={{ classes: { input: styles.resize } }}
                    InputLabelProps={{ classes: { root: styles.resize } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    name="money"
                    required
                    fullWidth
                    id="money"
                    label="Lãi suất (% / Năm)"
                    autoFocus
                    className={styles.textField}
                    InputProps={{ classes: { input: styles.resize } }}
                    InputLabelProps={{ classes: { root: styles.resize } }}
                  />
                </Grid>
                <Box className={styles.boxChild}>
                  <Button variant="contained" color='primary' className={styles.btn}>Xem cách tính lãi suất</Button>
                </Box>
              </Box>
              <Box className={styles.box2Right}>
                <Box className={styles.summary}>
                  <Typography className={styles.typography}>
                    Tổng tiền cuối kỳ (VND)
                  </Typography>
                  <Typography className={styles.number}>
                    {sumMonneyResult}
                  </Typography>
                </Box>
                <Box className={styles.detailsResult}>
                  <Box className={styles.principal}>
                    <Typography className={styles.typography}>
                      Tiền gốc
                    </Typography>
                    <Typography className={styles.number}>
                      1.000.000 VND
                    </Typography>
                  </Box>
                  <Box className={styles.interest}>
                    <Typography className={styles.typography}>
                      Tiền lãi
                    </Typography>
                    <Typography className={styles.number}>
                      1.000.000 VND
                    </Typography>
                  </Box>
                  <Box className={styles.both}>
                    <Typography className={styles.typography}>
                      Tổng tiền gốc lãi
                    </Typography>
                    <Typography className={styles.number}>
                      1.000.000 VND
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className={styles.boxNote}>
              <Typography className={styles.typography}>
                Lưu ý: Công cụ tính lãi mang tính tham khảo, để được biết chính xác tiền lãi được nhận quý khách vui lòng liên hệ Quầy giao dịch để được hỗ trợ.
              </Typography>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Savings;