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
  overflow: hidden;

  .card-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    background: url('/background/padrão-big.png') no-repeat;
    background-size: 100% 100%;
  }

  .illustration-blog {
    position: absolute;
    right: 35px;
    bottom: 1px;
    z-index: 2;
  }

  .content-contaienr {
    width: 70%;
    z-index: 2;
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
