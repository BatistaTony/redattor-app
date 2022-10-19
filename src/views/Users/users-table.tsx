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
import DialogEditAndAddUser from '@components/template/CustomDialog/dialog.edit.add';
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
    console.log(data);

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
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABOFBMVEWu3uT3z7OMUjMVFRX////wv6EhISEAAADpr495RyyPVDT40rZ8SS32zLCw4eet4ejzxqmFTjAbGxvfm3kLCwvbkm9bOCHGYzlmPiXjo4Hst5jJakJxRClNMRzQeVJVNR9WMBfEXTHw8PCWclun0ta5kHfUg184IhPhrpvc3d6wsLBGRkZTU1PGxsabm5uHSyras5iWtbVwPR6yyciRal3VnYbHWSe4rKH47Oi1urSTvMErKyt5eXlra2uLi4ttb2ZhWEtiNRh2gHtUKQWHm5hSPy19jYqFW0KpemDKoIVDIgNyVUGmhnBmRTCAYEpnZFi2mou/c0/Ah3DeycFTGQBKJBSQRid3Nhzy3NNHEQBjHgAuDgB2X1TkvKyajoekh32dZEipVi/Ae2HPuKg0REZRaGtifYBDVli6XR7mAAAO3UlEQVR4nLWbCV/aSBvA5QgJuUwIgVwk4UpFxaJsUattpdpu8Wp1t9W3b+nuWrf9/t/gfWYmHIFEE+F9fl3lmMz889wzcVdWokVsVEoa/MvLaSyyVXLyWom8zluW5otlWTCETYeJ+6YhPrDEY9I4ckvW9NxsWnMqmIfXHMcpYYCSUyqV4J3Gh2L0jxZgWH17zM9OymollhAgtomkZd4qVUpWCET/6OkEJ8fy/IQOj6xQcua/Ag4g0/jZL9j+myeqQWy4+XkC2QE7sKVSiNXxcnK+pMmzn7pvn8jwph+yhlyCBawoAkzBa9oMuny8/RQGcft0SsNpmQggpFnLCXf+KYigNVj53VNcUvy4408jW1oJ+3zJyvO8xWJbPCIWH4R6ijuI2w65ms/nYWEQyAMO5AieLVnjW5wExKwi5CBD2j1JzDBSwtQNo4VQOhg5AgQA0U9Js/j5AAmqSq4k1kLjOFzbrGw5eV/ZpYqj+ckJXvGh48fSf59QDeJJWDj4N5/nEUrJ0fLISsRQlgYUIWlkIpWkHjl2xgjJVzS0MokTPo91Uak8AMHufEyEAPXpQQA2XxmVLhYM4jjYJcAelbAMTUR2EiUH8eT4QSXw/edIkD2gkkKZxCEDdgG3mEvQYzUcJUFYDbUDij7Q+s7vH5odkMGHtKyhSjq+TyDJa5X5BO1LkhwpNt5NphmxQCm0+q7r1DsSx3GpVIrjOhCLo6+RTjBGvhJSwoga3iSww/Y49qHuaCXXdU9PnbN6/bw5EPDyRLixpDqdprwj4/qd1sAjQhmOX8ZWg/i+T+4D52at0hwMJEkQ8JqpCOE4aVA/u3Bc1+ItRwtFSJCm/dQoQ0sGkaddUpQQtXKQQgAPaV5euG64MRJUK/EUuUJew3nHcgaUFIeAYCBNdZq/VU5DIoPtx60UYvc4jeoTzn18Ka4SAiDS+UU+RA1x0xPOzuBaJP1WBskREEXnYt4h5OO4CG+xK7BYCcgT4tshoIlLd84hjhvxEFY+kqqHlXD6NCUgEc6d2e4zblg2jnCakVHCdS4oinoaAShicDpTuGIiiC9d0q1Asi1Vzp9oB8Ig1U9hL0bazgSGELdJjbJgJ5cvdRZBAOnULy816KtIfMR0Rz83Wqgj0S6lJ7sCEYGSOqiKYq+Q38VEeAMBIUM/CPHgNqmFEajmDgotbNuY9Vo84qFD5GV0ndNZwBvHCP0RQtzOCVVqGW3NIDlfGIsipCiq7oIlkDuyO/F2dlCpyfYdELQ6taA3YoSKA56dDCHtIxBXWBBBAi1YSOTYZUrcJs0ClCkLpcYlIGhwOygzJEfQnFNq0YBACE2XJ97IHsdF8H0B8kllyQj9uA3sOzSehcRgXSwZoRQTYRWlJtayICAul4AgUAPHR0hfxGzccI3ggSDv1peEAMFF8nPMdgF2EZCfYUOQxzG5DIQKbDcBIm5+Bnmzk8ftwpIQOrDlgwi3EiDAjhI3TctCoC5g1wk6SPMfV+NqQcSnSUtDkM40v0QkQEAxAR65LC1cajgi4pYIjLDtotzknC4JoV5KjAD1mke5aVlagNzEJ9pM+ZaQNX5JeYEanBKERAcMkJ2gbdJ8hKlNfFyZXADNZ6fCo9SUZHOPLYH6xzOEIHEG44shpR4FwStTI5E4hOBAtwBJ301y6Ca+hYotkzIlKeUqlnLZNG1P1RkJkYSuDvds6KpnmyOxDUAwLtDzkzyb6NxPbPyJMsMpXE+pVdu2zTJCwAIvbE8xBG52fYFRPbM6HueD6zDHGTqnkGOXCCyrq0fgQDzqmjxTxzZg8N1N5i8rQT9l7MnioC9PVRXGMAy1rFOob8ItfAItiN0mWwJLuE1Jt3VmSoDDNH0Ib5pBHa0PyleVqWsUsAVB4LVP8XXQLVevUO/k1g1PDyBgdSiejRazpxAkwoVXNwLjdUWlzl2EkN/pNWNnaNuUuLrFpq06xYwQdGUs6CPAYKa8gdPRzcPgwCB8nc74CP1zvbcfj2F1v6dzqQHsr2WISgZNpXgeGHcs8M6DmaedkWLU4Bh4q+oYAadHcIXTjmBex7TDp6oE8XXGsyza0DGManu6CmHh2WPxFGYWAQ8Zfw//qToCBQJAgA7ePec41YwZFHdeilLV60oaI8D9MYq5trf3x5837md354u8NhyuVU2PmQ4I3S57w+FwcPN85/Pn/o22t3er2IzuoR0hQmDzrsdwTK8byxKNK0WwDUp1edYd4AytKnvZbPb7sfsMpN9vw5uhpwc2m7AaHvPnZzRm5z8tePOHpwsCQQAlNCWVkXq7cRDEblk3FMiyEJdkR6f/kUVy+HV397/PnmlfEUL2xcQb0cGsoN6iT7+RMe7XdXzJkCEIGiufCRzlcdVPMRHABbkUd+2mtXNkiD08Xfb717++w/Q3BKFmpKYRUoY/5vvrZ2hMi1xziw1Rz7P9JmTvBAjgRIDA9HkL10qOMLTAF8AOX85qZPZxWhBg2ymQMe3jm2Oww80FIdhLoeuNCzntwujYCCtdU5FUhLCTz2OE0fy7X29uvny5aY+mHyOAV3DkQzLmxh8DlOj6jsPKFkxoKEI8X1hp3KmcAoamYD9DEFLC7R6iaP/1229/1XwVT1xRMGC0r6ps+zcYg8ywt8cJKYwAKUb+G92TZMTMTavXtiAhD/vbR0AaF/QXayAvXpAfHCfMIKRSt8MX6Gv8A34Z+DISEOzzAepeOL3ajVWpVnd7FH7scmftTLpHSD4MKn2oAswcOUjMiGc8xjAkLjVCqGvs8w56K9h3cet12cMIynOC4K8Y2b9JE6bZMRJBSLPopjgjpisgNVSRL3DMP25nCiFSJCbySGyEcCUhPZrlmDoAue6hxCP9Y8VCoBgj6isf4R+sVrMcLz0jERt3JmhOuvqdNKGP9PESw0SMwK5A1fsmBDl0NTFLNTFFt4cu8j5IcRCEOQcNIpz/Xmagq6424wOs4IJtcJxix9ICBEuEMxCEwXUVem6vl4gAsrTpcRxjGnEQwBIRzkCUSOm2wBnleLl5Sg1NSA5SlSA85o9ClDMQBEn1QAlxu5WJGhpluK6sRCOgujN6rRtG6B7L31PZCkf1kioBeUPP4DyP3EfYDcL6hp+BBF1SQjEJgWHCTHZSJSDp2SnGjPJHqDkCxQg4DXJgBz0Mk3gjxVQ5PXZeDKhhv1xWTSYKATXpZF1OUg1KeQBBNb0EO4gAQ/fKRNuxUGfgGFWHLtkQBIGB34waZgjfG2GXG38fNcOw0r3zovxRYChJQi0+1EYKXoS5I0EwyruNJ+mAQOyWqSh/xGtygiRFHziMskL80jAvYrdnRCHEEN8V7hYgALl6IDPM6cUIuq2fG83kGWFaVj/ZIQihmof4tNXAN74r9OI1a5EI++a8JThmDoKDAFRgK6kLcwjK1SIAiKGqz2UGzvYYShh3Z/Bb0lW97BnBIyg/K9iL2QGVqzBL6DY6+WIM4IAcqdrKcGgzs5Eh+alxkXjACPtlZj4muBTlDW/XVHSg8GLtdu/2hSfNOYhEquTVggQgd2pYWHKCN0T7Fby9XOsxIR5K7FBO0q1FqKFbDQ9LToXbB7kdmursCeCUM94trAOQay8iOxm6rqDznNDkTJRgJGpZo0RsVNWIUjXethjzpVQincLTKuSsgEeq4RVbV1Ud9m66N68igRAsxQwreJOph5mCYzwPnWt5IZbABPbVogE5zaCGeiSjg8wdR/tmMExzaQR4lxnKIITaZ0SwPB0QBqyHmE9ohP8DAfLJqheXAREw5bsFWqUIhq5pG/F6F9QplWMe9SYRceW6ajNxehdwBKX6aWXZOlhZaTTuVA9V7hg68KrXW+vdZRN0W607lVHLqiE96A/gB4xteletbHvJBI1WtnWlMsBgGw/aQpKUss0oJoxf6P9WmpPV/Wxr3VTQpsGGDPGADtD3BsP01tvZ9WUSICVktwgCo5p29KGKapKnab2t2nLV0EDnua0PBnnqpNvVkB4JdTHoG/IA6w6dvy5TDeRkv7UrUP5TNxOsEWwV0WNKG6IWi/QDH8TXtpdGIBKEbG1/KPmP30Dhng6byrEYil32nydSw7Z/Tr0kNYggXf/pQrb1I+UrAtrmcm/ybLRXNT3F8FXgH9Vnayf46kWXX3m5/fP+YDRptrYrpKjxg0h9LOOnmFRqd8SbbW/SuX+3XzaeioEua5z8e5+haTq3lR0ztIcQ/MGnoWOhJGZtvTYeu36QKdJ08f7Xz+3GSjIOrL3t9/8ewOrFQiGXK7yazJtt/0AZiJqlMKB8cKm79mRg7TCTAykABk3f/zx5GdcqothAukeXFXO+FDamZkYOIaCgFCRhJH6eEAbT49YPcmPBHIVfJy8fzxXiCtE9vvmJZF7XAgxC6FGn8KM1Nar2KpMLCMa4//kYQeMXLD9zaa5QyBxM3x5kCD2sVgUIsu2D3LwUaPqxv6n5RRfowCUZIsXX07NDYDDzBLsBguzh7J1gKdKZB/+iRfxJF3J0wV98tDxG2AjOX/s0VyZmCNobRXxlAXQ4jVCg7x9AELdpGJ0BL8zMSXErsADY4mGC2hY9MwOwFHJIx/TPBxgOaOw1uUIIwowaZhl+tGe+3izOT5Ih90dHmkI8ITaAaAi5mg56g58fRjKcIchuHYTMkclhVy/eR4ZmrkhiJxRhTg3ZdmdM0JklqL2atQMmIAiRpgAlkBwAygq7A/pwNH17a2t9fb1dWx8xUO1aCz7Z2hqVSIjIUCUUiogDPCLcFI37IiGIQCjmyK3WXm8UDl5twXrZXRIWwi60dVuvNw9ym1s+w2GYJ2TwvMjY9K+IcCiMEkGYPwIDqRRtZC+a3jh8DQz4dGG31j58BQUlk6MP130lRCMQU4SpQfxFj1NRIVQNmQye/zBTLAIs+rG5efTt27ePmxuQcZAKM/TGFvaY12GeMJ4We2QIQQPlhFxw7IzQSA042jBEIYNrIJIMeVsETSHM1kaoEqYQcvT8Hx6K7+ncJCWFWyKTg/n3yUtYbqqSFfD6eJnXrShPGBnCV8O8Je5jIIAaalM6Lk5k8tnGerYV7gnT6ggJCrBDIRex8ESKuVY7XMdTmJutcE+YlkBu+B+jDvmxUaTAAwAAAABJRU5ErkJggg=="
                          alt=""
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
