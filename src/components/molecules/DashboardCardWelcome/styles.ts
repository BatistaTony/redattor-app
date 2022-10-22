import styled from '@emotion/styled';

export const DahsboardCardWelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(124.74deg, #1e2327 29.53%, #6a6cf6 148.97%);
  box-shadow: 0px 0px 4px -13px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 31px 39px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;

  .illustration-blog {
    position: absolute;
    right: 35px;
    bottom: 1px;
  }

  .content-contaienr {
    width: 70%;
  }

  .card-ctr-dash {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    .btn-card-ctr {
      background: rgba(255, 255, 255, 0.15);
      padding-left: 23px;
      padding-right: 19px;
      color: #fff;
      height: 37px;
      border-radius: 6px;

      svg {
        margin-right: 15px;
      }
    }
  }
`;
