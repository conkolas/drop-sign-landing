import styled from 'styled-components';

const RowStyle = styled.div`
  height: ${ props => props.expand ? '100%' : 'auto' };
`;

export default RowStyle;