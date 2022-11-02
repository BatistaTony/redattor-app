import { Box } from '@mui/material';
import { updatePassword } from '@services/user/updatePassword';
import { FC, FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toast';
import LoadingButton from '@mui/lab/LoadingButton';
import CustomField from '../customTextField';

const SecurityForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [validators, setValidators] = useState({
    currentMustBeGreaterThan8: false,
    newMustBeGreaterThan8: false,
    mustBeEquals: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      data.newPassword.length < 8 ||
      (data.confirmPassword.length < 8 && data.currentPassword.length < 8)
    ) {
      setValidators(prev => ({
        ...prev,
        newMustBeGreaterThan8: true,
        currentMustBeGreaterThan8: true,
      }));

      setIsLoading(false);

      return;
    }

    if (data.newPassword.length < 8 || data.confirmPassword.length < 8) {
      setValidators(prev => ({ ...prev, newMustBeGreaterThan8: true }));

      setIsLoading(false);
      return;
    }

    if (data.newPassword !== data.confirmPassword) {
      setValidators(prev => ({ ...prev, mustBeEquals: true }));

      setIsLoading(false);

      return;
    }

    const { status } = await updatePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });

    if (status === 200) {
      setData({ currentPassword: '', newPassword: '', confirmPassword: '' });

      toast.success('Palavra passe alterada com sucesso!');
    } else {
      toast.error(
        'Ocorreu algum erro, verifique o formulario e tente novamente',
      );
    }

    setIsLoading(false);
  };

  const currentErrorText =
    validators.currentMustBeGreaterThan8 &&
    (validators.currentMustBeGreaterThan8
      ? 'A palavra passe não pode ser vazia, e deve ter mais de 7 caracteres'
      : 'Este campo é obgigatório');

  const newPassErrorText =
    (validators.newMustBeGreaterThan8 || validators.mustBeEquals) &&
    (validators.mustBeEquals
      ? 'As Palavras passes devem ser iguais'
      : 'A palavra passe não pode ser vazia, e deve ter mais de 7 caracteres');

  return (
    <>
      <ToastContainer position="top-right" />
      <Box
        component="form"
        display="grid"
        style={{ gridTemplateRows: '1fr 1fr', gap: '30px' }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <CustomField
          isLoading={false}
          style={{ width: '100%' }}
          label="Senha antiga"
          type="password"
          defaultValue={data.currentPassword}
          onChange={e =>
            setData(prev => ({ ...prev, currentPassword: e.target.value }))
          }
          error={validators.currentMustBeGreaterThan8}
          helperText={currentErrorText}
        />

        <Box style={{ width: '100%' }}>
          <CustomField
            isLoading={false}
            style={{ width: 'calc(50% - 15px)', marginRight: '30px' }}
            label="Nova senha"
            type="password"
            onChange={e =>
              setData(prev => ({ ...prev, newPassword: e.target.value }))
            }
            error={validators.newMustBeGreaterThan8 || validators.mustBeEquals}
            helperText={newPassErrorText}
          />
          <CustomField
            isLoading={false}
            style={{ width: 'calc(50% - 15px)' }}
            label="Confirmar senha"
            type="password"
            onChange={e =>
              setData(prev => ({ ...prev, confirmPassword: e.target.value }))
            }
            error={validators.newMustBeGreaterThan8 || validators.mustBeEquals}
            helperText={newPassErrorText}
          />
        </Box>

        <Box display="flex" justifyContent="flex-end" marginTop="50px">
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

export default SecurityForm;
