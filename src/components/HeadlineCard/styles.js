import styled from "styled-components";
import profile from '../../assets/perfil.jpg'

export const Card = styled.div`
  transition: 0.3s;
  border-radius: 5px;
  height: 16em;
  width: 35rem;
  text-align: center;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  padding: 0.75rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
`

export const CardSubtitle = styled.h4`
  font-weight: lighter;
  font-size: 1.5rem;
  box-sizing: border-box;
`

export const CardImage = styled.img`
  border-radius: 5px 5px 0 0;
  height: 100%;
  width: 75%;
  object-fit: contain;
  background: url(${profile});
  background-position: center;
`;
