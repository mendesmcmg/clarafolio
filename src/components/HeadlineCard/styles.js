import styled from "styled-components";
import profile from '../../assets/perfil.jpg'

export const Card = styled.div`
  transition: 0.3s;
  border-radius: 5px;
  height: 24.5em;
  width: 18rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  font-weight: lighter;
  font-size: 2.3rem;
`

export const CardImage = styled.img`
  border-radius: 5px 5px 0 0;
  height: 18rem;
  width: 100%;
  object-fit: contain;
  background: url(${profile});
`;
