import styled from "styled-components";

export const Box = styled.header`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  animation: showHeader 1s linear forwards;

  @keyframes showHeader {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
