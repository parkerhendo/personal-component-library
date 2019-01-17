import styled from 'styled-components';

export default styled.p`
  font-family: ${(props) => props.theme.typography.font.body};
  font-size: ${(props) =>
    (props.large && props.theme.typography.size.bodyLarge) ||
    (props.small && props.theme.typography.size.bodySmall)}px;
  color: ${(props) => props.theme.color.greyscale[500]};
  max-width: 60ch;
  line-height: ${(props) => props.theme.typography.lineHeight.expanded};
  letter-spacing: ${(props) => props.theme.typography.letterSpacing.normal}px;
`;
