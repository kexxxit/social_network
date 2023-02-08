import React from "react";
import {
    addNewPost, getStatus, setUser,
    updateStatus
} from "../../redux/reducers/profileReducer";
import Profile from "./profileC";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

class ProfileAPI extends React.Component {
    state = {
        userId: this.props.params.userId ? this.props.params.userId : this.props.userId
    }

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setUser(userId)
        this.props.getStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userId !== this.props.userId) {
            this.setState({userId: this.props.userId})
            this.props.setUser(this.props.userId)
            this.props.getStatus(this.props.userId)
        }
    }

    addNewPost = (postContent) => {
        this.props.addNewPost(postContent.current.value)
    }

    render() {
        return <>
            <Profile profilePage={this.props.profilePage}
                     addNewPost={this.addNewPost}
                     data={this.props.data}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        data: state.profilePage.data,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

function withUrlDataCC(props) {
    let params = useParams()
    return <ProfileAPI {...props} params={params}/>
}

const ProfileContainer = connect(mapStateToProps, {setUser, getStatus, updateStatus, addNewPost})(withUrlDataCC)

export default ProfileContainer