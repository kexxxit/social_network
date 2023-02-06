import React from "react";
import {connect} from "react-redux";
import Nav from "./nav";

class navAPI extends React.Component {

    render() {
        return <Nav {...this.props}/>
    }
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth, userId: state.auth.userId})

const NavContainer = connect(mapStateToProps, {})(navAPI)

export default NavContainer