import styled from "styled-components";

export const Container = styled.button`
  width: 130px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #17a4d0;
  color: #17a4d0;
  background-color: transparent;
  fonts-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-left: 25px;
  box-shadow: 0px 2px 4px transparent;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #17a4d0;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
