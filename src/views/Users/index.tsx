import { OutlinedInput, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Head from 'next/head';
import {
  UsersManagementContainer,
  UsersManagementEstatistica,
  UsersManagementEstatisticaCard,
  UsersManagementFilter,
  UsersManagementHeader,
  UsersManagementHeaderTitle,
} from './styles';
import UsersTable from './users-table';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const UserManagement = () => {
  const [filter, setFilter] = useState({
    search: '',
    status: '',
    profile: '',
  });

  const handleChange = (event: SelectChangeEvent | ChangeEvent) => {
    const { target } = event;

    setFilter({
      ...filter,
      [target.name]: (target as HTMLInputElement).value,
    });
  };

  return (
    <UsersManagementContainer>
      <Head>
        <link
          href="http://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
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
          >
            {names.map((item: string) => (
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
          >
            {names.map((item: string) => (
              <MenuItem key={`${item}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>
        <Button
          sx={{ textTransform: 'none' }}
          startIcon={<PersonAddIcon />}
          variant="contained"
        >
          Novo utilizador
        </Button>
      </UsersManagementFilter>
      <UsersTable />
    </UsersManagementContainer>
  );
};

export default UserManagement;
