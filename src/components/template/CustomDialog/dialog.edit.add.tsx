/* eslint-disable @next/next/no-img-element */
import {
  Container,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from '@mui/material';
import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { User } from 'typescript/user';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { PROFILES, STATUS } from '@utils/user';
import { useDropzone } from 'react-dropzone';
import LoadingButton from '@mui/lab/LoadingButton';
import { validMail } from '@utils/helpers';
import InputLabel from '@mui/material/InputLabel';
import CustomPlaceholder from '@components/atoms/CustomPlaceholder';
import { CustomDialog, FormContainer } from './styles';

interface DialogEditAndAddProductProps {
  changeType: 'edit' | 'add';
  openModal: boolean;
  data: User | undefined;
  cancel: () => void;
  handleOnSave: (data: User) => Promise<boolean>;
}

interface UserExt extends User {
  password: string;
}

const INITIAL_STATE: UserExt = {
  email: '',
  id: '',
  phone: '',
  profile: '',
  status: '',
  firstName: '',
  lastName: '',
  password: '',
  picture: '',
};

const INITIAL_STATE_ERROR_MSG = {
  msg: '',
  field: '',
};

const DialogEditAndAddUser: React.FC<DialogEditAndAddProductProps> = ({
  changeType,
  openModal,
  data,
  handleOnSave,
  cancel,
}) => {
  const [userData, setUserData] = useState<UserExt>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(INITIAL_STATE_ERROR_MSG);

  useEffect(() => {
    if (changeType === 'edit') {
      if (data) {
        setUserData({ ...data, password: '' });
      }
    }
  }, []);

  const handleChange = (event: ChangeEvent | SelectChangeEvent) => {
    setErrorMsg(INITIAL_STATE_ERROR_MSG);

    const target = event.target as HTMLInputElement;

    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const preview = URL.createObjectURL(file);
    setUserData({
      ...userData,
      picture: preview,
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxFiles: 1,
  });

  const checkForm = (): boolean => {
    const fields = Object.keys(userData);

    // eslint-disable-next-line no-restricted-syntax
    for (const field of fields) {
      if (
        userData[field as keyof typeof userData] === '' &&
        field !== 'id' &&
        field !== 'password' &&
        field !== 'picture'
      ) {
        setErrorMsg({
          field,
          msg: `Este campo é obrigatorio`,
        });
        return true;
      }
    }

    // eslint-disable-next-line prefer-regex-literals

    if (validMail(userData.email)) {
      return false;
    }
    setErrorMsg({
      field: 'email',
      msg: `Email invalido`,
    });

    return false;
  };

  const saveChanges = async () => {
    // TODO: UPLOAD PICTURE TO SOME CLOUD AND RECEIVE THE LINK

    if (!checkForm()) {
      setLoading(true);
      const result = await handleOnSave(userData);
      if (result) {
        setLoading(false);
        cancel();
      }
    }
    setLoading(false);
  };

  return (
    <CustomDialog
      open={openModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="icon-edit">
          {changeType === 'add' && <PersonAddAltOutlinedIcon />}
          {changeType === 'edit' && <ModeEditOutlineOutlinedIcon />}
        </div>
        <p>
          {changeType === 'edit'
            ? 'Editar informações do utilizador'
            : 'Adicionar novo utilizador'}
        </p>

        <button type="button" onClick={cancel} className="btn-close-modal">
          <CloseIcon />
        </button>
      </DialogTitle>
      <DialogContent style={{ height: '550px', width: '500px' }}>
        <Container className="img-sttng">
          <div className="icon-user">
            {changeType === 'add' && userData.picture === '' && (
              <PersonOutlinedIcon />
            )}

            {changeType === 'add' && userData.picture && (
              <img className="img-avatar-edit" src={userData.picture} alt="" />
            )}

            {changeType === 'edit' && userData.picture && (
              <img className="img-avatar-edit" src={userData.picture} alt="" />
            )}

            {changeType === 'edit' && userData.picture === '' && (
              <PersonOutlinedIcon />
            )}
          </div>
          <div
            {...getRootProps({
              type: 'button',
              className: `drop-zone `,
            })}
          >
            <AddAPhotoOutlinedIcon />
            <input {...getInputProps()} />
            <p>Carregar image</p>
          </div>
        </Container>
        <FormContainer>
          <TextField
            value={userData.firstName}
            name="firstName"
            variant="outlined"
            onChange={handleChange}
            error={errorMsg.field === 'firstName'}
            helperText={errorMsg.field === 'firstName' && errorMsg.msg}
            label="Nome"
            placeholder="John"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            value={userData.lastName}
            name="lastName"
            onChange={handleChange}
            error={errorMsg.field === 'lastName'}
            helperText={errorMsg.field === 'lastName' && errorMsg.msg}
            label="Sobre nome"
            placeholder="Doe"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            value={userData.email}
            name="email"
            className="email-field"
            error={errorMsg.field === 'email'}
            helperText={errorMsg.field === 'email' && errorMsg.msg}
            onChange={handleChange}
            label="Email"
            placeholder="joe@email.com"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            value={userData.phone}
            name="phone"
            error={errorMsg.field === 'phone'}
            helperText={errorMsg.field === 'phone' && errorMsg.msg}
            className="phone-field"
            onChange={handleChange}
            label="Telefone"
            placeholder="Telefone"
            InputLabelProps={{ shrink: true }}
          />

          <Select
            labelId="demo-multiple-name-label"
            className="demo-multiple-name"
            value={userData.profile}
            onChange={handleChange}
            name="profile"
            displayEmpty
            renderValue={
              userData.profile === ''
                ? () => <CustomPlaceholder>Tipo de perfil</CustomPlaceholder>
                : undefined
            }
          >
            {PROFILES.map((item: string) => (
              <MenuItem key={`${item}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>

          <Select
            labelId="demo-multiple-name-label"
            className="demo-multiple-name"
            value={userData.status}
            onChange={handleChange}
            name="status"
            displayEmpty
            renderValue={
              userData.status === ''
                ? () => <CustomPlaceholder>Status</CustomPlaceholder>
                : undefined
            }
          >
            <MenuItem value="deafult" disabled hidden>
              status
            </MenuItem>
            {STATUS.map((item: string) => (
              <MenuItem key={`${item}`} value={item} disabled>
                {item}
              </MenuItem>
            ))}
          </Select>

          <div className="divis-br">
            <p>Usuario</p>
            <hr />
          </div>
          <TextField
            name="password"
            value={userData.password}
            className="password-field"
            type="password"
            error={errorMsg.field === 'password'}
            helperText={errorMsg.field === 'password' && errorMsg.msg}
            onChange={handleChange}
            label="Senha"
            placeholder="Senha"
            InputLabelProps={{ shrink: true }}
          />
        </FormContainer>
      </DialogContent>

      <DialogActions>
        <LoadingButton
          sx={{ textTransform: 'none' }}
          variant="contained"
          onClick={saveChanges}
          loading={loading}
        >
          Guardar alterações
        </LoadingButton>
        {/* <Button
          sx={{ textTransform: 'none' }}
          type="button"
          onClick={saveChanges}
        >
          Guardar alterações
        </Button> */}
      </DialogActions>
    </CustomDialog>
  );
};

export default DialogEditAndAddUser;
