import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, FC, useState } from 'react';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Head from 'next/head';
import DialogEditAndAddUser from '@components/template/CustomModal/modal-edit-add';
import { User } from 'typescript/user';
import { STATUS, PROFILES } from '@constants/user';
import CustomPlaceholder from '@components/atoms/CustomPlaceholder';
import {
  UsersManagementContainer,
  UsersManagementEstatistica,
  UsersManagementEstatisticaCard,
  UsersManagementFilter,
  UsersManagementHeader,
  UsersManagementHeaderTitle,
} from './styles';
import UsersTable from './users-table';
import { dataExample } from './exampleData';

const UserManagement: FC<{ title: string }> = ({ title }) => {
  const [users, setUsers] = useState<User[]>([...dataExample]);
  const [filter, setFilter] = useState({
    search: '',
    status: '',
    profile: '',
  });

  const [showUserDialog, setShowUserDialog] = useState(false);

  const handleChange = (event: SelectChangeEvent | ChangeEvent) => {
    const { target } = event;

    setFilter({
      ...filter,
      [target.name]: (target as HTMLInputElement).value,
    });
  };

  const handleOnSaveUser = async (data: User) => {
    const id = `${users.length + 1}`;

    const userObj = {
      ...data,
      id,
    };

    const newArray = [...users, userObj];

    setUsers(newArray);

    return true;
  };

  const cancelCustomDialog = () => {
    setShowUserDialog(false);
  };

  return (
    <UsersManagementContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <UsersManagementHeader>
        <UsersManagementHeaderTitle>
          <Typography variant="h1">Gestão de utilizadores</Typography>
          <Typography variant="subtitle1">
            Visualize, edite e adicione novos utilizadores ao sistema
          </Typography>
        </UsersManagementHeaderTitle>

        <UsersManagementEstatistica>
          <UsersManagementEstatisticaCard>
            <div className="number-usr">20</div>
            <Typography variant="h5">Gestão de utilizadores</Typography>
          </UsersManagementEstatisticaCard>
          <UsersManagementEstatisticaCard>
            <div className="number-usr">20</div>
            <Typography variant="h5">Gestão de utilizadores</Typography>
          </UsersManagementEstatisticaCard>
          <UsersManagementEstatisticaCard>
            <div className="number-usr">20</div>
            <Typography variant="h5">Gestão de utilizadores</Typography>
          </UsersManagementEstatisticaCard>
        </UsersManagementEstatistica>
      </UsersManagementHeader>
      <UsersManagementFilter>
        <div className="filter-fields">
          <TextField
            className="input-with-icon-textfield"
            placeholder="Pesquise pelo nome dos utilizadores"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={filter.search}
            onChange={handleChange}
            name="search"
            variant="outlined"
          />

          <Select
            labelId="demo-multiple-name-label"
            className="demo-multiple-name"
            value={filter.profile}
            onChange={handleChange}
            name="profile"
            placeholder="Tipo de perfil"
            displayEmpty
            renderValue={
              filter.profile === ''
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
            value={filter.status}
            name="status"
            onChange={handleChange}
            placeholder="Status"
            displayEmpty
            renderValue={
              filter.status === ''
                ? () => <CustomPlaceholder>Status</CustomPlaceholder>
                : undefined
            }
          >
            {STATUS.map((item: string) => (
              <MenuItem key={`${item}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>
        <Button
          sx={{ textTransform: 'none' }}
          startIcon={<PersonAddIcon />}
          onClick={() => setShowUserDialog(true)}
          variant="contained"
        >
          Novo utilizador
        </Button>
      </UsersManagementFilter>
      {showUserDialog && (
        <DialogEditAndAddUser
          changeType="add"
          data={undefined}
          openModal={showUserDialog}
          cancel={cancelCustomDialog}
          handleOnSave={handleOnSaveUser}
        />
      )}
      <UsersTable users={users} />
    </UsersManagementContainer>
  );
};

export default UserManagement;
