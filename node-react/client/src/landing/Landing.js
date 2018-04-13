import React, { Component } from 'react';

class Landing extends Component {
  constructor (props) {
    super (props);

    this.changePage = this.changePage.bind(this);
  }

  changePage () {
    this.props.changePage('signin');
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

            <h4 className="mt-5"><button className="btn btn-success btn" onClick={this.changePage}>Start Playing</button></h4>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <form action="/signup" method="post">
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

                  <div className="form-group">
                    <div className="alert alert-danger">message</div>
                  </div>
      
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
