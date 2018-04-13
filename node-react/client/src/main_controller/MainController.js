import React, { Component } from 'react';
import Landing from '../landing/Landing';
import SignIn from '../signin/Signin';

class MainController extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 'landing',
      //page: 'signin',
    };

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  changePage (nextPage) {
    this.setState({
      page: nextPage,
    });
  }

  render() {
    if (this.state.page === 'landing') {
      return (
        <Landing changePage={this.changePage} />
      );
    } else if (this.state.page === 'signin') {
      return (
        <SignIn changePage={this.changePage} />
      );
    }
  }
}

export default MainController;
