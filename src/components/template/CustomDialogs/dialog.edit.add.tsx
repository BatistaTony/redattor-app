import {
  Button,
  Container,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useState, useEffect, ChangeEvent } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { User } from 'typescript/user';
import { CustomDialog, FormContainer } from './styles';

interface DialogEditAndAddProductProps {
  changeType: 'edit' | 'add';
  openModal: boolean;
  data: User[] | undefined;
  cancel: () => void;
  handleOnSave: (data: User) => Promise<void>;
}

const DialogEditAndAddUser: React.FC<DialogEditAndAddProductProps> = ({
  changeType,
  openModal,
  data,
  handleOnSave,
  cancel,
}) => {
  const [productData, setProductData] = useState<User | null>(null);
  const [showError, setShowError] = useState(false);

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
  };

  const saveChanges = () => {
    console.log('');
  };

  return (
    <CustomDialog
      open={openModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="icon-edit">
          <PersonAddAltOutlinedIcon />
        </div>
        <p>
          {changeType === 'edit'
            ? 'Actualizar Product'
            : 'Adicionar novo utilizador'}
        </p>

        <button type="button" className="btn-close-modal">
          <CloseIcon />
        </button>
      </DialogTitle>
      <DialogContent style={{ height: '550px', width: '500px' }}>
        <Container className="img-sttng">
          <div className="icon-user">
            <PersonOutlinedIcon />
          </div>
          <button type="button" className="drop-zone">
            <AddAPhotoOutlinedIcon />
            <p>Carregar image</p>
          </button>
        </Container>
        <FormContainer>
          <TextField variant="outlined" label="Nome" />
          <TextField label="Sobrenome" />
          <TextField className="email-field" label="Email" />
          <TextField className="phone-field" label="Telefone" />
          <TextField label="Perfil" />
          <TextField label="Status" />
          <div className="divis-br">
            <p>Usuario</p>
            <hr />
          </div>
          <TextField className="password-field" label="Senha" />
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
