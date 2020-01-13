import styled from "styled-components";

export const WrapDiv = styled.div`
  border: 1px solid white;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

export const MainStyled = styled.main`
  width: 90vw;
  min-height: 40vh;
  max-width: 350px;
  margin: 70px auto;
  background: #a9d3e9;
  padding: 15px;
  opacity: 0.85;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  &:hover {
    cursor: pointer;
  }
`;
