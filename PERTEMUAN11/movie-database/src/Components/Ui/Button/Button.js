import styled, {css} from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: fff;
  cursor: pointer;

  background-color: ${function (props) {
    if (props.variant) {
      return props.theme.colors[props.variant];
    } else {
      return props.theme.colors.primary;
    }
  }};

  ${(props) => props.full && css`
    display: block;
    width: 100%;
  `}
  
  font-size: ${function (props) {
    if (props.FontSize) {
      return props.theme.FontSize[props.fontSize];
    } else {
      return props.theme.FontSize.md;
    }
  }};

  padding: ${function (props) {
    if (props.padding) {
      return props.theme.padding[props.padding];
    } else {
      return props.theme.padding.md;
    }
  }};
`;

export default Button;
