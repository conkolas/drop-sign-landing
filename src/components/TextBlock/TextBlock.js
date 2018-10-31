import React from 'react';
import PropTypes from 'prop-types';
import StyledTextBlock from './TextBlockStyle';

const TextBlock = props => 
  <StyledTextBlock className={(props.alignRight ? ' right ' : '') + ' ' + props.className} light={props.light} font={props.font}>
    <h2>{ props.title }</h2>
    <h3>{ props.header }</h3>
    
    <div className="content">{ props.content }</div>
  </StyledTextBlock>

TextBlock.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  light: PropTypes.bool,
  alignRight: PropTypes.bool,
}
export default TextBlock;
