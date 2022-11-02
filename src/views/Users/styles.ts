import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const UsersManagementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 33px;

  .toastContainer {
    z-index: 50;
  }

  .table-container {
    ::-webkit-scrollbar {
      width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
  }
`;

export const UsersManagementHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UsersManagementHeaderTitle = styled.div`
  border-left: 3px solid #6a6cf6;
  padding-left: 12px;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #1e2327;
  }

  h6 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7a7d82;
  }
`;

export const UsersManagementEstatistica = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UsersManagementEstatisticaCard = styled.div`
  width: auto;
  height: 52px;
  background: #ffffff;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;

  .number-usr {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #4684f7;
    background: rgba(70, 132, 247, 0.2);
    border-radius: 6px;
    padding: 4px;
    width: 30px;
    max-width: auto;
    text-align: center;
    margin-right: 12px;
  }

  h5 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #7a7d82;
  }
`;

export const UsersManagementFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  height: 70px;
  justify-content: space-between;

  .filter-fields {
    display: grid;
    grid-template-columns: 400px repeat(2, 164px);
    grid-column-gap: 16px;
  }

  .MuiInputBase-root {
    height: 40px;
    background: #ffffff;

    input {
      color: #474c50;

      &::placeholder {
        color: #7a7d82;
      }
    }

    svg {
      fill: #7a7d82;
    }
  }

  .MuiInputBase-root {
    background: #ffffff;
    border: 1px solid rgba(139, 141, 146, 0.15);
    border-radius: 6px;
  }

  .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input {
    border: none;
    outline: none;
  }

  button {
    background-color: #6a6cf6;
    width: 200px;
    height: 44px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.06em;
    color: #ffffff;

    svg {
      margin-right: 15px;
    }
  }
`;

export const TablePaper = styled(Paper)`
  width: 100%;
  margin-top: 25px;
  background: #ffffff;
  border-radius: 6px;

  .MuiTableHead-root {
    border-radius: 6px;

    .MuiTableRow-root {
      .MuiTableCell-root {
        background: pink;
        background: #ffffff;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.06em;
        height: 52px;
        color: #a1a7aa;

        &:first-child {
          border-top-left-radius: 6px;
        }

        &:last-child {
          border-top-right-radius: 6px;
        }
      }
    }
  }

  .MuiTableRow-root {
    background: #f8f8f8;
    border: none;
    height: 52px;

    .MuiTableCell-root {
      border: none;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.06em;
      color: #474c50;

      .user-name {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin-right: 16px;
        object-fit: cover;
      }
    }

    &:nth-child(even) {
      background: #ffffff;
    }

    .btn-edit {
      background: rgba(122, 125, 130, 0.1);
      width: 30px;
      height: 30px;
      border: none;
      outline: none;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        transform: scale(0.7);
        fill: #7a7d82;
      }
    }
  }

  .MuiToolbar-root {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 166%;
    color: #111827;

    .MuiTablePagination-selectLabel {
      color: #6b7280;
    }
  }
`;
