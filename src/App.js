import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/headerContainer";
import NavContainer from "./components/nav/navContainer";
import LoginContainer from "./components/login/loginContainer";
import {connect} from "react-redux";
import {initialize} from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader";

const ProfileContainer = React.lazy(() => import('./components/profile/profile_container'));
const MessagesContainer = React.lazy(() => import('./components/messages/messages_container'));
const UsersContainer = React.lazy(() => import('./components/users/Users_container'));

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
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/messages" element={<MessagesContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                        </Routes>
                    </React.Suspense>
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