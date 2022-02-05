import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  padding-top: 12px;

  .card-anime {
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    border-radius: 23px;
    width: 200px;
    height: 360px;
    overflow: hidden;
    margin: 10px;
    cursor: pointer;
    img {
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
      transition: 0.3s;
      transform: translateY(-10px);
      width: 210px;
      height: 370px;
      margin: 5px;

      img {
        filter: saturate(135%);
      }
    }
  }
  @media (max-width: 500px) {
    .card-anime {
      width: 155px;
      height: 285px;
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
      &:hover {
        transform: translateY(-5px);
        width: 155px;
        height: 285px;
        min-width: 155px;
        min-height: 285px;
        margin: 9.3px;
      }
    }
  }
`;
