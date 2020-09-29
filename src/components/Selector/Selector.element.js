import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonNoOutline = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.5s ease;
  font-size: 1rem;

  &:hover {
    background-color: #c3e214;
    transition: all 0.5s ease;
  }
`;
