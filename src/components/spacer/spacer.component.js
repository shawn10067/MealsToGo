import React from "react";
import styled from "styled-components/native";
import sizes from "../../infrastructure/sizes";

const sizeVariant = {
  small: "sm",
  medium: "md",
  large: "lg",
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size) => {
  const posString = `${positionVariant[position]}:${sizes[sizeVariant[size]]}`;
  console.log(posString);
  return posString;
};

const Spacer = styled.View`
  margin-left: 10;
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
