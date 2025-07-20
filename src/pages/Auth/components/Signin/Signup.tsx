import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import styles from './Signup.module.css'

export default function Signin() {
  return (
    <form action="" className={`${styles.signup_form}`}>
      <h3>Đăng ký</h3>
      <section className={`${styles.fields_container}`}>
        <Box sx={{ display: 'flex', columnGap:'4rem' }}>
          <TextField
            id="filled-password-input"
            label="Họ"
            type="text"
            autoComplete="current-password"
            variant="standard"
            sx={{width:'50%'}}
          />
          <TextField
            id="filled-password-input"
            label="Tên"
            type="text"
            autoComplete="current-password"
            variant="standard"
            sx={{width:'50%'}}
          />
        </Box>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="f" control={<Radio sx={{
            '&.Mui-checked': {
              color: 'var(--secondary-color)',
            },
          }} />} label="Nữ" />
          <FormControlLabel value="m" control={<Radio sx={{
            '&.Mui-checked': {
              color: 'var(--secondary-color)',
            },
          }}/>} label="Nam" />
        </RadioGroup>
        <TextField
          id="filled-password-input"
          label="Tài khoản"
          type="text"
          autoComplete="current-password"
          variant="standard"
          sx={{ width: '100%' }}
        />
        <TextField
          id="filled-password-input"
          label="Mật khẩu"
          type="text"
          autoComplete="current-password"
          variant="standard"
          sx={{ width: '100%' }}
        />
        <TextField
          id="filled-password-input"
          label="Xác nhận mật khẩu"
          type="text"
          autoComplete="current-password"
          variant="standard"
          sx={{ width: '100%' }}
        />
      </section>
      <Box sx={{ display: 'flex', columnGap:'3rem' }}>
        <Button sx={{ margin: '1.5rem 0', backgroundColor: 'var(--secondary-color)', fontWeight: '600' }} variant="contained">Đăng ký</Button>
        <Button sx={{ margin: '1.5rem 0', color: 'var(--secondary-color)', borderColor: 'var(--secondary-color)', fontWeight: '600' }} variant="outlined">Trở lại đăng nhập</Button>
      </Box>
    </form>
  )
}
