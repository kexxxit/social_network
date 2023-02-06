import React from "react";
import {sendMessageActionCreator, sendMessageUpdater} from "../../redux/reducers/dialogsReducer";
import Messages from "./messagesC";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirct";
import {compose} from "redux";

class MessagesAPI extends React.Component {
    sendMessage = (messageText) => {
        this.props.sendMessage(messageText.current.value)
    }
    onNewMessageChange = (e) => {
        let body = e.target.value;
        this.props.onNewMessageChange(body)
    }
    render() {
        return <>
            <Messages sendMessage = {this.sendMessage}
                      onNewMessageChange = {this.onNewMessageChange}
                      messagesPage = {this.props.messagesPage}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (postContent) => {
            dispatch(sendMessageActionCreator(postContent))
        },
        onNewMessageChange: (body) => {
            dispatch(sendMessageUpdater(body))
        }
    }
}



// let AuthRedirectComponent = withAuthRedirect(MessagesAPI)
//
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesAPI)