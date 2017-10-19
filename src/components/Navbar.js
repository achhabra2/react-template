import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import ActionsIcon from 'grommet/components/icons/base/Actions';
import Search from 'grommet/components/Search';

@inject('store') @observer
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    let { store } = this.props;
    return (
      <Header>
        <Title>
          Sample Title
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Search inline={true}
            fill={true}
            size='medium'
            placeHolder='Search'
            dropAlign={{ "right": "right" }} />
          <Menu icon={<ActionsIcon />}
            dropAlign={{ "right": "right" }}>
            <Anchor href='#'
              className='active'>
              First
      </Anchor>
            <Anchor href='/sample'>
              Second
      </Anchor>
            <Anchor href='/'>
              Third
      </Anchor>
          </Menu>
        </Box>
      </Header>
    );
  }
}

export default Navbar;