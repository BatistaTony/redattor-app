import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

export const CustomDialog = styled(Dialog)`
  background: rgba(30, 35, 39, 0.1);

  .MuiDialogTitle-root {
    width: 100%;
    height: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 28px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    /* position: relative; */

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.06em;
      color: #1e2327;
    }

    .icon-edit {
      margin-right: 19px;
      background: rgba(106, 108, 246, 0.15);
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
        fill: #6a6cf6;
      }
    }

    .btn-close-modal {
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      margin: 20px;

      svg {
        fill: #7a7d82;
      }
    }
  }

  .MuiDialogActions-root {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 44px;

    button {
      width: 444px;
      height: 44px;
      background: #6a6cf6;
      border-radius: 6px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.06em;
      color: #ffffff;
      outline: none;
      border: none;
    }
  }

  .img-sttng {
    width: 100%;
    height: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon-user {
      width: 54px;
      height: 54px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(201, 201, 201, 0.15);
      margin-right: 32px;
    }

    .drop-zone {
      width: 166px;
      height: 34px;
      background: rgba(71, 76, 80, 0.04);
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.06em;
        color: #474c50;
      }

      svg {
        transform: scale(0.8);
        fill: #474c50;
        margin-right: 10px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(2, 210px);
  grid-template-rows: repeat(6, 41px);
  grid-row-gap: 29px;
  grid-column-gap: 22px;

  .MuiFormControl-root {
    width: 100%;
    height: 41px;

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid rgba(139, 141, 146, 0.2);
    }

    .MuiInputBase-input {
      height: 41px;
    }

    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      height: 41px;
    }

    .MuiOutlinedInput-root {
      width: 100%;
      height: 41px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #474c50;
      padding: 0;
      padding-left: 15px;
    }
  }

  .email-field,
  .phone-field,
  .password-field {
    grid-column: 1/3;
  }

  .divis-br {
    grid-column: 1/3;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.06em;
      color: #7a7d82;
      margin-right: 10px;
    }

    hr {
      width: 386px;
      height: 0px;
      margin: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;
