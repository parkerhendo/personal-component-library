import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 80vw;
  max-width: 1170px;
  margin: 0 auto;
  display: ${props => (props.flex ? 'flex' : 'block')};
  justify-content: ${props => (props.flex && props.justifyContent)};
  align-items: ${props => (props.flex && props.alignItems)};
`;

Container.propTypes = {
  flex: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Container;
