import { useState, type ChangeEvent } from 'react'
import styles from './login.module.css'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

export default function Login() {
  const [showPass,setShowPass] = useState(false);
  const [accountValue,setAccountValue] = useState("");
  const [passwordValue,setPasswordValue] = useState("");

  const handleAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountValue(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value)
  }

  return (
    <form action="" className={`${styles.login_form}`}>
      <h3>Đăng nhập</h3>
      <section className={`${styles.fields_container}`}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' , width: '90%'}}>
          <AccountCircle fontSize='large' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="account" label="Tài Khoản" variant="standard" sx={{width: '100%'}}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' , width: '90%'}}>
          <PasswordIcon fontSize='large' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField type={showPass ? 'text' : 'password'} id="password" label="Mật Khẩu" variant="standard" sx={{width: '100%'}}/>
          {
            showPass ? 
            <IconButton onClick={()=>{setShowPass(false)}}><VisibilityOff/></IconButton> :
            <IconButton onClick={()=>{setShowPass(true)}}><Visibility/></IconButton>
          }
        </Box>
      </section>
      <Button sx={{margin: '1.5rem 0', backgroundColor: 'var(--secondary-color)' , fontWeight: '600'}} variant="contained">Đăng nhập</Button>
      <a className={`${styles.form_forget}`} href="">Quên mật khẩu?</a>
    </form>
  )
}
