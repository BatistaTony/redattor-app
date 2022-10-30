import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';

import { ChangeEvent, useState } from 'react';
import Head from 'next/head';
import { signIn } from '@services/auth/sign-in';
import { useRouter } from 'next/router';
import {
  SignInContainer,
  SignInFormContainer,
  SignInFormText,
  SignInFormTitle,
  SignInLink,
} from './style';

interface FormSignInDataType {
  userName: string;
  password: string;
}

const INITIAL_STATE_ERROR_MSG = {
  msg: '',
  field: '',
};

const INITIAL_STATE_FORM_DATA = {
  userName: '',
  password: '',
};

const SignInView = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(INITIAL_STATE_ERROR_MSG);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormSignInDataType>(
    INITIAL_STATE_FORM_DATA,
  );

  const resetErrorMsgState = () => {
    setErrorMsg(INITIAL_STATE_ERROR_MSG);
  };

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setFormData({
      ...formData,
      [target.name]: target.value,
    });

    resetErrorMsgState();
  };

  const handleError = (): boolean => {
    if (formData.userName !== '' && formData.password !== '') {
      if (formData.password.length < 6) {
        setErrorMsg({
          msg: 'Senha deve ser maior que 6 caracteres',
          field: 'password',
        });
        return true;
      }
      return false;
    }
    if (formData.userName === '') {
      setErrorMsg({
        msg: 'O preenchimento deste campo é obrigatório',
        field: 'userName',
      });
      return true;
    }
    if (formData.password === '') {
      setErrorMsg({
        msg: 'O preenchimento deste campo é obrigatório',
        field: 'password',
      });
      return true;
    }
    return false;
  };

  const submitForm = async () => {
    resetErrorMsgState();
    handleError();
    if (!handleError()) {
      setLoading(true);
      const resp = await signIn(formData);

      if (resp === 'success') {
        setLoading(false);
        router.push('/home');
      } else {
        setErrorMsg({
          field: 'server',
          msg: resp,
        });
        setLoading(false);
      }
    }
  };

  const checkFields = (): boolean =>
    formData.userName === '' || formData.password === '';

  return (
    <SignInContainer>
      <Head>
        <link
          href="http://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <SignInFormContainer>
        <SignInFormTitle>Entrar</SignInFormTitle>
        <SignInFormText>Comece agora no E-redattor</SignInFormText>
        <div className="ipts">
          <TextField
            fullWidth
            error={errorMsg.field === 'userName'}
            id="outlined-basic"
            label="Nomde do utilizador"
            variant="outlined"
            name="userName"
            value={formData.userName}
            helperText={errorMsg.field === 'userName' ? errorMsg.msg : ''}
            onChange={handleChange}
            style={{
              marginBottom: errorMsg.field === 'userName' ? '10px' : '24px',
            }}
          />
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              marginBottom: errorMsg.field === 'password' ? '10px' : '',
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              error={errorMsg.field === 'password'}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => null}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
            />
            {errorMsg.field === 'password' && (
              <FormHelperText>{errorMsg.msg}</FormHelperText>
            )}
          </FormControl>
        </div>

        {errorMsg.field === 'server' && (
          <p className="svr-error-msg">{errorMsg.msg}</p>
        )}

        <LoadingButton
          sx={{ textTransform: 'none' }}
          disabled={checkFields()}
          variant="contained"
          onClick={submitForm}
          loading={loading}
        >
          Entrar
        </LoadingButton>
        {/* <SignInLink href="#">Esqueceu a sua senha ?</SignInLink> */}
      </SignInFormContainer>
    </SignInContainer>
  );
};

export default SignInView;
