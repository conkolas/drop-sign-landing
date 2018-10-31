import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import StyledRow from './RowStyle';

export const HalfRow = props => 
  <Grid container 
    item 
    justify={ props.justify ? props.justify : 'space-between' }
    alignItems={ props.align ? props.align : 'center' }
    xs={props.xs ? props.xs : 6}>
    { props.children }
  </Grid>

export const QuarterRow = props => 
  <Grid container 
    item 
    justify={ props.justify ? props.justify : 'space-between' }
    alignItems={ props.align ? props.align : 'center' }
    xs={props.xs ? props.xs : 3}>
  { props.children }
  </Grid>

const Row = (props) => 
  <StyledRow expand={props.expand} container={props.container}>
    <Grid container={props.container} item 
      justify={props.justify}
      alignItems={props.alignItems} 
      spacing={props.spacing}
      xs={props.xs ? props.xs : 12}>
      { props.children }
    </Grid>
  </StyledRow>

Row.propTypes = {
  expand: PropTypes.bool
}

export default Row;