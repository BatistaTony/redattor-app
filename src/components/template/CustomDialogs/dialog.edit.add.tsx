/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Container,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useDropzone } from 'react-dropzone';
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

const DialogEditAndAddUser: React.FC<DialogEditAndAddProductProps> = ({
  changeType,
  openModal,
  data,
  handleOnSave,
  cancel,
}) => {
  const [userData, setUserData] = useState<UserExt>(INITIAL_STATE);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (changeType === 'edit') {
      if (data) {
        setUserData({ ...data, password: '' });
      }
    }
  }, []);

  const handleChange = (event: ChangeEvent | SelectChangeEvent) => {
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

  const saveChanges = () => {
    handleOnSave(userData);
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
          <div {...getRootProps({ type: 'button', className: 'drop-zone' })}>
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
            label="Nome"
            onChange={handleChange}
          />
          <TextField
            value={userData.lastName}
            name="lastName"
            label="Sobrenome"
            onChange={handleChange}
          />
          <TextField
            value={userData.email}
            name="email"
            className="email-field"
            label="Email"
            onChange={handleChange}
          />
          <TextField
            value={userData.phone}
            name="phone"
            className="phone-field"
            label="Telefone"
            onChange={handleChange}
          />

          <TextField
            select
            className="demo-multiple-name"
            value={userData.profile}
            onChange={handleChange}
            name="profile"
            label="Tipo de Perfil"
            placeholder="Tipo de perfil"
          >
            {PROFILES.map((item: string) => (
              <MenuItem key={`${item}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className="demo-multiple-name"
            value={userData.status}
            name="status"
            onChange={handleChange}
            placeholder="Status"
            label="Status"
            select
          >
            {STATUS.map((item: string) => (
              <MenuItem key={`${item}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>

          <div className="divis-br">
            <p>Usuario</p>
            <hr />
          </div>
          <TextField
            name="password"
            value={userData.password}
            className="password-field"
            type="password"
            label="Senha"
            onChange={handleChange}
          />
        </FormContainer>
      </DialogContent>

      <DialogActions>
        <Button
          sx={{ textTransform: 'none' }}
          type="button"
          onClick={saveChanges}
        >
          Guardar alterações
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default DialogEditAndAddUser;
