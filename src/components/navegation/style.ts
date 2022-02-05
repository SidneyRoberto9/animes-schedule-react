import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 99.8%;
  height: 80px;
  border: 1px solid #000;

  .list {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-between;
    background-color: #121212;
    input {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      color: #ababab;
      font-size: 20px;
      text-overflow: ellipsis;
      border: none;
      overflow: hidden;
      cursor: pointer;

      height: 100%;
      width: 100%;
      background: linear-gradient(#d1d1d1, #d1d1d1) bottom / 0% 2px no-repeat
        #121212;
      transition: 0.8s;
      &:hover {
        color: #fff;
        background-size: 100% 2px;
      }
    }
  }
`;
