import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  padding-top: 12px;

  .card-anime {
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    border-radius: 23px;
    width: 190px;
    height: 360px;
    overflow: hidden;
    margin: 8px;
    cursor: pointer;
    img {
      transition: 0.5s;
      width: 100%;
      height: 80%;
      object-fit: cover;
    }

    .title {
      color: #fff;
      font-size: 1.2rem;
      text-align: center;
      margin-top: 10px;
      max-height: 3rem;
      overflow: hidden;
    }

    &:hover {
      img {
        height: 1000%;
        filter: saturate(150%);
      }
    }
  }
  @media (max-width: 1024px) {
    .card-anime {
      width: 180px;
      height: 350px;
      margin: 7px;
    }
  }

  @media (max-width: 500px) {
    .card-anime {
      max-width: 155px;
      max-height: 285px;
      min-width: 155px;
      min-height: 285px;
      margin: 12px;
      border-radius: 20px;

      .title {
        font-size: 1.03rem;
        text-align: center;
        margin-top: 4px;
      }

      img {
        width: 100%;
        height: 80%;
        object-fit: cover;
      }
    }
  }
`;
