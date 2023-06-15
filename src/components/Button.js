import React from "react";
import styled, {css, keyframes} from "styled-components";


const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(15deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(-15deg);
  }
  100% {
    transform: rotateZ(0deg);

  }

`;

const ButtonStyled = styled.button.attrs(props => ({
  outlined: true,
}))`

  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }

  align-self: ${props => props.align || "stretch"};


  ${props => props.primary && css`
    color: ${props => props.color || props.theme.color.primary};
    background: ${props => props.background || "white"};
  `};


  ${props => props.outlined && css`
    color: ${props => props.color || props.theme.color.primary};
    border: 1px solid ${props => props.color || props.theme.color.primary};
    background: transparent;
  `} ;
  @media ${props => props.theme.media.table} {
    padding: 10px 25px;
  }
`;

// const LargeBtn = styled(ButtonStyled)`
//   font-size: 31px;
// `;

const Button = (props) => {
  return <ButtonStyled {...props} />;
  
};

export default Button;
