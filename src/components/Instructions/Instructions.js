import React from 'react';
import {Grid} from '@material-ui/core';
import ActionIcon from '../ActionIcon/ActionIcon';
import StyledInstructions from './InstructionsStyle';

const Instructions = props =>
  <StyledInstructions>
    <Grid container item xs={12} className="instructions">
    {
      props.instructionHeaders.map(instruction =>
        <Grid container item xs={6} key={instruction.title} className="header-block-wrap">
          <Grid item xs={12} className="header-block" >{instruction.title}</Grid>
        </Grid>
      )
    }
    </Grid>

    <Grid container item xs={12}>
    {
    props.instructions.map(instruction =>
      <Grid container item xs={6} className="instruction-block-wrap" key={instruction.id}>
        <div className="instruction-block">
          {
            instruction.steps.map(step => 
              <Grid container item className="step" item xs={12} key={step.title} alignItems="center">
                <Grid item xs={3}>
                  <ActionIcon src={step.icon} size={88}></ActionIcon>
                </Grid>
                <Grid container item xs={9} direction="column">
                  <div className="step-title">{step.title}</div>  
                  <div className="step-content">{step.content}</div>  
                </Grid>
              </Grid>
            )
          }
        </div>
      </Grid>
    )
    }
    </Grid>
  </StyledInstructions>

export default Instructions;
