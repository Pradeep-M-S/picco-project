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
  font-size: 1rem;
`;
