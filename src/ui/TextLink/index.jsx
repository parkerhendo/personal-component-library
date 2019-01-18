import 
  styled 
  // { keyframes } 
from 'styled-components';

// const underline = keyframes`
//   0% {
//     width: 0%;
//   }

//   100% {
//     width: 100%;
//   }
// `;

export default styled.a`
  font-family: ${(props) => props.theme.typography.font.body};
  font-size: ${(props) =>
    (props.large && props.theme.typography.size.bodyLarge) ||
    (props.small && props.theme.typography.size.bodySmall)}px;
  color: ${(props) => props.theme.color.greyscale[700]};
  max-width: 60ch;
  line-height: ${(props) => props.theme.typography.lineHeight.expanded};
  letter-spacing: ${(props) => props.theme.typography.letterSpacing.normal}px;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 1.5px;
    width: 100%;
    background: ${(props) => props.theme.color.greyscale[700]};
  }
`;
