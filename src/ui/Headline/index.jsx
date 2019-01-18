import styled from 'styled-components';
import PropTypes from 'prop-types';

const Headline = styled.h1`
  font-family: ${props => (props.hero && props.theme.typography.font.headline)
    || (props.section && props.theme.typography.font.section)};
  font-size: ${props => (props.hero && props.theme.typography.size.headline)
    || (props.section && props.theme.typography.size.section)}px;
  line-height: ${props => (props.hero && props.theme.typography.lineHeight.condensed)
    || (props.section && props.theme.typography.lineHeight.normal)};
  letter-spacing: ${props => props.theme.typography.letterSpacing.nromal}px;
  color: ${props => props.theme.color.greyscale[700]};
  max-width: 35ch;
`;

Headline.propTypes = {
  hero: PropTypes.bool.isRequired,
  section: PropTypes.bool.isRequired,
};

export default Headline;
