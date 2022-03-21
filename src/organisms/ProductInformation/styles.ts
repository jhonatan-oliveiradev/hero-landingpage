import styled from "styled-components";

export const Container = styled.div`
  width: 50%;

  h1 {
    position: relative;
    color: #1e255e;
    font-size: 56px;
    font-weight: bold;
    opacity: 0;
    left: -50px;
    animation: showH1 .5s linear forwards;
  }

  h6 {
    position: relative;
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    padding-right: 150px;
    margin-top: 25px;
    right: -100px;
    opacity: 0;
    animation: showH6 .5s linear forwards;
  }

  @keyframes showH1{
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      left: 0;
    }
  }

  @keyframes showH6{
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      right: 0;
    }
  }
`;
