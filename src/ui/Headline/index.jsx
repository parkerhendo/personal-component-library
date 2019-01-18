import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Headline = styled.h1`
  /* Hero Headline Unique Styles */
  ${props => props.header && css`
    font-family: ${props.theme.typography.font.headline};
    font-size: ${props.theme.typography.size.headline};
    line-height: ${props.theme.typography.lineHeight.condensed};
  `}
  /* Section Headline Unique Styles */
  ${props => props.section && css`
    font-family: ${props.theme.typography.font.section};
    font-size: ${props.theme.typography.size.section};
    line-height: ${props.theme.typography.lineHeight.normal};
  `}
  letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  color: ${props => props.theme.color.greyscale[700]};
  max-width: 35ch;
  margin: 0;
`;

Headline.propTypes = {
  header: PropTypes.bool,
  section: PropTypes.bool,
};

export default Headline;
