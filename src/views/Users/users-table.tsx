/* eslint-disable @next/next/no-img-element */

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, FC } from 'react';
import { User, UserProfile, UserStatus } from 'typescript/user';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DialogEditAndAddUser from '@components/template/CustomModal/modal-edit-add';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Typography } from '@mui/material';
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
  page: number;
  rowsPerPage: number;
  total: number;
  editData: User | null;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleOnSaveUser: (data: User) => Promise<boolean>;
  setEditData: (data: User | null) => void;
  loading: boolean;
}

const UsersTable: FC<UsersTableProps> = ({
  users,
  editData,
  page,
  rowsPerPage,
  total,
  handleChangePage,
  handleOnSaveUser,
  setEditData,
  loading,
}) => (
  <TablePaper>
    <TableContainer
      className="table-container"
      sx={{
        position: 'relative',
        height: '54vh',
        overflowY: 'auto',
        width: '100%',
      }}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column: Column) => (
              <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        {!loading && users?.length > 0 ? (
          <TableBody>
            {users?.map((row: User) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column: Column) => {
                  const value = row[column.id as keyof User];
                  return column.id === 'firstName' ? (
                    <TableCell key={column.id}>
                      <div className="user-name">
                        {row.picture ? (
                          <img
                            className="user-avatar"
                            src={row.picture}
                            alt={row.picture}
                          />
                        ) : (
                          <PersonOutlinedIcon className="user-avatar" />
                        )}

                        {`${row.firstName} ${row.lastName}  `}
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
        ) : (
          <Typography
            style={{
              width: '100%',
              marginTop: '50px',
              position: 'absolute',
              textAlign: 'center',
              fontSize: '20px',
            }}
          >
            {!loading && users?.length === 0
              ? 'Utilizadores não encontrados'
              : 'loading...'}
          </Typography>
        )}
      </Table>
    </TableContainer>
    {editData !== null && (
      <DialogEditAndAddUser
        changeType="edit"
        data={editData}
        openModal={editData !== null}
        cancel={() => setEditData(null)}
        handleOnSave={handleOnSaveUser}
      />
    )}
    {total > 10 && (
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    )}
  </TablePaper>
);

export default UsersTable;
