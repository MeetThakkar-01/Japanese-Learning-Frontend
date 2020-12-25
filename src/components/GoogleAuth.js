import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

export class GoogleAuth extends Component {
  componentDidMount() {
    // console.log("0000000", this.props.isSignedIn.get());
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1019514497675-37ojvhapa2tqugt259min33sgv4uahf4.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else this.props.signOut();
  };
  handleSignInClick = () => {
    this.auth.signIn();
  };
  handleSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton = () => {
    console.log("props", this.props);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.handleSignOutClick}
          className="ui red google button"
        >
          <i className="google icon"></i>
          SignOut
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={this.handleSignInClick}
        >
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userid: state.auth.userId,
  };
};

export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut,
})(GoogleAuth);
