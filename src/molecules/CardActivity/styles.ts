import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 185px;
  left: 20px;
  background-color: #daaaff;
  color: #fff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 11px;
  overflow: hidden;

  small {
    font-size: 15px;
  }

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 25px;
    font-weight: 300;
    margin-right: 5px;
  }

  i {
    width: 154px;
    height: 77px;
    position: absolute;
    border-radius: 50px;

    &.circle1 {
      left: 90px;
      top: -20px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      );
    }

    &.circle2 {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1)
      );
      left: 80px;
      bottom: -50px;
      transform: rotate(45deg);
    }

    &.circle3 {
      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: rotate(-72deg);
      top: -50px;
      left: 45px;
    }
  }
`;
