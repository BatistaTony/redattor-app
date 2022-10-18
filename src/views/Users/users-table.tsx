import Paper from '@mui/material/Paper';
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
import { TablePaper } from './styles';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nome', minWidth: 200 },
  { id: 'profile', label: 'Perfil', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 200 },
  { id: 'phone', label: 'Telefone', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 80 },
];

const UsersTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [rows, setRows] = useState<User[]>([
    {
      email: 'batista@email.com',
      name: 'Batista Oliveira',
      id: 'test10',
      phone: '+244941551087',
      profile: 'Administrador',
      status: 'Activo',
    },
    {
      email: 'batista@email.com',
      name: 'Batista Oliveira',
      id: 'test15',
      phone: '+244941551087',
      profile: 'Validador',
      status: 'Activo',
    },
    {
      email: 'batista@email.com',
      name: 'Batista Oliveira',
      id: 'test12',
      phone: '+244941551087',
      profile: 'Validador',
      status: 'Activo',
    },
    {
      email: 'batista@email.com',
      name: 'Batista Oliveira',
      id: 'test11',
      phone: '+244941551087',
      profile: 'Colunista',
      status: 'Activo',
    },
    {
      email: 'batista@email.com',
      name: 'Batista Oliveira',
      id: 'test1054',
      phone: '+244941551087',
      profile: 'Administrador',
      status: 'Activo',
    },
    {
      email: 'batista@email.com',
      name: 'Batista Oliveira',
      id: 'te4354st15',
      phone: '+244941551087',
      profile: 'Validador',
      status: 'Activo',
    },
  ]);
  const [total, setTotal] = useState<number>(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TablePaper>
      <TableContainer
        sx={{
          height: '65vh',
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
            {rows.map((row: User) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column: Column) => {
                  const value = row[column.id as any];
                  return <TableCell key={column.id}>{value}</TableCell>;
                })}
                <TableCell>
                  <button className="btn-edit" type="button">
                    <ModeEditOutlineOutlinedIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
