import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TextLink = styled.a`
  font-family: ${props => props.theme.typography.font.body};
  ${props => props.large && css`
    font-size: ${props.theme.typography.size.bodyLarge};
  `}
  ${props => props.small && css`
    font-size: ${props.theme.typography.size.bodySmall};
  `}
  color: ${props => props.theme.color.greyscale[700]};
  max-width: 60ch;
  line-height: ${props => props.theme.typography.lineHeight.expanded};
  letter-spacing: ${props => props.theme.typography.letterSpacing.normal}px;
  text-decoration: none;
  position: relative;
  transition: all 0.15s ease;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 1.5px;
    width: 100%;
    background: ${props => props.theme.color.greyscale[700]};
  }
  &:hover {
    color: ${props => props.theme.color.greyscale[500]};
    &::after {
      background: ${props => props.theme.color.greyscale[500]};
    }
  }
`;

TextLink.propTypes = {
  large: PropTypes.bool,
  small: PropTypes.bool,
};

export default TextLink;
