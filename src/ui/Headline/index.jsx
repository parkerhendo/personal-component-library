import styled from 'styled-components';

export default styled.div`
  font-family: sans-serif;
  font-size: ${props => props.theme.typography.size.headline || 32};
`;