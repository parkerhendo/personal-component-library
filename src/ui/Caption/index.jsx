import styled from 'styled-components';

const Caption = styled.p`
  font-family: ${props => props.theme.typography.font.caption};
  font-size: ${props => props.theme.typography.size.caption}px;
  color: ${props => props.theme.color.greyscale[500]};
  max-width: 40ch;
  line-height: ${props => props.theme.typography.lineHeight.normal};
  letter-spacing: ${props => props.theme.typography.letterSpacing.expanded}px;
`;

export default Caption;
