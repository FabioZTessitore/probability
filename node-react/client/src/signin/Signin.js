import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  constructor (props) {
    super (props);

    this.changePage = this.changePage.bind(this);
    this.signin = this.signin.bind(this);
  }

  changePage () {
    this.props.changePage('landing');
  }

  signin(e) {
    e.preventDefault();

    const instance = axios.create({
      proxy: {
        host: '127.0.0.1',
        port: 3001
      }
    });

    instance.post('/signin', {
      "email": e.target.email.value,
      "password": e.target.password.value
    }).then( function (result) {
      console.log(result);
    }).catch( function (err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-lg-center mt-5">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="text-center">Sign in to Probability</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.signin}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                  </div>
                  <div className="form-group">
                    <div className="alert alert-danger">message</div>
                  </div>
                  <button className="btn btn-primary btn-block" type="submit">Sign In</button>
                </form>
              </div>
            </div>
            <div className="card mt-2">
              <div className="card-body">
                <p>New to <strong>Probability</strong>? <button className="btn btn-link" onClick={this.changePage}>Create an account</button></p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default SignIn;
