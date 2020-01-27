import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  form{
    display: flex;
    flex-flow: column;

    input{
      margin: 5px 0;
    }

    button{
      margin: 5px 0;
    }
  }
`;
