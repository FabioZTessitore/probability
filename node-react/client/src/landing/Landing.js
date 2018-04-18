import React, { Component } from 'react';
import Error from '../error/Error';

class Landing extends Component {
  constructor (props) {
    super (props);

    this.state = {
      errorMessage: ''
    };

    this.changePage = this.changePage.bind(this);
    this.goSignin = this.goSignin.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  changePage (page) {
    this.props.changePage(page);
  }

  goSignin() {
    this.changePage('signin');
  }

  registerUser(e) {
    e.preventDefault();

    const _this = this;

    fetch('/signup', {
      method: 'POST',
      dataType: 'json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": e.target.email.value,
        "password": e.target.password.value,
        "password2": e.target.password2.value
      })
    }).then(res => res.json())
      .then( function (result) {
        if (result.success === false) {
          _this.setState({
            errorMessage: result.message
          });
          return;
        }
        _this.changePage('home');
    }).catch( function (err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">

          <div className="col-lg-6 text-center">
            <h1>Probability</h1>
            <h6>v. 0.0.1</h6>
            <h4><i className="fa fa-code"></i> with <i className="fa fa-coffee"></i> and <i className="fa fa-heart"></i></h4>
            <h5>by <a href="https://github.com/FabioZTessitore">@FabioZTessitore</a></h5>

            <h4 className="mt-5"><button className="btn btn-success btn" onClick={this.goSignin}>Start Playing</button></h4>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.registerUser}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Create a password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password2">Password, again</label>
                    <input type="password" className="form-control" id="password2" name="password2" placeholder="Please repeat the password" />
                  </div>

                  <p>{this.state.errorMessage}</p>
                  <Error message={this.state.errorMessage} />

                  <button className="btn btn-primary btn-block" type="submit">Sign Up for Probability</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Landing;
