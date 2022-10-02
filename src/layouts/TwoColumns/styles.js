import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;

  > div {
    width: 50%;
    min-width: 400px;
  }
`;
