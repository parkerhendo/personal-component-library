import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Headline = styled.h1`
  /* Hero Headline Unique Styles */
  ${props => props.type === 'hero' && css`
    font-size: ${props.theme.typography.size.hero};
    font-family: ${props.theme.typography.font.headline};
    line-height: ${props.theme.typography.lineHeight.condensed};
  `}
  /* Header Headline Unique Styles */
  ${props => props.type === 'header' && css`
    font-size: ${props.theme.typography.size.headline};
    font-family: ${props.theme.typography.font.headline};
    line-height: ${props.theme.typography.lineHeight.condensed};
  `}
  /* Section Headline Unique Styles */
  ${props => props.type === 'section' && css`
    font-size: ${props.theme.typography.size.section};
    font-family: ${props.theme.typography.font.section};
    line-height: ${props.theme.typography.lineHeight.normal};
  `}
  letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  color: ${props => props.theme.color.greyscale[700]};
  max-width: 35ch;
  margin: 0;
`;

Headline.propTypes = {
  type: PropTypes.oneOf(['hero', 'header', 'section']).isRequired,
};

export default Headline;
