import styled from '@emotion/styled';

export const ActivitiesLogsContainter = styled.div`
  padding-bottom: 70px;

  .step-item-icon {
    width: 26px;
    height: 26px;
    background: #f0f1f1;
    border: 1px solid #f0f1f1;
    border-radius: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .step-label {
    display: flex;
    flex-direction: row;

    .MuiStepLabel-label {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .text-label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #6d7471;
    }

    .text-value {
      margin-left: 3px;
    }
  }

  .step-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .text-user-chg {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      color: #6d7471;

      svg {
        margin-right: 5px;
      }
    }

    .text-time-chg {
      svg {
        margin-left: 15px;
      }
    }
  }
`;
