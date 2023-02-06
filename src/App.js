import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/profile/profile_container";
import MessagesContainer from "./components/messages/messages_container";
import UsersContainer from "./components/users/Users_container";
import HeaderContainer from "./components/header/headerContainer";
import NavContainer from "./components/nav/navContainer";
import LoginContainer from "./components/login/loginContainer";
import {connect} from "react-redux";
import {initialize} from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavContainer/>
                    <Routes>
                        <Route path="/messages" element={<MessagesContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initialize})(App)