import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {inputEmailUpdater, inputPasswordUpdater,
    loginData, logoutData} from "../../redux/reducers/authReducer";
import {Navigate} from "react-router-dom";

class LoginAPI extends React.Component {
    render() {
        if (this.props.isAuth) return <Navigate to={`/profile`} />
        return <Login isAuth={this.props.isAuth}
                      loginData={this.props.loginData}
                      inputPasswordUpdater = {this.props.inputPasswordUpdater}
                      inputEmailUpdater = {this.props.inputEmailUpdater}

        />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}

const LoginContainer = connect(mapStateToProps, {loginData, inputEmailUpdater, inputPasswordUpdater,logoutData})(LoginAPI)

export default LoginContainer
