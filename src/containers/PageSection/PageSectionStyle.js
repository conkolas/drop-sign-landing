import styled from 'styled-components';

export default styled.section`
  height: 300px;
  background: ${ 
    props => props.secondary ? 
      props.theme.color.mainForeground : 
      props.theme.color.mainBackground};
`;