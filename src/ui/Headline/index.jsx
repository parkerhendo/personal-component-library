import styled from 'styled-components';

export default styled.div`
  font-family: ${(props) => 
    (props.hero && props.theme.typography.font.headline) ||
    (props.section && props.theme.typography.font.section)
  };
  font-size: ${(props) =>
    (props.hero && props.theme.typography.size.headline) ||
    (props.section && props.theme.typography.size.section)}px;
`;
