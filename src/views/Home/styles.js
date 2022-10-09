import styled from "styled-components";

export default styled.div`
  .carousel.carousel-slider {
    border-radius: 5px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);

    li a {
      display: inline-block;
    }
  }

  #ul-links-uteis {
    li {
      list-style: none;

      > div {
        display: flex;
        vertical-align: middle;

        div {
          align-self: center;
          display: inline-block;

          img {
            width: 64px;
            border-radius: 5px;
          }

          &:nth-child(2) {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
