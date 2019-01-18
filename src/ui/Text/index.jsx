import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-family: ${props => props.theme.typography.font.body};
  ${props => props.large && css`
    font-size: ${props.theme.typography.size.bodyLarge};
  `}
  ${props => props.small && css`
    font-size: ${props.theme.typography.size.bodySmall};
  `}
  color: ${props => props.theme.color.greyscale[700]};
  max-width: 65ch;
  line-height: ${props => props.theme.typography.lineHeight.expanded};
  letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
`;

Text.propTypes = {
  large: PropTypes.bool,
  small: PropTypes.bool,
};

export default Text;
