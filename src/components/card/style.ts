import styled from "styled-components";

export const Container = styled.div`
  .card-anime {
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    border-radius: 23px;
    width: 200px;
    height: 360px;
    overflow: hidden;
    margin: 30px;
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
      transform: translateY(10px);
      width: 210px;
      height: 370px;
      margin: 20px;

      img {
        filter: saturate(135%);
      }
    }
  }
`;
