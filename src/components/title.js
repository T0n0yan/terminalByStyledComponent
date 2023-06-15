import React from "react";
import styled from "styled-components";


const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.color.primary};
  font-size: ${props => props.fontSize};
  letter-spacing: ${props => props.lSpacing};
  @media ${props => props.theme.media.tablet} {
    font-size: 50px;
  };
  @media ${props => props.theme.media.phone} {
    font-size: 40px;
  };
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
