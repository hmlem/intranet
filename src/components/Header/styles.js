import styled from "styled-components";

export default styled.header`
  width: 100vw;
  text-align: center;
  margin-bottom: 40px;

  div {
    height: 80px;
    background-color: ${(props) => props.theme.green};
    width: 100%;
    text-align: center;

    svg {
      fill: white;
      height: 50px;
      width: auto;
      margin-top: 10px;
    }
  }

  nav {
    width: 900px;
    height: 32px;
    margin: 0 auto;

    ul {
      list-style: none;
      display: inline-flex;

      li {
        line-height: 32px;
        display: inline-block;
        margin-right: 5px;

        a {
          color: ${(props) => props.theme.green};
        }
      }
    }
  }
`;
