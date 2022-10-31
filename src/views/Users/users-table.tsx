/* eslint-disable @next/next/no-img-element */

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { User } from 'typescript/user';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DialogEditAndAddUser from '@components/template/CustomModal/modal-edit-add';
import { TablePaper } from './styles';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  { id: 'firstName', label: 'Nome', minWidth: 200 },
  { id: 'profile', label: 'Perfil', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 200 },
  { id: 'phone', label: 'Telefone', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 80 },
];

interface UsersTableProps {
  users: User[];
}

const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [editData, setEditData] = useState<User | null>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOnSaveUser = async (data: User) => {
    const userFound = users.findIndex((user: User) => user.id === data.id);

    if (userFound >= 0) {
      const user = users[userFound];
      const newArray = [...users];

      newArray[userFound] = {
        ...user,
      };

      // TODO UPDATE THE TABLE USERS
      // onUpdateUser()

      setEditData(null);

      return true;
    }
    return false;
  };

  const cancelCustomDialog = () => {
    setEditData(null);
  };

  return (
    <TablePaper>
      <TableContainer
        sx={{
          height: '54vh',
          overflowY: 'auto',
          width: '100%',
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column: Column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row: User) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column: Column) => {
                  const value = row[column.id as keyof User];
                  return column.id === 'firstName' ? (
                    <TableCell key={column.id}>
                      <div className="user-name">
                        <img
                          className="user-avatar"
                          src={row.picture}
                          alt={row.picture}
                        />

                        {value}
                      </div>
                    </TableCell>
                  ) : (
                    <TableCell key={column.id}>{value}</TableCell>
                  );
                })}
                <TableCell>
                  <button
                    className="btn-edit"
                    onClick={() => setEditData(row)}
                    type="button"
                  >
                    <ModeEditOutlineOutlinedIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {editData !== null && (
        <DialogEditAndAddUser
          changeType="edit"
          data={editData}
          openModal={editData !== null}
          cancel={cancelCustomDialog}
          handleOnSave={handleOnSaveUser}
        />
      )}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TablePaper>
  );
};

export default UsersTable;
