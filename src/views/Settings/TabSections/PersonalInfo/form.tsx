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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<UpdateUserForm>();

  const { colors } = palette;
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const objFormat = {
      email: data.email,
      fullname: `${data.firstName} ${data.lastName}`,
      password: data.password as string,
      phone: data.phone,
      // userType: UserProfileApi[data.profile as keyof typeof UserProfileApi],
      userType: data?.profile,
    };

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
          onChange={(e) =>
            setData((prev) => ({ ...prev, firstName: e.target.value } as any))
          }
        />
        <CustomField
          isLoading={!inCommingData?.lastName}
          style={{ width: '100%' }}
          label="Sobrenome"
          defaultValue={inCommingData?.lastName}
          onChange={(e) =>
            setData((prev) => ({ ...prev, lastName: e.target.value } as any))
          }
        />

        <CustomField
          isLoading={!inCommingData?.email}
          style={{ width: '100%' }}
          label="Email"
          defaultValue={inCommingData?.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value } as any))
          }
        />
        <CustomField
          isLoading={!inCommingData?.phone}
          style={{ width: '100%' }}
          label="Telefone"
          defaultValue={inCommingData?.phone}
          onChange={(e) =>
            setData((prev) => ({ ...prev, phone: e.target.value } as any))
          }
        />

        <CustomAutocomplete
          options={profileOptions()}
          isLoading={!inCommingData?.profile}
          label="Perfil"
          value={holes[inCommingData?.profile as unknown as any]}
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
