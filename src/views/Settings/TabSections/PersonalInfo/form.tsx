/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { FC, FormEvent, useState, useEffect } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { holes } from '@utils/holes';
import CustomField from '../customTextField';
import { INITIAL_DATA, UpdateUserForm } from '../../types';
import CustomAutocomplete from './customAutoComplete';
import { profileOptions } from './utils';

const PersonalInfoForm: FC<{ inCommingData?: UpdateUserForm }> = ({
  inCommingData,
}) => {
  const { palette } = useTheme();
  const [data, setData] = useState<UpdateUserForm>();

  const { colors } = palette;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(data);
  };

  useEffect(() => {
    setData(inCommingData as any);
  }, [inCommingData]);

  return (
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
        onChange={e =>
          setData(prev => ({ ...prev, firstName: e.target.value } as any))
        }
      />
      <CustomField
        isLoading={!inCommingData?.lastName}
        style={{ width: '100%' }}
        label="Sobrenome"
        defaultValue={inCommingData?.lastName}
        onChange={e =>
          setData(prev => ({ ...prev, lastName: e.target.value } as any))
        }
      />

      <CustomField
        isLoading={!inCommingData?.email}
        style={{ width: '100%' }}
        label="Email"
        defaultValue={inCommingData?.email}
        onChange={e =>
          setData(prev => ({ ...prev, email: e.target.value } as any))
        }
      />
      <CustomField
        isLoading={!inCommingData?.phone}
        style={{ width: '100%' }}
        label="Telefone"
        defaultValue={inCommingData?.phone}
        onChange={e =>
          setData(prev => ({ ...prev, phone: e.target.value } as any))
        }
      />

      <CustomAutocomplete
        options={profileOptions()}
        isLoading={!inCommingData?.profile}
        label="Perfil"
        value={holes[inCommingData?.profile as unknown as any]}
        onChange={e =>
          setData(prev => ({ ...prev, profile: e.target.value } as any))
        }
      />
      <CustomField
        isLoading={!inCommingData?.status}
        style={{ width: '100%' }}
        label="Estado"
        defaultValue={inCommingData?.status}
        onChange={e =>
          setData(prev => ({ ...prev, status: e.target.value } as any))
        }
      />

      <div />
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-end"
        marginTop="50px"
      >
        <Button
          variant="contained"
          size="large"
          style={{ alignSelf: 'flex-end' }}
          type="submit"
        >
          Guardar alterações
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
