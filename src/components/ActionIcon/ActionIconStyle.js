import styled from 'styled-components';

const ActionIconStyle = styled.img`
  width: ${props => props.size ? props.size + 'px' : '100%'};
  height: auto;
`;

export default ActionIconStyle;
