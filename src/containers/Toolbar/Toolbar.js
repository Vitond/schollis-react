import React, {Component} from 'react';
import Aux from '../../components/hoc/Aux/Aux';
import Callendar from './Callendar/Callendar';
import Inbox from './Inbox/Inbox';

class Toolbar extends Component {

  render () {

    return (
      <Aux>
        <Inbox></Inbox>
        <Callendar></Callendar>
      </Aux>
    );

  }

}

export default Toolbar;