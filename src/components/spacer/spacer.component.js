import React from "react";
import styled from "styled-components/native";
import sizes from "../../infrastructure/theme/sizes";

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
  return posString;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ position, size }) => {
  const variant = getVariant(position, size);
  return <SpacerView variant={variant} />;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
