import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import StyledNavigation from './NavigationStyle';

const Link = props => 
  <a onClick={(e) => props.onClick(e)}
    href={props.href} 
    target={props.target}
    className={ 
      (props.primary ? ' primary ' : props.secondary ? ' secondary ' : '') + 
      (props.active ? ' active ' : '') + ' link'
    } >
    {props.children}
  </a>

const Menu = props =>
  <StyledNavigation>
    <Grid container alignItems="center">
      { props.menuItems && props.menuItems.map(item => 
        <Link 
          active={item.active}
          onClick={(e)=>props.onClick(e, item.order)} 
          key={item.order} 
          href={item.link} 
          target={item.target} 
          primary={item.primary} 
          secondary={item.secondary}>
          {item.title}
        </Link>
      )}
    </Grid>
  </StyledNavigation>

class Navigation extends React.Component {
  render() {
    const {menuItems, onMenuClick} = this.props; 
    return (
      <Menu menuItems={menuItems} onClick={(e, order) => onMenuClick(e, order)}></Menu>
    )
  }
}

export default withRouter(Navigation);
