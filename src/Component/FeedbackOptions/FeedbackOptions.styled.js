import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: inherit;
  border: 1px solid grey;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: aqua;
    border-color: aqua;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 10px;
`;