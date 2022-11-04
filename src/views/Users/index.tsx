import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Head from 'next/head';
import DialogEditAndAddUser from '@components/template/CustomModal/modal-edit-add';
import {
  User,
  UserProfile,
  UserProfileApi,
  UserStatus,
  UserStatusApi,
  UserType,
} from 'typescript/user';
import { STATUS, PROFILES } from '@constants/user';
import CustomPlaceholder from '@components/atoms/CustomPlaceholder';
import { getUsers } from '@services/users/get-users';
import { createUser } from '@services/users/create-user';
import { updateUser } from '@services/users/update-user';
import { toast } from 'react-toastify';
import {
  UsersManagementContainer,
  UsersManagementEstatistica,
  UsersManagementEstatisticaCard,
  UsersManagementFilter,
  UsersManagementHeader,
  UsersManagementHeaderTitle,
} from './styles';
import UsersTable from './users-table';

const UserManagement: FC<{ title: string }> = ({ title }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState({
    search: '',
    status: '',
    profile: '',
  });
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [editData, setEditData] = useState<User | null>(null);
  const [usersStatistic, setUsersStatistic] = useState({
    colunistas: 0,
    validadores: 0,
    administradores: 0,
  });
  const [loadingTableData, setLoadingTableData] = useState(false);

  const [showUserDialog, setShowUserDialog] = useState(false);

  const handleChange = (event: SelectChangeEvent | ChangeEvent) => {
    const { target } = event;

    setFilter({
      ...filter,
      [target.name]: (target as HTMLInputElement).value,
    });
  };

  const cancelCustomDialog = () => {
    setShowUserDialog(false);
  };

  const handleGetUsers = async () => {
    setLoadingTableData(true);

    const status = UserStatusApi[filter.status as keyof typeof UserStatusApi];
    const userType =
      UserProfileApi[filter.profile as keyof typeof UserProfileApi];

    const response = await getUsers({
      name: filter.search,
      page,
      status,
      userType,
    });

    const jsonResponse: UserType[] = await response.json();

    const { data, pages, totalItems } = jsonResponse as any;

    setTotal(totalItems);

    const result = data?.map((user: UserType) => {
      const fullNameArray = user.fullname.split(' ');

      const lastName = fullNameArray.pop();
      const firstName = fullNameArray.join(' ');

      return {
        email: user.email,
        firstName,
        lastName,
        id: user.id,
        phone: user.phone,
        picture: user.profileImage || '',
        profile: UserProfile[user.userType as keyof typeof UserProfile],
        status: UserStatus[user.status as keyof typeof UserStatus],
      };
    });

    console.log('result ==> ', result);

    setUsers(result);

    setLoadingTableData(false);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleOnSaveUser = async (data: User) => {
    const objFormat = {
      email: data.email,
      fullname: `${data.firstName} ${data.lastName}`,
      password: data.password as string,
      phone: data.phone,
      userType: UserProfileApi[data.profile as keyof typeof UserProfileApi],
    };

    const response = await createUser(objFormat);

    if (response === 'failed') {
      toast.error(
        'Ocorreu algum erro, verifique o formulario e tente novamente ',
      );

      return false;
    }
    const user = response.data;

    if (response === 400) {
      toast.error('Utilizador já existe com este numero de telefone');
      return false;
    }

    const userSaved = {
      email: user.email,
      firstName: data.firstName,
      lastName: data.lastName,
      id: user.id,
      phone: user.phone,
      picture: user.profileImage || '',
      profile: UserProfile[user.userType as keyof typeof UserProfile],
    };

    const oldState = [...users, userSaved];

    setUsers(oldState as any);

    return true;
  };

  const getStatistic = async () => {
    const respAdmins = await getUsers({
      userType: 'admin',
    });

    const respValidators = await getUsers({
      userType: 'validator',
    });

    const respColumnist = await getUsers({
      userType: 'columnist',
    });

    const vals = await respValidators.json();
    const cols = await respColumnist.json();
    const admins = await respAdmins.json();

    setUsersStatistic({
      administradores: admins.totalItems || 0,
      colunistas: cols.totalItems || 0,
      validadores: vals.totalItems || 0,
    });
  };

  const handleOnSaveUserEditedUser = async (data: User) => {
    const objFormat = {
      id: data.id,
      email: data.email,
      fullname: `${data.firstName} ${data.lastName}`,
      password: data.password as string,
      phone: data.phone,
      userType: UserProfileApi[data.profile as keyof typeof UserProfileApi],
    };

    const response = await updateUser(objFormat);

    if (response === 'failed') {
      toast.error(
        'Ocorreu algum erro, verifique o formulario e tente novamente ',
      );
      return false;
    }

    const userFound = users.findIndex((user: User) => user.id === data.id);
    const copyUsers = [...users];

    if (userFound >= 0) {
      copyUsers[userFound] = {
        ...data,
      };

      setUsers(copyUsers);
    }

    return true;
  };

  useEffect(() => {
    handleGetUsers();
  }, [page, filter]);

  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    getStatistic();
  }, [users]);

  return (
    <UsersManagementContainer>
      <Head>
        <title>{title} | E-Redator</title>
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
            <div className="number-usr">{usersStatistic.administradores}</div>
            <Typography variant="h5">Administradores</Typography>
          </UsersManagementEstatisticaCard>
          <UsersManagementEstatisticaCard>
            <div className="number-usr">{usersStatistic.validadores}</div>
            <Typography variant="h5">Validadores</Typography>
          </UsersManagementEstatisticaCard>
          <UsersManagementEstatisticaCard>
            <div className="number-usr">{usersStatistic.colunistas}</div>
            <Typography variant="h5">Colunistas</Typography>
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
            <MenuItem value="">Todos</MenuItem>
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
            <MenuItem value="">Todos</MenuItem>
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
      <UsersTable
        loading={loadingTableData}
        users={users}
        editData={editData}
        handleChangePage={handleChangePage}
        handleOnSaveUser={handleOnSaveUserEditedUser}
        page={page}
        rowsPerPage={rowsPerPage}
        total={total}
        setEditData={(state: User | null) => setEditData(state)}
      />
    </UsersManagementContainer>
  );
};

export default UserManagement;
