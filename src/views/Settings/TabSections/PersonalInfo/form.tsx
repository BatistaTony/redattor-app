/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { FC, FormEvent, useState, useEffect } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { holes } from '@utils/holes';
import { updateUserInfo } from '@services/user/updateUserInfo';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast, ToastContainer } from 'react-toastify';
import CustomField from '../customTextField';
import { INITIAL_DATA, UpdateUserForm } from '../../types';
import CustomAutocomplete from './customAutoComplete';
import { profileOptions } from './utils';

const PersonalInfoForm: FC<{
  inCommingData?: UpdateUserForm;
  userId: number;
}> = ({ inCommingData, userId }) => {
  const { palette } = useTheme();
  const [disabledButton, setDisabledBUtton] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<UpdateUserForm>();
  const [validationErrors, setValidationErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  })

  const { colors } = palette;
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if(data?.email === inCommingData?.email && 
      data?.firstName === inCommingData?.firstName && 
      data?.lastName === inCommingData?.lastName && 
      data?.phone === inCommingData?.phone) {
      setDisabledBUtton(true);

      setIsLoading(false);
      return
    }

    const objFormat = {
      email: data.email,
      fullname: `${data.firstName} ${data.lastName}`,
      password: data.password as string,
      phone: data.phone,
      userType: data?.profile,
    };

    if(!data?.firstName || data?.lastName || data?.email || data?.phone){
      if(!data?.firstName || data?.firstName.length < 2) {
          setValidationErrors(prev => ({
            ...prev, firstName: true
        }))
        setIsLoading(false);
        return
      }
      
      if(!data?.lastName || data?.lastName.length < 2) {
        setValidationErrors(prev => ({
          ...prev, lastName: true
        }))
        setIsLoading(false);
        return
      }
      if(!data?.phone || data?.phone.length !== 9) {
        setValidationErrors(prev => ({
          ...prev, phone: true
        }))
        setIsLoading(false);
        return
      }

      if(!data?.email || !data?.email.includes("@")) {
        setValidationErrors(prev => ({
          ...prev, email: true
        }))        
        setIsLoading(false);
        return
      }
    }

    const { status } = await updateUserInfo(objFormat, userId);

    if (status === 200) {
      setData({ currentPassword: '', newPassword: '', confirmPassword: '' });

      toast.success('Informação de usuário alterada com sucesso!');
    } else {
      toast.error(
        'Ocorreu algum erro, verifique o formulario e tente novamente',
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setData(inCommingData as any);
  }, [inCommingData]);

  return (
    <>
      <ToastContainer position="top-right" />
      <Box
        component="form"
        display="grid"
        style={{ gridTemplateColumns: '1fr 1fr', gap: '30px' }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <CustomField
          style={{ width: '100%' }}
          isLoading={!inCommingData?.firstName}
          label="Nome"
          name="firstName"
          defaultValue={inCommingData?.firstName}
          onChange={(e) =>{
            setData((prev) => ({ ...prev, firstName: e.target.value } as any))
            setValidationErrors(prev => ({
              ...prev, firstName: false
            }))
            
            setDisabledBUtton(e.target.value === inCommingData?.firstName);
          }}
          error={validationErrors.firstName}
          helperText={validationErrors.firstName && "Este campo é obrigatório, e deve ter pelo menos 2 caracteres"}
        />
        <CustomField
          isLoading={!inCommingData?.lastName}
          style={{ width: '100%' }}
          label="Sobrenome"
          defaultValue={inCommingData?.lastName}
          onChange={(e) =>{
            setData((prev) => ({ ...prev, lastName: e.target.value } as any))
            setValidationErrors(prev => ({
              ...prev, lastName: false
            }))
            setDisabledBUtton(e.target.value === inCommingData?.lastName);
          }}
          error={validationErrors.lastName}
          helperText={validationErrors.lastName && "Este campo é obrigatório, e deve ter pelo menos 2 caracteres"}
        />

        <CustomField
          isLoading={!inCommingData?.email}
          style={{ width: '100%' }}
          label="Email"
          type="email"
          defaultValue={inCommingData?.email}
          onChange={(e) =>{
            setData((prev) => ({ ...prev, email: e.target.value } as any))
            setValidationErrors(prev => ({
              ...prev, email: false
            }))
            setDisabledBUtton(e.target.value === inCommingData?.email);
          }}
          error={validationErrors.email}
          helperText={validationErrors.email && "Este campo é obrigatório, e deve ser um email válido"}
        />
        <CustomField
          isLoading={!inCommingData?.phone}
          style={{ width: '100%' }}
          label="Telefone"
          defaultValue={inCommingData?.phone}
          onChange={(e) =>{
            setData((prev) => ({ ...prev, phone: e.target.value } as any))
            setValidationErrors(prev => ({
              ...prev, phone: false
            }))
            setDisabledBUtton(e.target.value === inCommingData?.phone);
          }}
          type="number"
          error={validationErrors.phone}
          helperText={validationErrors.phone && "Este campo é obrigatório, e deve ter 9 caracteres"}
        />

        <CustomAutocomplete
          options={profileOptions()}
          isLoading={!inCommingData?.profile}
          label="Perfil"
          value={holes[inCommingData?.profile as unknown as any]}
          disabled
          onChange={(e) =>
            setData((prev) => ({ ...prev, profile: e.target.value } as any))
          }
        />
        <CustomField
          isLoading={!inCommingData?.status}
          style={{ width: '100%' }}
          label="Estado"
          disabled
          defaultValue={
            inCommingData?.status === 'activated' ? 'Activo' : 'Desativado'
          }
          onChange={(e) =>
            setData((prev) => ({ ...prev, status: e.target.value } as any))
          }
        />

        <div />
        <Box
          display="flex"
          width="100%"
          justifyContent="flex-end"
          marginTop="50px"
        >
          <LoadingButton
            variant="contained"
            disabled={disabledButton}
            size="large"
            style={{ alignSelf: 'flex-end' }}
            type="submit"
            loading={isLoading}
          >
            Guardar alterações
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default PersonalInfoForm;
