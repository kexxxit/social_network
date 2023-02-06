import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status != this.props.status) this.setState({status: this.props.status})
    }

    render() {
        console.log(this.props.status)
        return (
            <div>
                {this.state.editMode ?
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/> :
                    <h3 onClick={this.activateEditMode}>{(this.props.status === null) || (this.props.status === '') ? 'Статус отсутствует' : this.props.status}</h3>}

            </div>
        )
    }
}

export default ProfileStatus