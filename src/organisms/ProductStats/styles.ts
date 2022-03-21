import styled from "styled-components";

export const Container = styled.div`
  text-align: right;
  position: relative;
  top: -72px;
  width: 50%;

  img {
    position: relative;
    right: -100px;
    opacity: 0;
    z-index: -1;
    animation: showImage .5s linear forwards;
  }

  @keyframes showImage {
    from {
      opacity: 0;
      right: -100px;
    }

    to {
      opacity: 1;
      right: 0;
    }
  }
`;
