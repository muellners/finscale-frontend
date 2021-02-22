/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Nav } from '../components';
import Footer from '../components/footer/footer';

export default class PrivateRoute extends Component {

  constructor() {
    super();
    this.state = {
      token: '',
      isloading: false,
    };
  }

  handleAuthState() {
    this.setState({ isloading: true });
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          this.setState({ token: idToken, isloading: false });
          this.props.setToken(idToken);
          this.props.setUser(user);
        });
      } else {
        this.setState({ isloading: false });
      }
    });
  }


  render() {
    const { component: Components, ...rest } = this.props;
    const { isloading, token } = this.state;
    return (
      <>
        {isloading ? (
          <div className="">
           <h1>Loading...</h1>
          </div>
        ) : (
            <Route
              {...rest}
              render={(props) => (token.length === 0 ? (
                <div>
                  <Nav />
                    <div className="">
                      <Components {...props} />
                    </div>
                  <Footer />
                </div>

              ) : <Redirect to="/login" />)}
            />
          )}

      </>
    );
  }
}
