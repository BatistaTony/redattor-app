import styled from '@emotion/styled';

export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
`;

export const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 500px;
  box-sizing: border-box;

  .svr-error-msg {
    color: #ff5959;
  }

  .MuiButton-contained {
    width: 400px;
    height: 52px;
    margin-top: 32px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    background-color: #6a6cf6;
    border-radius: 6px;

    .MuiLoadingButton-loadingIndicator {
      color: #ffffff;
    }
  }

  .Mui-disabled {
    background: #888aff;
    opacity: 0.5;
  }

  .MuiButtonBase-contained:disabled {
    cursor: not-allowed;
    pointer-events: auto;
  }

  .ipts {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-top: 40px;

    .Mui-error {
      .MuiOutlinedInput-notchedOut line {
        border: 1px solid #ff5959;
      }
    }

    .MuiFormHelperText-root {
      color: #ff5959;
    }

    .MuiFormControl-root {
      margin: 0;
    }

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid #e7e7fe;
    }
  }
`;

export const SignInFormTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.06em;
  color: #1e2327;
  margin: 0;
`;

export const SignInFormText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #474c50;
  margin: 0;
  margin-top: 7px;
`;

export const SignInLink = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #474c50;
  margin: 0;
  margin-top: 24px;
  align-self: flex-start;
`;
