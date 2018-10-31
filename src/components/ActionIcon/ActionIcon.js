import React from 'react';
import StyledActionIcon from './ActionIconStyle';

import DropIcon from './../../assets/icons/drop.svg';
import FillIcon from './../../assets/icons/fill.svg';
import PickIcon from './../../assets/icons/pick.svg';
import SendIcon from './../../assets/icons/send.svg';
import SignIcon from './../../assets/icons/sign.svg';

export const ActionIconTypes = {
  drop: DropIcon,
  send: SendIcon,
  sign: SignIcon,
  pick: PickIcon,
  fill: FillIcon,
}

const ActionIcon = props => <StyledActionIcon {...props}></StyledActionIcon>

export default ActionIcon;
