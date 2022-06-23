import styled from "styled-components/native";
import theme from "../../infrastructure/theme/index";

const defaultTextStyles = `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colours.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = `
    font-size: ${theme.fontSizes.body};
`;

const hint = `
    font-size: ${theme.fontSizes.body};
`;

const error = `
    color: ${theme.colours.text.error};
`;

const caption = `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

const Text = styled.Text`
  ${() => defaultTextStyles}
  ${({ variant }) => variants[variant]}
`;

Text.defaultProps = {
  variant: "body",
};

export default Text;
