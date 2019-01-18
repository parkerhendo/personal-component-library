import styled from 'styled-components';
import PropTypes from 'prop-types';

const Hero = styled.div`
  margin: 0;
  padding:0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.color.greyscale[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    z-index: 10;
    position: absolute;
    left: 0;
    right: -100px;
    bottom: -50%;
    top: 75%;
    background: ${props => props.theme.color.greyscale[props.background]};
    transform: rotateZ(-8deg);
  }
`;

Hero.propTypes = {
  backgound: PropTypes.number.isRequired,
};

export default Hero;
